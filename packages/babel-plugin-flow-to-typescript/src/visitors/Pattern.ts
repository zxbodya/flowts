import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { cleanupPattern } from '../transforms/cleanupPattern';
import { PluginPass } from '../types';

export function Pattern(path: NodePath<t.Pattern>, state: PluginPass) {
  const removed = cleanupPattern(path.node);
  if (removed) {
    for (const r of removed) {
      state.get('logger').warn(r, 'Ignoring types inside a pattern');
    }
  }
}
