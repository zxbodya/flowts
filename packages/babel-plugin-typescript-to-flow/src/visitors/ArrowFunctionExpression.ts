import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTSTypeParameterDeclaration } from '../converters/convertTSTypeParameterDeclaration';
import { replaceWith } from '../utils/replaceWith';

export function ArrowFunctionExpression(
  path: NodePath<t.ArrowFunctionExpression>
) {
  if (t.isTSTypeParameterDeclaration(path.node.typeParameters)) {
    const tsTypeParameterDeclaration = convertTSTypeParameterDeclaration(
      path.node.typeParameters
    );
    replaceWith(path.get('typeParameters'), tsTypeParameterDeclaration);
  }
}
