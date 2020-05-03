import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

import { replaceWith } from '../utils/replaceWith';
import { PluginPass } from '../types';
import { convertTSDeclareFunction } from '../converters/convertTSDeclareFunction';

export function TSDeclareFunction(
  path: NodePath<t.TSDeclareFunction>,
  state: PluginPass
) {
  if (path.node.declare) {
    const replacement = convertTSDeclareFunction(path.node);
    replaceWith(path, replacement);
  } else {
    throw new Error('todo:');
  }
}
