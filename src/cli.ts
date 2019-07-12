import * as babel from '@babel/core';
import traverse from '@babel/traverse';
import tsToFlowPlugin from '@zxbodya/babel-plugin-flow-to-typescript';
import * as commander from 'commander';
import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';
import * as prettier from 'prettier';
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

  const state = new Map();

  const sharedParserPlugins = [
    'jsx',
    'classProperties',
    'objectRestSpread',
    'optionalChaining',
    'dynamicImport',
  ] as const;
  for (const file of files) {
    console.log(file);

    const source = fs.readFileSync(path.join(cwd, file), { encoding: 'utf8' });
    const flowAst = babel.parseSync(source, {
      ast: true,
      parserOpts: {
        plugins: ['flow', ...sharedParserPlugins],
      },
      filename: file,
    });

    if (flowAst === null) {
      throw new Error('sourceAst === null');
    }
    let isJSX = false;
    let isFlow = /@flow/.test(source);
    traverse(flowAst, {
      JSX() {
        isJSX = true;
      },
      Flow() {
        isFlow = true;
      },
    });

    console.log({ isFlow, isJSX });
    if (!isFlow) {
      continue;
    }

    const flow = babel.transformSync(source, {
      plugins: [...transformPlugins, [tsToFlowPlugin, { isJSX }]],
    });

    if (flow === null) {
      throw new Error('result of conversion to flow is null');
    }

    const targetFileName = file.replace(/\.js$/, isJSX ? '.tsx' : '.ts');

    const ts = babel.transformSync(flow.code as string, {
      filenameRelative: targetFileName,
      plugins: [...transformPlugins, tsTypesPlugin],
    });

    if (ts === null) {
      throw new Error('result of conversion to to is null');
    }

    const targetFile = path.join(cwd, targetFileName);
    const prettierConfig = (await prettier.resolveConfig(targetFile)) || {};
    prettierConfig.parser = 'typescript';
    const result = prettier.format(ts.code as string, prettierConfig);

    // verification - remove types, remove comments, reformat and compare the text
    // todo: make it ignore import/export differences caused by babel not removing type imports/exports for typescript
    // const jsxPlugin = isJSX ? (['jsx'] as const) : [];
    // if (opts.verify) {
    //   const src = prettier.format(
    //     babel.transformSync(source, {
    //       filename: file,
    //       comments: false,
    //       compact: true,
    //       presets: ['@babel/preset-flow'],
    //       parserOpts: {
    //         plugins: ['flow', ...jsxPlugin, ...sharedParserPlugins],
    //       },
    //     })!.code as string,
    //     prettierConfig
    //   );
    //
    //   const tgt = prettier.format(
    //     babel.transformSync(result, {
    //       filename: targetFileName,
    //       comments: false,
    //       compact: true,
    //       presets: ['@babel/preset-typescript'],
    //       parserOpts: {
    //         plugins: ['typescript', ...jsxPlugin, ...sharedParserPlugins],
    //       },
    //     })!.code as string,
    //     prettierConfig
    //   );
    //
    //   if (src !== tgt) {
    //     const origCompiled = targetFile + '.orig.js';
    //     const convertedCompiled = targetFile + '.conv.js';
    //     fs.writeFileSync(origCompiled, src);
    //     fs.writeFileSync(convertedCompiled, tgt);
    //
    //     console.error(`resulting js files are different for: ${file}`);
    //   }
    // }
    fs.writeFileSync(targetFile, result);
  }
  // console.log(files);
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
