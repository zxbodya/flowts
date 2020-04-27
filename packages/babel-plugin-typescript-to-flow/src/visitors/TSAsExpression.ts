import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTSAsExpression } from '../converters/convertTSAsExpression';
import { replaceWith } from '../utils/replaceWith';

export function TSAsExpression(path: NodePath<t.TSAsExpression>) {
  replaceWith(path, convertTSAsExpression(path.node));
}
