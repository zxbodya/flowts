import { NodePath, PluginObj, Visitor } from '@babel/core';

const visitor: Visitor = {
  EnumDeclaration(path: NodePath<any>) {
    path.remove();
  },
  TSEnumDeclaration(path: NodePath<any>) {
    path.remove();
  },
};

export default () =>
  ({
    name: 'remove-enums',
    visitor,
  } as PluginObj);
