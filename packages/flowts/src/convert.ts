import * as babel from '@babel/core';
import { promises as fs } from 'fs';
import globby from 'globby';
import * as path from 'path';
import { diff as jestDiff } from 'jest-diff';
import { detectOptions, SourceOptions } from './detectOptions';
import recastPlugin from '@flowts/babel-plugin-recast';
import { verify } from './verify/verify';
import removeImportExtensionPlugin from './removeImportExtensionPlugin';
import { sharedParserPlugins } from './sharedParserPlugins';
import ora from 'ora';
import type { ParserPlugin } from '@babel/parser';
import fixFlowPragmaPlugin from './fixFlowPragmaPlugin';
import type { PluginItem } from '@babel/core';
import { convertFile } from './convertFile';

type ConvertOptions = {
  readonly recast: boolean;
  readonly prettier: boolean;
  readonly allowJs: boolean;
  readonly gitignore: boolean;
  readonly include: string;
  readonly exclude: string[];
  readonly dryRun: boolean;
  readonly legacyImports: boolean;
  readonly keepAnnotatedJs: boolean;
  readonly removeAllImportExtensions?: boolean;
  readonly keepImportExtensions?: boolean;
  renameHook?: () => Promise<void>;
  /**
   * Additional babel plugin codemods with type fixes to apply on converted code.
   * Each plugin is to be run separately in order they are provided. To avoid possible conflicts.
   *
   * Because of the verification step after codemods - changes should be limited to changing only type annotations or comments.
   * @param opts
   */
  getTypeFixesBabelPlugins?: (opts: {
    isJSX: boolean;
  }) => PluginItem[] | null | undefined;
};

