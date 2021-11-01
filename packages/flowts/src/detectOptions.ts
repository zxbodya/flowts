import * as babel from '@babel/core';
import traverse from '@babel/traverse';
import { sharedParserPlugins } from './sharedParserPlugins';

export interface SourceOptions {
  isJSX: boolean;
  isFlow: boolean;
}

export function detectOptions(source: string, filename: string): SourceOptions {
  const flowAst = babel.parseSync(source, {
    compact: false,
    babelrc: false,
    configFile: false,
    ast: true,
    parserOpts: {
      allowReturnOutsideFunction: true,
      plugins: ['flow', 'jsx', ...sharedParserPlugins],
    },
    filename,
  });

  let isJSX = /\.jsx$/i.test(filename);
  let isFlow = /@flow/.test(source) || /\.js\.flow|\.flow\.js$/i.test(filename);

  if (flowAst === null) {
    throw new Error(
      'babel.parseSync returned null - probably there is some configuration error'
    );
  }

  // workaround to have "scope.hub"
  // @ts-ignore
  new babel.File({ filename }, { code: source, ast: flowAst });

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
