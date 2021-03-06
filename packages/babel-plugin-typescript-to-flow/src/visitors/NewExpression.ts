import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTSTypeParameterInstantiation } from '../converters/convertTSTypeParameterInstantiation';
import { replaceWith } from '../utils/replaceWith';

export function NewExpression(path: NodePath<t.NewExpression>) {
  if (path.node.typeParameters) {
    const typeParameters = convertTSTypeParameterInstantiation(
      path.node.typeParameters
    );
    path.node.typeParameters = null;
    replaceWith(path.get('typeArguments'), typeParameters);
  }
}
