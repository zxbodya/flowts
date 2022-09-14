import { NodePath, PluginObj, Visitor } from '@babel/core';

const visitor: Visitor = {
  ExportAllDeclaration(path: NodePath<any>) {
    if (path.node.exportKind === 'type') {
      path.node.exportKind = 'value';
    }
  },
};

export default () =>
  ({
    name: 'remove-export-all-declaration-plugin',
    visitor,
    manipulateOptions(opts: any, parserOpts: any) {
      parserOpts.plugins.push(['flow', { enums: true }]);
      parserOpts.plugins.push('exportDefaultFrom');
    },
  } as PluginObj);
