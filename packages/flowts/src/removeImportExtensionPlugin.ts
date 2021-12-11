import { NodePath, PluginObj, Visitor } from '@babel/core';
import * as t from '@babel/types';

export default (
  _babel: any,
  opts: { isConvertedFile?: (source: string) => boolean }
) => {
  const hasJsExtension = (source: string) => /.*\.js$/.test(source);
  const isConvertedFile = opts.isConvertedFile || ((source: string) => true);

  function visit(sourceLiteral: t.StringLiteral) {
    const source = sourceLiteral.value;

    if (hasJsExtension(source) && isConvertedFile(source)) {
      sourceLiteral.value = source.replace(/\.js$/, '');
    }
  }

  const visitor: Visitor = {
    CallExpression(path) {
      // import('something')
      if (
        t.isImport(path.node.callee) &&
        t.isStringLiteral(path.node.arguments[0])
      ) {
        visit(path.node.arguments[0]);
      }
      // jest.mock('something', …)
      if (
        t.isMemberExpression(path.node.callee) &&
        t.isIdentifier(path.node.callee.object) &&
        path.node.callee.object.name === 'jest' &&
        t.isIdentifier(path.node.callee.property) &&
        path.node.callee.property.name === 'mock' &&
        t.isStringLiteral(path.node.arguments[0])
      ) {
        visit(path.node.arguments[0]);
      }
      // require('something')
      if (
        t.isIdentifier(path.node.callee) &&
        path.node.callee.name === 'require' &&
        t.isStringLiteral(path.node.arguments[0])
      ) {
        visit(path.node.arguments[0]);
      }
    },
    ImportDeclaration(path) {
      visit(path.node.source);
    },
    ExportNamedDeclaration(path) {
      if (path.node.source) {
        visit(path.node.source);
      }
    },
    ExportAllDeclaration(path) {
      visit(path.node.source);
    },
  };

  return {
    name: 'remove-import-extension',
    visitor,
  } as PluginObj;
};
