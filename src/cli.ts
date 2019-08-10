import * as babel from '@babel/core';
import tsToFlowPlugin from '@zxbodya/babel-plugin-flow-to-typescript';
import * as commander from 'commander';
import * as fs from 'fs';
import * as globby from 'globby';
import * as path from 'path';
import * as prettier from 'prettier';
import jestDiff from 'jest-diff';
import { detectOptions } from './detectOptions';
import recastPlugin from './recastPlugin';
import tsTypesPlugin from './tsTypesPlugin';
import { verify } from './verify';

interface Options {
  recast: boolean;
  verify: boolean;
}

async function main(cwd: string, opts: Options) {
  console.log(`processing files in ${cwd}`);

  const transformPlugins = [];
  if (opts.recast) {
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

      if (!isFlow) {
        console.log('no flow - skip');
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

      const targetExt = isJSX
        ? '.tsx'
        : /\.js\.flow$/i.test(file)
        ? '.d.ts'
        : '.ts';

      const targetFileName = file.replace(/(?:\.jsx?|\.js\.flow)$/i, targetExt);
      const targetFile = path.join(cwd, targetFileName);

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

      const prettierConfig = (await prettier.resolveConfig(targetFile)) || {};
      prettierConfig.parser = 'typescript';
      const result = prettier.format(ts.code as string, prettierConfig);

      fs.writeFileSync(targetFile, result);

      const verificationResult = verify(
        source,
        result,
        isJSX,
        filepath,
        targetFile
      );
      if (verificationResult.isEqual) {
        console.log(
          'verification failed, diff after stripping type annotations:'
        );
        const changes = jestDiff(
          verificationResult.src,
          verificationResult.tgt
        );
        console.log(changes);
      }
    } catch (e) {
      console.error('error while trying to convert');
      console.error(e);
    }
  }
}

const program = new commander.Command()
  .name('flowts')
  .usage('./src ./test')
  .option('--recast', 'use recast', false)
  .parse(process.argv);

Promise.all(program.args.map(dir => main(dir, program.opts() as Options))).then(
  () => {
    console.log('done');
  },
  e => {
    console.error(e);
  }
);
