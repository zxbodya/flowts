import * as babel from '@babel/core';
import tsToFlowPlugin from '@zxbodya/babel-plugin-flow-to-typescript';
import { promises as fs } from 'fs';
import globby from 'globby';
import * as path from 'path';
import * as prettier from 'prettier';
import { diff as jestDiff } from 'jest-diff';
import { detectOptions } from './detectOptions';
import recastPlugin from '@flowts/babel-plugin-recast';
import tsTypesPlugin from './tsTypesPlugin';
import { verify } from './verify/verify';
import { Options } from './cli';
import removeImportExtensionPlugin from './removeImportExtensionPlugin';
import { sharedParserPlugins } from './sharedParserPlugins';
import ora from 'ora';
import readline from 'readline';

export async function convert(cwd: string, opts: Options) {
  console.log('options:', opts);
  const spinner = ora().start(`processing files in ${cwd}`);
  const transformPlugins = [];
  if (opts.recast) {
    transformPlugins.push(recastPlugin);
  }

  const files = await globby(opts.include, {
    cwd,
    onlyFiles: true,
    dot: true,
    ignore: ['**/node_modules/**', ...opts.exclude],
    gitignore: opts.gitignore,
  });

  type FileInfo = {
    file: string;
    isJSX: boolean;
    isFlow: boolean;
    source: string;
    isConverted: boolean;
  };

  const filesInfo = new Map<string, FileInfo>();
  spinner.info('detecting options for the files');
  let totalStr = `${files.length}`;
  let currentCount = 0;
  for (const file of files) {
    const currentStr = `${currentCount}`.padStart(totalStr.length, ' ');
    spinner.start(`[${currentStr}/${totalStr}] ${file}`);
    try {
      const filepath = path.join(cwd, file);
      const source = await fs.readFile(filepath, { encoding: 'utf8' });

      const { isJSX, isFlow } = detectOptions(source, file);

      const isConverted = isFlow || !opts.allowJs;

      const info: FileInfo = {
        file,
        source,
        isJSX,
        isFlow,
        isConverted,
      };
      filesInfo.set(file, info);
    } catch (e) {
      spinner.fail(file);
      spinner.fail('error while trying to detect options');
      console.error(e);
      spinner.start();
    }
    currentCount += 1;
  }
  spinner.succeed('finished analysing source files');
  spinner.info('converting code to TypeScript');
  const results: Array<{
    isTyped: boolean;
    sourceFilePath: string;
    targetFilePath: string;
    source: string;
    result: string;
    isValid: boolean;
  }> = [];

  const prettierConfigWarnings = new Set<string>();
  totalStr = `${files.length}`;
  currentCount = 0;
  for (const file of files) {
    const currentStr = `${currentCount}`.padStart(totalStr.length, ' ');
    spinner.start(`[${currentStr}/${totalStr}] ${file}`);
    const info = filesInfo.get(file);
    if (!info) {
      spinner.warn('file info missing - check log for errors');
      continue;
    }
    try {
      const { file, source, isJSX, isFlow } = info;

      const targetExt = isJSX
        ? '.tsx'
        : /\.js\.flow$/i.test(file)
        ? '.d.ts'
        : '.ts';

      const targetFileName = file.replace(/(?:\.jsx?|\.js\.flow)$/i, targetExt);
      const sourceFilePath = path.join(cwd, file);
      const targetFilePath = path.join(cwd, targetFileName);

      const isTyped = isFlow;
      if (!isFlow) {
        results.push({
          isTyped,
          sourceFilePath,
          targetFilePath,
          source,
          result: source,
          isValid: true,
        });
        continue;
      }

      const tsSyntax = await babel.transformAsync(source, {
        compact: false,
        babelrc: false,
        configFile: false,
        filename: sourceFilePath,
        plugins: [...transformPlugins, [tsToFlowPlugin, { isJSX }]],
        generatorOpts: {
          decoratorsBeforeExport: true,
        },
        parserOpts: {
          allowReturnOutsideFunction: true,
          plugins: [...sharedParserPlugins],
        },
      });

      if (tsSyntax === null) {
        throw new Error(
          'babel.transformAsync returned null - probably there is some configuration error'
        );
      }

      const isConvertedFile = (source: string) => {
        const normalizedPath = path
          .resolve(path.dirname(sourceFilePath), source)
          .substr(path.resolve(cwd).length + 1);

        const requestedFileInfo = filesInfo.get(normalizedPath);
        return requestedFileInfo && requestedFileInfo.isConverted;
      };

      const ts = await babel.transformAsync(tsSyntax.code as string, {
        compact: false,
        babelrc: false,
        configFile: false,
        filename: targetFilePath,
        plugins: [
          ...transformPlugins,
          [tsTypesPlugin, { isJSX }],
          [removeImportExtensionPlugin, { isConvertedFile }],
        ],
        generatorOpts: {
          decoratorsBeforeExport: true,
        },
        parserOpts: {
          allowReturnOutsideFunction: true,
          plugins: [
            'typescript',
            ...(isJSX ? ['jsx' as const] : []),
            ...sharedParserPlugins,
          ],
        },
      });

      if (ts === null) {
        throw new Error(
          'babel.transformSync returned null - probably there is some configuration error'
        );
      }

      let result = ts.code as string;
      if (opts.prettier) {
        let prettierConfig: prettier.Options = {};
        let configFile: string | null | undefined;
        try {
          configFile = await prettier.resolveConfigFile(targetFilePath);
          prettierConfig = (await prettier.resolveConfig(targetFilePath)) || {};
        } catch (e) {
          if (!configFile) {
            spinner.warn(
              `failed to find prettier config for ${targetFilePath}`
            );
          } else {
            if (!prettierConfigWarnings.has(configFile)) {
              spinner.warn(`failed to load prettier config ${configFile}`);
              prettierConfigWarnings.add(configFile);
            }
          }
        }

        try {
          prettierConfig.parser = 'babel-ts';
          result = prettier.format(result, {
            ...prettierConfig,
            // avoid changing template strings
            embeddedLanguageFormatting: 'off',
          });
        } catch (e) {
          // retry using different parser - this can be helpful with flow type comments in some edge cases
          prettierConfig.parser = 'typescript';

          try {
            result = prettier.format(result, {
              ...prettierConfig,
              // avoid changing template strings
              embeddedLanguageFormatting: 'off',
            });
          } catch (e) {
            spinner.warn('prettier formatting failed');
            console.error(e);
          }
        }
      }

      const verificationResult = verify(
        source,
        result,
        isJSX,
        sourceFilePath,
        targetFilePath,
        isConvertedFile
      );

      let isValid = true;
      if (!verificationResult.isEqual) {
        spinner.fail(targetFilePath);
        spinner.fail(
          'verification failed, diff after stripping type annotations:'
        );
        const changes = jestDiff(
          verificationResult.src,
          verificationResult.tgt
        );
        console.log(changes);
        isValid = false;
      }
      results.push({
        isTyped,
        sourceFilePath,
        targetFilePath,
        source,
        result,
        isValid,
      });
    } catch (e) {
      spinner.fail(file);
      spinner.fail('error while trying to convert');
      console.error(e);
    }
    currentCount += 1;
  }
  spinner.info('renaming converted files');
  totalStr = `${results.length}`;
  currentCount = 0;
  for (const { isTyped, sourceFilePath, targetFilePath } of results) {
    const currentStr = `${currentCount}`.padStart(totalStr.length, ' ');
    spinner.start(`[${currentStr}/${totalStr}] ${sourceFilePath}`);
    if (!opts.allowJs || isTyped) {
      await fs.rename(sourceFilePath, targetFilePath);
    }
    currentCount += 1;
  }
  spinner.succeed('renamed converted files');

  if (opts.interactiveRename) {
    await new Promise(resolve => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question('Press <enter> to write converted code:', () => {
        rl.close();
        resolve(undefined);
      });
    });
  }
  spinner.info('writing converted files');

  totalStr = `${results.length}`;
  currentCount = 0;
  for (const {
    isTyped,
    sourceFilePath,
    targetFilePath,
    source,
    result,
    isValid,
  } of results) {
    const currentStr = `${currentCount}`.padStart(totalStr.length, ' ');
    spinner.start(`[${currentStr}/${totalStr}] ${sourceFilePath}`);
    if (isTyped) {
      await fs.writeFile(targetFilePath, result);
      if (!isValid) {
        await fs.writeFile(sourceFilePath, source);
      }
    }
    currentCount += 1;
  }

  const toReview = results
    .filter(r => !r.isValid && r.isTyped)
    .map(r => r.sourceFilePath);
  if (toReview.length) {
    spinner.warn(`Files to review:
${toReview.join('\n')}
`);
  }
  // count stats about converted code base
  let cloc = 0;
  for (const { isTyped, source, isValid } of results) {
    if (isTyped && isValid) {
      cloc += source.split(/\r\n|\r|\n/).length;
    }
  }
  spinner.succeed(`converted ${cloc} lines of code`);
}
