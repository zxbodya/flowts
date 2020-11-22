import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { PluginPass } from '../types';
import { transformFunctionParams } from '../transforms/transformFunctionParams';

export function ObjectMethod(
  path: NodePath<t.ObjectMethod>,
  state: PluginPass
) {
  transformFunctionParams(path.get('params'));
  if (path.node.kind === 'set' && path.node.returnType) {
    path.node.returnType = null;
  }
}
