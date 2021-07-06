import { PluginObj, Visitor } from '@babel/core';

const visitor: Visitor = {
  ExportNamedDeclaration(path) {
    if (path.node.specifiers.length === 0 && !path.node.declaration) {
      path.remove();
    }
  },
};

export default () =>
  ({
    name: 'remove-empty-export-plugin',
    visitor,
    manipulateOptions(opts: any, parserOpts: any) {
      parserOpts.plugins.push('exportDefaultFrom');
    },
  } as PluginObj);
