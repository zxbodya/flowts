import { NodePath, PluginObj, Visitor } from '@babel/core';
import {
  ImportDeclaration,
  ExportDeclaration,
  ExportDefaultDeclaration,
  ExportAllDeclaration,
} from '@babel/types';

const visitor: Visitor = {
  ImportDeclaration(path: NodePath<ImportDeclaration>) {
    path.remove();
  },
  ExportDeclaration(path: NodePath<ExportDeclaration>) {
    path.remove();
  },
  ExportDefaultDeclaration(path: NodePath<ExportDefaultDeclaration>) {
    path.remove();
  },
  ExportAllDeclaration(path: NodePath<ExportAllDeclaration>) {
    path.remove();
  },
};

export default () =>
  ({
    name: 'remove-imports-exports-plugin',
    visitor,
  } as PluginObj);
