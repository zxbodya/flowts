import * as babel from '@babel/core';
import traverse from '@babel/traverse';
import { sharedParserPlugins } from './sharedParserPlugins';

export interface SourceOptions {
  isJSX: boolean;
  isFlow: boolean;
}

export function detectOptions(source: string, filename: string): SourceOptions {
  const flowAst = babel.parseSync(source, {
    babelrc: false,
    ast: true,
    parserOpts: {
      plugins: ['flow', 'jsx', ...sharedParserPlugins],
    },
    filename,
  });

  let isJSX = /\.(jsx|tsx)$/i.test(filename);
  let isFlow = /@flow/.test(source) || /\.js\.flow$/i.test(filename);

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
  return { isJSX, isFlow };
}
