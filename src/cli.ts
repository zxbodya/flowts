import * as babel from '@babel/core';
import tsToFlowPlugin from '@zxbodya/babel-plugin-flow-to-typescript';
import * as commander from 'commander';
import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';
import * as prettier from 'prettier';
import { detectOptions } from './detectOptions';
import recastPlugin from './recastPlugin';
import tsTypesPlugin from './tsTypesPlugin';

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

  const files = glob.sync('**/*.{js,jsx}', {
    cwd,
    nodir: true,
    dot: true,
    ignore: ['**/node_modules/**', '**/dist/**'],
  });

  // todo: collect modules info to use for:
  // - renaming imports having '.js' extension
  // - adding missing @types/* to package.json

  const state = new Map();

  for (const file of files) {
    console.log(file);

    const source = fs.readFileSync(path.join(cwd, file), { encoding: 'utf8' });

    const { isJSX, isFlow } = detectOptions(source, file);

    console.log({ isFlow, isJSX });
    if (!isFlow) {
      continue;
    }

    const tsSyntax = babel.transformSync(source, {
      babelrc: false,
      plugins: [...transformPlugins, [tsToFlowPlugin, { isJSX }]],
    });

    if (tsSyntax === null) {
      throw new Error(
        'babel.transformSync returned null - probably there is some configuration error'
      );
    }

    const targetFileName = file.replace(/\.js$/, isJSX ? '.tsx' : '.ts');

    const ts = babel.transformSync(tsSyntax.code as string, {
      babelrc: false,
      filename: targetFileName,
      plugins: [...transformPlugins, tsTypesPlugin],
    });

    if (ts === null) {
      throw new Error(
        'babel.transformSync returned null - probably there is some configuration error'
      );
    }

    const targetFile = path.join(cwd, targetFileName);
    const prettierConfig = (await prettier.resolveConfig(targetFile)) || {};
    prettierConfig.parser = 'typescript';
    const result = prettier.format(ts.code as string, prettierConfig);

    fs.writeFileSync(targetFile, result);
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
