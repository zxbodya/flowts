import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTypeParameterInstantiation } from '../converters/convertTypeParameterInstantiation';
import { replaceWith } from '../utils/replaceWith';

export function CallExpression(
  path: NodePath<t.CallExpression | t.OptionalCallExpression>
) {
  if (path.node.typeArguments) {
    const typeParameters = convertTypeParameterInstantiation(
      path.node.typeArguments
    );
    path.node.typeArguments = null;
    if (typeParameters.params.length) {
      replaceWith(path.get('typeParameters'), typeParameters);
    }
  }
}
