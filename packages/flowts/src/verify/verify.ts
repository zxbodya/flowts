import * as babel from '@babel/core';
import * as prettier from 'prettier';
import { sharedParserPlugins } from '../sharedParserPlugins';
import removeImportExtensionPlugin from '../removeImportExtensionPlugin';
import removeExportAllTypePlugin from './removeExportAllTypePlugin';
import removeEmptyExportPlugin from './removeEmptyExportPlugin';

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
    compact: false,
    babelrc: false,
    configFile: false,
    filename,
    plugins: [removeExportAllTypePlugin],
    presets: [
      [require.resolve('@babel/preset-flow'), { allowDeclareFields: true }],
    ],
    generatorOpts: {
      decoratorsBeforeExport: true,
    },
    parserOpts: {
      allowReturnOutsideFunction: true,
      plugins: ['flow', ...jsxPlugin, ...sharedParserPlugins],
    },
  });
  if (srcFixed === null) {
    throw new Error(
      'result of babel transform is null, likely configuration error'
    );
  }

  srcFixed = babel.transformSync(srcFixed.code!, {
    compact: false,
    babelrc: false,
    configFile: false,
    filename,
    comments: false,
    generatorOpts: {
      decoratorsBeforeExport: true,
    },
    plugins: [
      [removeImportExtensionPlugin, { isConvertedFile }],
      removeEmptyExportPlugin,
    ],
    parserOpts: {
      allowReturnOutsideFunction: true,
      plugins: [...jsxPlugin, ...sharedParserPlugins],
    },
  });
  if (srcFixed === null) {
    throw new Error(
      'result of babel transform is null, likely configuration error'
    );
  }

  let resultNoTypes = babel.transformSync(result, {
    compact: false,
    babelrc: false,
    configFile: false,
    filename: target,
    generatorOpts: {
      decoratorsBeforeExport: true,
    },
    presets: [
      [
        require.resolve('@babel/preset-typescript'),
        { onlyRemoveTypeImports: true, allowDeclareFields: true },
      ],
    ],
    parserOpts: {
      allowReturnOutsideFunction: true,
      plugins: ['typescript', ...jsxPlugin, ...sharedParserPlugins],
    },
  });
  if (resultNoTypes === null) {
    throw new Error(
      'result of babel transform is null, likely configuration error'
    );
  }

  resultNoTypes = babel.transformSync(resultNoTypes.code!, {
    compact: false,
    babelrc: false,
    configFile: false,
    filename: target,
    comments: false,
    plugins: [removeEmptyExportPlugin],
    generatorOpts: {
      decoratorsBeforeExport: true,
    },
    parserOpts: {
      allowReturnOutsideFunction: true,
      plugins: [...jsxPlugin, ...sharedParserPlugins],
    },
  });
  if (resultNoTypes === null) {
    throw new Error(
      'result of babel transform is null, likely configuration error'
    );
  }

  const src = prettier.format(srcFixed.code!, {
    parser: 'babel',
    // avoid changing template strings
    embeddedLanguageFormatting: 'off',
  });
  const tgt = prettier.format(resultNoTypes.code!, {
    parser: 'babel',
    // avoid changing template strings
    embeddedLanguageFormatting: 'off',
  });

  return { isEqual: src === tgt, src, tgt };
}
