import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTypeParameterDeclaration } from '../converters/convertTypeParameterDeclaration';
import { transformFunctionParams } from '../transforms/transformFunctionParams';
import { replaceWith } from '../utils/replaceWith';
import { PluginPass } from '../types';

export function ArrowFunctionExpression(
  path: NodePath<t.ArrowFunctionExpression>,
  state: PluginPass
) {
  transformFunctionParams(path.get('params'), undefined, state);
  if (path.node.predicate) {
    delete path.node.predicate;
  }
  if (t.isTypeParameterDeclaration(path.node.typeParameters)) {
    const tsTypeParameterDeclaration = convertTypeParameterDeclaration(
      path.node.typeParameters
    );
    replaceWith(path.get('typeParameters'), tsTypeParameterDeclaration);
  }
}
