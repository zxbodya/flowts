import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTSTypeAnnotation } from '../converters/convertTSTypeAnnotation';
import { replaceWith } from '../utils/replaceWith';

export function TSTypeAnnotation(path: NodePath<t.TSTypeAnnotation>) {
  replaceWith(path, convertTSTypeAnnotation(path.node));
}
