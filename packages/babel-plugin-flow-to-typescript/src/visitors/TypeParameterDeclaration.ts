import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTypeParameterDeclaration } from '../converters/convertTypeParameterDeclaration';
import { replaceWith } from '../utils/replaceWith';

export function TypeParameterDeclaration(
  path: NodePath<t.TypeParameterDeclaration>
) {
  replaceWith(path, convertTypeParameterDeclaration(path.node));
}
