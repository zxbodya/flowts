import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTSTypeParameterDeclaration } from '../converters/convertTSTypeParameterDeclaration';
import { replaceWith } from '../utils/replaceWith';

export function TSTypeParameterDeclaration(
  path: NodePath<t.TSTypeParameterDeclaration>
) {
  replaceWith(path, convertTSTypeParameterDeclaration(path.node));
}
