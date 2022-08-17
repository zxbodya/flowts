import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { transformFunctionParams } from '../transforms/transformFunctionParams';
import { PluginPass } from '../types';

export function FunctionDeclaration(
  path: NodePath<t.FunctionDeclaration>,
  state: PluginPass
) {
  transformFunctionParams(path.get('params'), undefined, state);
  path.get('predicate').remove();
}
