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
import { verify } from './verify';
import { ConvertFolderOptions } from './cli';

export async function convertFolder(cwd: string, opts: ConvertFolderOptions) {
  console.log(`processing files in ${cwd}`);

  const transformPlugins = [];
  if (opts.parent.recast) {
    transformPlugins.push(recastPlugin);
  }

  const files = globby.sync('**/*.{js,mjs,jsx,js.flow}', {
    cwd,
    onlyFiles: true,
    dot: true,
    ignore: ['**/node_modules/**'],
    gitignore: true,
  });

  // todo: collect modules info to use for:
  // - renaming imports having '.js' extension
  // - adding missing @types/* to package.json

  const state = new Map();

  for (const file of files) {
    console.log(file);
    try {
      let filepath = path.join(cwd, file);
      const source = fs.readFileSync(filepath, { encoding: 'utf8' });

      const { isJSX, isFlow } = detectOptions(source, file);

      const targetExt = isJSX
        ? '.tsx'
        : /\.js\.flow$/i.test(file)
        ? '.d.ts'
        : '.ts';

      const targetFileName = file.replace(/(?:\.jsx?|\.js\.flow)$/i, targetExt);
      const targetFile = path.join(cwd, targetFileName);

      if (!isFlow) {
        if (opts.allowJs) {
          console.log('no flow - skip');
        } else {
          console.log('no flow - copy');
          fs.copyFileSync(filepath, targetFile);
          if (opts.remove) {
            fs.unlinkSync(filepath);
          }
        }
        continue;
      }

      const tsSyntax = babel.transformSync(source, {
        babelrc: false,
        filename: filepath,
        plugins: [...transformPlugins, [tsToFlowPlugin, { isJSX }]],
      });

      if (tsSyntax === null) {
        throw new Error(
          'babel.transformSync returned null - probably there is some configuration error'
        );
      }

      const ts = babel.transformSync(tsSyntax.code as string, {
        babelrc: false,
        filename: targetFile,
        plugins: [...transformPlugins, tsTypesPlugin],
      });

      if (ts === null) {
        throw new Error(
          'babel.transformSync returned null - probably there is some configuration error'
        );
      }

      let result = ts.code as string;
      if (opts.parent.prettier) {
        const prettierConfig = (await prettier.resolveConfig(targetFile)) || {};
        prettierConfig.parser = 'typescript';

        result = prettier.format(result, prettierConfig);
      }

      fs.writeFileSync(targetFile, result);

      const verificationResult = verify(
        source,
        result,
        isJSX,
        filepath,
        targetFile
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
          fs.unlinkSync(filepath);
        }
      }
    } catch (e) {
      console.error('error while trying to convert');
      console.error(e);
    }
  }
}
