import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { transformFunctionParams } from '../transforms/transformFunctionParams';

export function FunctionDeclaration(path: NodePath<t.FunctionDeclaration>) {
  transformFunctionParams(path.get('params'));
  path.get('predicate').remove();
}
