import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTypeAlias } from '../converters/convert_type_alias';
import { replaceWith } from '../utils/replaceWith';

export function TypeAlias(path: NodePath<t.TypeAlias>) {
  replaceWith(path, convertTypeAlias(path.node));
}
