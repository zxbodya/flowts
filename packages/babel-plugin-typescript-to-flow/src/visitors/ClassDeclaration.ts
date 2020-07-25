import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { transformClassDeclaration } from '../transforms/transformClassDeclaration';
import { PluginPass } from '../types';

export function ClassDeclaration(
  path: NodePath<t.ClassDeclaration>,
  state: PluginPass
) {
  const isAmbientContext = state.opts.isAmbientContext;
  transformClassDeclaration(path, isAmbientContext);
}
