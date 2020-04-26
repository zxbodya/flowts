import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTypeAnnotation } from '../converters/convertTypeAnnotation';
import { replaceWith } from '../utils/replaceWith';

export function TypeAnnotation(path: NodePath<t.TypeAnnotation>) {
  replaceWith(path, convertTypeAnnotation(path.node));
}
