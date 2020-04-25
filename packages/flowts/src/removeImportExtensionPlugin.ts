import { NodePath, PluginObj, Visitor } from '@babel/core';
import {
  ImportDeclaration,
  ExportNamedDeclaration,
  ExportAllDeclaration,
  StringLiteral,
} from '@babel/types';

export default (
  _babel: any,
  opts: { isConvertedFile?: (source: string) => boolean }
) => {
  const hasJsExtension = (source: string) => /.*\.js$/.test(source);
  const isConvertedFile = opts.isConvertedFile || ((source: string) => true);

  function visit(sourceLiteral: StringLiteral) {
    const source = sourceLiteral.value;

    if (hasJsExtension(source) && isConvertedFile(source)) {
      sourceLiteral.value = source.replace(/\.js$/, '');
    }
  }

  const visitor: Visitor = {
    ImportDeclaration(path: NodePath<ImportDeclaration>) {
      visit(path.node.source);
    },
    ExportNamedDeclaration(path: NodePath<ExportNamedDeclaration>) {
      if (path.node.source) {
        visit(path.node.source);
      }
    },
    ExportAllDeclaration(path: NodePath<ExportAllDeclaration>) {
      visit(path.node.source);
    },
  };

  return {
    name: 'remove-import-extension',
    visitor,
  } as PluginObj;
};
