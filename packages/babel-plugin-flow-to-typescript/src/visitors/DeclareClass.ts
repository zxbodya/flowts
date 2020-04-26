import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertDeclareClass } from '../converters/convertDeclareClass';
import { replaceWith } from '../utils/replaceWith';
import { PluginPass } from '../types';

export function DeclareClass(
  path: NodePath<t.DeclareClass>,
  state: PluginPass
) {
  const decl = convertDeclareClass(path.node);
  decl.declare = !state.get('isModuleDeclaration');

  replaceWith(path, decl);
}
