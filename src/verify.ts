import * as babel from '@babel/core';
import * as prettier from 'prettier';
import { sharedParserPlugins } from './sharedParserPlugins';

// verification - remove types, remove comments, reformat and compare the text
// todo: make it ignore import/export differences caused by babel not removing type imports/exports for typescript

export function verify(
  source: string,
  result: string,
  isJSX: boolean,
  filename: string,
  target: string
) {
  const jsxPlugin = isJSX ? (['jsx'] as const) : [];

  const src = prettier.format(babel.transformSync(source, {
    filename,
    comments: false,
    compact: true,
    presets: ['@babel/preset-flow'],
    parserOpts: {
      plugins: ['flow', ...jsxPlugin, ...sharedParserPlugins],
    },
  })!.code as string);

  const tgt = prettier.format(babel.transformSync(result, {
    filename: target,
    comments: false,
    compact: true,
    presets: ['@babel/preset-typescript'],
    parserOpts: {
      plugins: ['typescript', ...jsxPlugin, ...sharedParserPlugins],
    },
  })!.code as string);

  return { isEqual: src !== tgt, src, tgt };
}
