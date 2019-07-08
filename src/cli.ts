import * as babel from '@babel/core';
import traverse from '@babel/traverse';
import fs from 'fs';
import glob from 'glob';
import * as path from 'path';
import prettier from 'prettier';

import tsToFlowPlugin from '@zxbodya/babel-plugin-flow-to-typescript';
import tsTypesPlugin from './tsTypesPlugin';

async function main(cwd: string) {
  const files = glob.sync('**/*js', {
    cwd,
    nodir: true,
    dot: true,
    ignore: [
      '**/node_modules/**',
      // '**/__tests__/**',
      // '**/dist/**',
    ],
  });

  const state = new Map();
  for (const file of files) {
    console.log(file);

    const source = fs.readFileSync(path.join(cwd, file), { encoding: 'utf8' });
    const flowAst = babel.parseSync(source, {
      ast: true,
      parserOpts: {
        plugins: [
          'flow',
          'jsx',
          'classProperties',
          'objectRestSpread',
          'optionalChaining',
          'dynamicImport',
        ],
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
      plugins: [tsToFlowPlugin],
    });

    if (flow === null) {
      throw new Error('result of conversion to flow is null');
    }

    const targetFileName = file.replace(/\.js$/, isJSX ? '.tsx' : '.ts');

    const ts = babel.transformSync(flow.code as string, {
      filenameRelative: targetFileName,
      plugins: [tsTypesPlugin],
    });

    if (ts === null) {
      throw new Error('result of conversion to to is null');
    }

    const targetFile = path.join(cwd, targetFileName);
    const prettierConfig = (await prettier.resolveConfig(targetFile)) || {};
    prettierConfig.parser = 'typescript';
    const result = prettier.format(ts.code as string, prettierConfig);

    // verification - remove types, remove comments, reformat and compare the text
    // const src = prettier.format(babel.transformSync(source, {
    //   filename: file,
    //   presets: ["@babel/preset-flow"],
    //   parserOpts: {
    //     plugins: [
    //       'flow',
    //       'jsx',
    //       'classProperties',
    //       'objectRestSpread',
    //       'optionalChaining',
    //       'dynamicImport'
    //     ]
    //   },
    // })!.code as string, prettierConfig);
    //
    // const tgt = prettier.format(babel.transformSync(result, {
    //   filename: targetFileName,
    //   presets: ["@babel/preset-typescript"],
    //   parserOpts: {
    //     plugins: [
    //       'typescript',
    //       'jsx',
    //       'classProperties',
    //       'objectRestSpread',
    //       'optionalChaining',
    //       'dynamicImport'
    //     ]
    //   },
    // })!.code as string, prettierConfig);
    //
    // if(src !== tgt){
    //   fs.writeFileSync(targetFile+ '.1.js', src);
    //   fs.writeFileSync(targetFile+ '.2.js', tgt);
    //   console.log('not matching');
    // }

    console.log(targetFileName);
    fs.writeFileSync(targetFile, result);
  }
  // console.log(files);
}

Promise.all(process.argv.slice(2).map(dir => main(dir))).then(
  () => {
    console.log('done');
  },
  e => {
    console.error(e);
  }
);
