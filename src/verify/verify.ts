import * as babel from '@babel/core';
import * as prettier from 'prettier';
import { sharedParserPlugins } from '../sharedParserPlugins';
import removeImportExtensionPlugin from '../removeImportExtensionPlugin';

// self verification
//  - remove types
//  - remove comments
//  - reformat using prettier
//  - compare the text
//
// assumption is that if converter works correctly - there should be no difference in resulting js code

export function verify(
  source: string,
  result: string,
  isJSX: boolean,
  filename: string,
  target: string,
  isConvertedFile: (source: string) => boolean | undefined
) {
  const jsxPlugin = isJSX ? (['jsx'] as const) : [];

  let srcNoTypes = babel.transformSync(source, {
    babelrc: false,
    filename,
    presets: [require.resolve('@babel/preset-flow')],
    parserOpts: {
      plugins: ['flow', ...jsxPlugin, ...sharedParserPlugins],
    },
  });
  if (srcNoTypes === null) {
    throw new Error(
      'result of babel transform is null, likely configuration error'
    );
  }

  srcNoTypes = babel.transformSync(srcNoTypes.code!, {
    babelrc: false,
    filename,
    comments: false,
    plugins: [[removeImportExtensionPlugin, { isConvertedFile }]],
    parserOpts: {
      plugins: [...jsxPlugin, ...sharedParserPlugins],
    },
  });
  if (srcNoTypes === null) {
    throw new Error(
      'result of babel transform is null, likely configuration error'
    );
  }

  let resultNoTypes = babel.transformSync(result, {
    babelrc: false,
    filename: target,
    presets: [
      [
        require.resolve('@babel/preset-typescript'),
        { onlyRemoveTypeImports: true },
      ],
    ],
    parserOpts: {
      plugins: ['typescript', ...jsxPlugin, ...sharedParserPlugins],
    },
  });
  if (resultNoTypes === null) {
    throw new Error(
      'result of babel transform is null, likely configuration error'
    );
  }

  resultNoTypes = babel.transformSync(resultNoTypes.code!, {
    babelrc: false,
    filename: target,
    comments: false,
    plugins: [],
    parserOpts: {
      plugins: [...jsxPlugin, ...sharedParserPlugins],
    },
  });
  if (resultNoTypes === null) {
    throw new Error(
      'result of babel transform is null, likely configuration error'
    );
  }

  const src = prettier.format(srcNoTypes.code!, { parser: 'babel' });
  const tgt = prettier.format(resultNoTypes.code!, { parser: 'babel' });

  return { isEqual: src === tgt, src, tgt };
}
