import * as babel from '@babel/core';
import tsToFlowPlugin from '@zxbodya/babel-plugin-flow-to-typescript';
import * as fs from 'fs';
import * as globby from 'globby';
import * as path from 'path';
import * as prettier from 'prettier';
import jestDiff from 'jest-diff';
import { detectOptions } from './detectOptions';
import recastPlugin from './recastPlugin';
import tsTypesPlugin from './tsTypesPlugin';
import { verify } from './verify/verify';
import { Options } from './cli';
import removeImportExtensionPlugin from './removeImportExtensionPlugin';
import { sharedParserPlugins } from './sharedParserPlugins';

export async function convert(cwd: string, opts: Options) {
  console.log(`processing files in ${cwd}`);
  console.log('options:', opts);

  const transformPlugins = [];
  if (opts.recast) {
    transformPlugins.push(recastPlugin);
  }

  const files = globby.sync(opts.include, {
    cwd,
    onlyFiles: true,
    dot: true,
    ignore: ['**/node_modules/**', opts.exclude],
    gitignore: true,
  });

  type FileInfo = {
    file: string;
    isJSX: boolean;
    isFlow: boolean;
    source: string;
    isConverted: boolean;
  };

  const filesInfo = new Map<string, FileInfo>();

  console.log('analysing source files');
  for (const file of files) {
    console.log(file);
    try {
      const filepath = path.join(cwd, file);
      const source = fs.readFileSync(filepath, { encoding: 'utf8' });

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
      console.error('error while trying to detect options');
      console.error(e);
    }
  }
  console.log('convert files');
  for (const file of files) {
    console.log(file);
    const info = filesInfo.get(file);
    if (!info) {
      console.log('file info missing - check log for errors');
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

      if (!isFlow) {
        if (opts.allowJs) {
          console.log('no flow - skip');
        } else {
          console.log('no flow - copy');
          fs.copyFileSync(sourceFilePath, targetFilePath);
          if (opts.remove) {
            fs.unlinkSync(sourceFilePath);
          }
        }
        continue;
      }

      const tsSyntax = babel.transformSync(source, {
        babelrc: false,
        configFile: false,
        filename: sourceFilePath,
        plugins: [...transformPlugins, [tsToFlowPlugin, { isJSX }]],
        parserOpts: {
          plugins: [...sharedParserPlugins],
        },
      });

      if (tsSyntax === null) {
        throw new Error(
          'babel.transformSync returned null - probably there is some configuration error'
        );
      }

      const isConvertedFile = (source: string) => {
        const normalizedPath = path
          .resolve(path.dirname(sourceFilePath), source)
          .substr(path.resolve(cwd).length + 1);

        const requestedFileInfo = filesInfo.get(normalizedPath);
        return requestedFileInfo && requestedFileInfo.isConverted;
      };

      const ts = babel.transformSync(tsSyntax.code as string, {
        babelrc: false,
        configFile: false,
        filename: targetFilePath,
        plugins: [
          ...transformPlugins,
          [tsTypesPlugin, { isJSX }],
          [removeImportExtensionPlugin, { isConvertedFile }],
        ],
        parserOpts: {
          plugins: [...sharedParserPlugins],
        },
      });

      if (ts === null) {
        throw new Error(
          'babel.transformSync returned null - probably there is some configuration error'
        );
      }

      let result = ts.code as string;
      if (opts.prettier) {
        const prettierConfig =
          (await prettier.resolveConfig(targetFilePath)) || {};
        prettierConfig.parser = 'typescript';

        result = prettier.format(result, prettierConfig);
      }

      fs.writeFileSync(targetFilePath, result);

      const verificationResult = verify(
        source,
        result,
        isJSX,
        sourceFilePath,
        targetFilePath,
        isConvertedFile
      );

      if (!verificationResult.isEqual) {
        console.log(
          'verification failed, diff after stripping type annotations:'
        );
        const changes = jestDiff(
          verificationResult.src,
          verificationResult.tgt
        );
        console.log(changes);
        if (opts.remove) {
          console.log('keeping source file');
        }
      } else {
        if (opts.remove) {
          fs.unlinkSync(sourceFilePath);
        }
      }
    } catch (e) {
      console.error('error while trying to convert');
      console.error(e);
    }
  }
}
