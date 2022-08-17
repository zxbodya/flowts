import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { cleanupPattern } from '../transforms/cleanupPattern';

export function Pattern(path: NodePath<t.Pattern>) {
  if (cleanupPattern(path.node)) {
    console.warn('Ignoring types inside a pattern');
  }
}
