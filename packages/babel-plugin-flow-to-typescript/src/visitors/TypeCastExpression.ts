import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTypeCastExpression } from '../converters/convertTypeCastExpression';
import { replaceWith } from '../utils/replaceWith';

export function TypeCastExpression(path: NodePath<t.TypeCastExpression>) {
  replaceWith(path, convertTypeCastExpression(path.node));
  if (
    path.parentPath.isExportDefaultDeclaration() ||
    path.parentPath.isCallExpression()
  ) {
    path.node.extra = path.node.extra || {};
    path.node.extra.parenthesized = true;
  }
}