export async function convert(cwd: string, opts: ConvertOptions) {
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
    ignore: opts.exclude,
    gitignore: opts.gitignore,
  });

  type FileInfo = {
    file: string;
    isFlow: boolean;
    source: string;
    isConverted: boolean;
    fileOptions: SourceOptions;
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

      const fileOptions = detectOptions(source, file);

      const isFlow =
        fileOptions.hasTypes ||
        fileOptions.isDefinitionFile ||
        (!opts.keepAnnotatedJs &&
          (fileOptions.hasFlowAnnotation || fileOptions.hasNoFlowAnnotation));

      const isConverted = isFlow || !opts.allowJs;

      const info: FileInfo = {
        file,
        source,
        isFlow,
        isConverted,
        fileOptions,
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
    isConverted: boolean;
    sourceFilePath: string;
    targetFilePath: string;
    source: string;
    result: string;
    isValid: boolean;
  }> = [];

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
      const {
        file,
        source,
        fileOptions: { isJSX },
        isFlow,
      } = info;

      const targetExt = isJSX
        ? '.tsx'
        : /\.js\.flow$/i.test(file)
        ? '.d.ts'
        : '.ts';

      const targetFileName = file.replace(/(?:\.jsx?|\.js\.flow)$/i, targetExt);
      const sourceFilePath = path.join(cwd, file);
      const targetFilePath = path.join(cwd, targetFileName);

      const isConvertedFile = (source: string) => {
        if (opts.removeAllImportExtensions) {
          return /^\./.test(source);
        }

        const normalizedPath = path
          .resolve(path.dirname(sourceFilePath), source)
          .substr(path.resolve(cwd).length + 1);

        const requestedFileInfo = filesInfo.get(normalizedPath);
        return requestedFileInfo && requestedFileInfo.isConverted;
      };

      const flowParserPlugins: ParserPlugin[] = [];
      flowParserPlugins.push('flow');
      if (isJSX) {
        flowParserPlugins.push('jsx');
      }
      const codeNoExtensions = opts.keepImportExtensions
        ? source
        : ((
            await babel.transformAsync(source, {
              compact: false,
              babelrc: false,
              configFile: false,
              filename: sourceFilePath,
              plugins: [
                ...transformPlugins,
                [removeImportExtensionPlugin, { isConvertedFile }],
              ],
              generatorOpts: {
                decoratorsBeforeExport: true,
              },
              parserOpts: {
                allowReturnOutsideFunction: true,
                plugins: [...sharedParserPlugins, ...flowParserPlugins],
              },
            })
          )?.code as string);

      if (codeNoExtensions === null) {
        throw new Error(
          'babel.transformAsync returned null - probably there is some configuration error'
        );
      }

      if (!isFlow && opts.allowJs) {
        let code: string;
        code = codeNoExtensions;
        if (
          info.fileOptions.hasFlowAnnotation ||
          info.fileOptions.hasNoFlowAnnotation
        ) {
          const fixed = await babel.transformAsync(codeNoExtensions, {
            compact: false,
            babelrc: false,
            configFile: false,
            filename: sourceFilePath,
            plugins: [...transformPlugins, fixFlowPragmaPlugin],
            generatorOpts: {
              decoratorsBeforeExport: true,
            },
            parserOpts: {
              allowReturnOutsideFunction: true,
              plugins: [...sharedParserPlugins, ...flowParserPlugins],
            },
          });

          if (fixed === null) {
            throw new Error(
              'babel.transformAsync returned null - probably there is some configuration error'
            );
          }
          code = fixed!.code as string;
        }
        if (filesInfo)
          results.push({
            isConverted: false,
            sourceFilePath,
            targetFilePath,
            source,
            result: code,
            isValid: true,
          });
        continue;
      }

      const result = await convertFile(codeNoExtensions, {
        sourceFilePath,
        targetFilePath,
        recast: opts.recast,
        prettier: opts.prettier,
        fileOptions: info.fileOptions,
        legacyImports: opts.legacyImports,
        logger: {
          warn(mesage) {
            spinner.warn(sourceFilePath);
            spinner.warn(mesage);
          },
          log(mesage) {
            spinner.info(sourceFilePath);
            spinner.info(mesage);
          },
          error(mesage) {
            spinner.fail(sourceFilePath);
            spinner.fail(mesage);
          },
        },
        getTypeFixesBabelPlugins: opts.getTypeFixesBabelPlugins,
        removeImportExtensions: false,
      });

      // delay to update the ui
      await new Promise(r => setTimeout(r, 1));

      const verificationResult = verify(
        source,
        result,
        isJSX,
        sourceFilePath,
        targetFilePath,
        opts.keepImportExtensions ? false : isConvertedFile
      );

      let isValid = true;
      if (!verificationResult.isEqual) {
        spinner.fail(targetFilePath);
        spinner.fail(
          'verification failed, diff after stripping type annotations:'
        );
        const changes = jestDiff(
          verificationResult.src,
          verificationResult.tgt,
          {
            contextLines: 5,
            // show smaller diff of issues found instead of complete file diff
            expand: false,
          }
        );
        console.log(changes);
        isValid = false;
      }
      results.push({
        isConverted: true,
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
  for (const { isConverted, sourceFilePath, targetFilePath } of results) {
    const currentStr = `${currentCount}`.padStart(totalStr.length, ' ');

    if (!opts.dryRun) {
      spinner.start(`[${currentStr}/${totalStr}] ${sourceFilePath}`);
      if (isConverted) {
        await fs.rename(sourceFilePath, targetFilePath);
        const maybeJestSnapshotPath = path.join(
          path.dirname(sourceFilePath),
          '__snapshots__',
          path.basename(sourceFilePath) + '.snap'
        );
        let snapshotEsists = false;
        try {
          snapshotEsists = (await fs.stat(maybeJestSnapshotPath)).isFile();
        } catch (e) {
          // ignored
        }
        if (snapshotEsists) {
          const targetJestSnapshotPath = path.join(
            path.dirname(targetFilePath),
            '__snapshots__',
            path.basename(targetFilePath) + '.snap'
          );
          await fs.rename(maybeJestSnapshotPath, targetJestSnapshotPath);
        }
      }
      // delay to update the ui
      await new Promise(r => setTimeout(r, 1));
    }
    currentCount += 1;
  }
  spinner.succeed('renamed converted files');

  if (opts.renameHook) {
    await opts.renameHook();
  }
  spinner.info('writing converted files');

  totalStr = `${results.length}`;
  currentCount = 0;
  for (const {
    isConverted,
    sourceFilePath,
    targetFilePath,
    source,
    result,
    isValid,
  } of results) {
    const currentStr = `${currentCount}`.padStart(totalStr.length, ' ');
    if (!opts.dryRun) {
      spinner.start(`[${currentStr}/${totalStr}] ${sourceFilePath}`);
      if (isConverted) {
        await fs.writeFile(targetFilePath, result);

        if (!isValid) {
          await fs.writeFile(sourceFilePath, source);
        }
      } else {
        if (source !== result) {
          await fs.writeFile(sourceFilePath, result);
        }
      }
      // delay to update the ui
      await new Promise(r => setTimeout(r, 1));
    }
    currentCount += 1;
  }

  const toReview = results
    .filter(r => !r.isValid && r.isConverted)
    .map(r => r.sourceFilePath);
  if (toReview.length) {
    spinner.warn(`Files to review:
${toReview.join('\n')}
`);
  }
  // count stats about converted code base
  let cloc = 0;
  for (const { isConverted, source, isValid } of results) {
    if (isConverted && isValid) {
      cloc += source.split(/\r\n|\r|\n/).length;
    }
  }
  spinner.succeed(`converted ${cloc} lines of code`);
}
