import { PluginObj, Visitor } from '@babel/core';
import * as t from '@babel/types';

const visitor: Visitor = {
  ImportDeclaration(path) {
    if (
      path.node.importKind !== 'type' &&
      path.node.specifiers.every(
        s => t.isImportSpecifier(s) && s.importKind === 'type'
      )
    ) {
      path.node.importKind = 'type';
      for (const s of path.node.specifiers) {
        t.assertImportSpecifier(s);
        s.importKind = null;
      }
    }
  },
};

export default () =>
  ({
    name: 'transform-type-only-imports-plugin',
    visitor,
    manipulateOptions(opts: any, parserOpts: any) {
      parserOpts.plugins.push(['flow', { enums: true }]);
      parserOpts.plugins.push('exportDefaultFrom');
    },
  } as PluginObj);
