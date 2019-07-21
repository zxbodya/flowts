import * as babel from '@babel/core';
import traverse from '@babel/traverse';
import { sharedParserPlugins } from './sharedParserPlugins';

export function detectOptions(source: string, filename: string) {
  const flowAst = babel.parseSync(source, {
    babelrc: false,
    ast: true,
    parserOpts: {
      plugins: ['flow', 'jsx', ...sharedParserPlugins],
    },
    filename,
  });

  let isJSX = false;
  let isFlow = /@flow/.test(source);

  if (flowAst === null) {
    throw new Error(
      'babel.parseSync returned null - probably there is some configuration error'
    );
  }
  traverse(flowAst, {
    JSX() {
      isJSX = true;
    },
    Flow() {
      isFlow = true;
    },
  });
  return { isJSX, isFlow, isError: false };
}
