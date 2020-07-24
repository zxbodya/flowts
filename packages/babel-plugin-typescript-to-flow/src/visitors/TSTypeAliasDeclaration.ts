import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTSTypeAliasDeclaration } from '../converters/convertTSTypeAliasDeclaration';
import { replaceWith } from '../utils/replaceWith';

export function TSTypeAliasDeclaration(
  path: NodePath<t.TSTypeAliasDeclaration>
) {
  const replacement = convertTSTypeAliasDeclaration(path.node);
  replaceWith(path, replacement);
}
