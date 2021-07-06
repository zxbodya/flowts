import * as babel from '@babel/core';
import { promises as fs } from 'fs';
import * as globby from 'globby';
import * as path from 'path';
import * as prettier from 'prettier';
import recastPlugin from '@flowts/babel-plugin-recast';
import { sharedParserPlugins } from './sharedParserPlugins';
import ora from 'ora';
import tsToFlow from 'babel-plugin-typescript-to-flow';
import type { Options } from './tsflow';

export async function convert(cwd: string, opts: Options) {
  console.log('options:', opts);
  const spinner = ora().start(`processing files in ${cwd}`);
  const transformPlugins = [];
  if (opts.recast) {
    transformPlugins.push(recastPlugin);
  }

  const files = globby.sync(opts.include, {
    cwd,
    onlyFiles: true,
    dot: true,
    ignore: ['**/node_modules/**', ...opts.exclude],
    gitignore: true,
  });

  spinner.info('converting source files');
  for (const file of files) {
    spinner.info(file);
    const filepath = path.join(cwd, file);
    const source = await fs.readFile(filepath, { encoding: 'utf8' });

    try {
      const isAmbientContext = /\.d\.ts$/i.test(file);
      const targetExt = isAmbientContext ? '.js.flow' : '.js';

      const targetFileName = file.replace(/(?:\.ts|\.d\.ts)$/i, targetExt);
      const sourceFilePath = path.join(cwd, file);
      const targetFilePath = path.join(cwd, targetFileName);

      const flowSyntax = await babel.transformAsync(source, {
        compact: false,
        babelrc: false,
        filename: sourceFilePath,
        plugins: [...transformPlugins, [tsToFlow, { isAmbientContext }]],
        parserOpts: {
          allowReturnOutsideFunction: true,
          plugins: ['typescript', ...sharedParserPlugins],
        },
      });

      if (flowSyntax === null) {
        throw new Error(
          'babel.transformAsync returned null - probably there is some configuration error'
        );
      }

      const isConvertedFile = (source: string) => {
        return false;
      };

      const flow = flowSyntax;
      // todo: after converting the syntax do the logic fixes (like tsTypesPlugin but in opposite direction)

      let result = flow.code as string;
      if (opts.prettier) {
        const prettierConfig =
          (await prettier.resolveConfig(targetFilePath)) || {};
        prettierConfig.parser = 'babel';

        result = prettier.format(result, prettierConfig);
      }

      await fs.writeFile(targetFilePath, result);

      // todo: add verification step ensuring ast except type is not changed
      // while focusing on definition files this can be skipped
    } catch (e) {
      console.error('error while trying to convert');
      console.error(e);
    }
  }
}
