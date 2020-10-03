import * as babel from '@babel/core';
import * as prettier from 'prettier';
import { sharedParserPlugins } from '../sharedParserPlugins';
import removeImportExtensionPlugin from '../removeImportExtensionPlugin';
import removeExportAllTypePlugin from './removeExportAllTypePlugin';

// self verification
//  - remove types
//  - remove comments
//  - remove exportKind for export all declarations in flow (it is not yet supported by typescript, and so replaced with regular export all)
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

  let srcFixed = babel.transformSync(source, {
    babelrc: false,
    configFile: false,
    filename,
    plugins: [removeExportAllTypePlugin],
    presets: [
      [require.resolve('@babel/preset-flow'), { allowDeclareFields: true }],
    ],
    parserOpts: {
      plugins: ['flow', ...jsxPlugin, ...sharedParserPlugins],
    },
  });
  if (srcFixed === null) {
    throw new Error(
      'result of babel transform is null, likely configuration error'
    );
  }

  srcFixed = babel.transformSync(srcFixed.code!, {
    babelrc: false,
    configFile: false,
    filename,
    comments: false,
    plugins: [[removeImportExtensionPlugin, { isConvertedFile }]],
    parserOpts: {
      plugins: [...jsxPlugin, ...sharedParserPlugins],
    },
  });
  if (srcFixed === null) {
    throw new Error(
      'result of babel transform is null, likely configuration error'
    );
  }

  let resultNoTypes = babel.transformSync(result, {
    babelrc: false,
    configFile: false,
    filename: target,
    presets: [
      [
        require.resolve('@babel/preset-typescript'),
        { onlyRemoveTypeImports: true, allowDeclareFields: true },
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
    configFile: false,
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

  const src = prettier.format(srcFixed.code!, { parser: 'babel' });
  const tgt = prettier.format(resultNoTypes.code!, { parser: 'babel' });

  return { isEqual: src === tgt, src, tgt };
}
