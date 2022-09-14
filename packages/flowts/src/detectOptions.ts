import * as babel from '@babel/core';
import traverse from '@babel/traverse';
import { sharedParserPlugins } from './sharedParserPlugins';

export interface SourceOptions {
  isJSX: boolean;
  isDefinitionFile: boolean;

  hasFlowAnnotation: boolean;
  hasNoFlowAnnotation: boolean;
  hasTypes: boolean;
}

export function detectOptions(source: string, filename: string): SourceOptions {
  const flowAst = babel.parseSync(source, {
    compact: false,
    babelrc: false,
    configFile: false,
    ast: true,
    parserOpts: {
      allowReturnOutsideFunction: true,
      plugins: [['flow', { enums: true }], 'jsx', ...sharedParserPlugins],
    },
    filename,
  });

  let isJSX = /\.jsx$/i.test(filename);
  const isDefinitionFile = /\.js\.flow$/i.test(filename);
  const hasFlowAnnotation = /@flow/.test(source);
  const hasNoFlowAnnotation = /@noflow/.test(source);
  let hasTypes = false;

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
      hasTypes = true;
    },
  });
  return {
    isJSX,
    isDefinitionFile,
    hasFlowAnnotation,
    hasNoFlowAnnotation,
    hasTypes,
  };
}
