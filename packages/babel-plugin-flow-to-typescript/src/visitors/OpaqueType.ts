import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertOpaqueType } from '../converters/convertOpaqueType';
import { replaceWith } from '../utils/replaceWith';

export function OpaqueType(path: NodePath<t.OpaqueType>) {
  replaceWith(path, convertOpaqueType(path.node));
}
