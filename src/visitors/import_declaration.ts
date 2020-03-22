import { ImportDeclaration } from '@babel/types';
import { NodePath } from '@babel/traverse';

export function ImportDeclaration(path: NodePath<ImportDeclaration>) {
  const keep = [];
  const move = [];
  for (const specifier of path.node.specifiers) {
    if (specifier.type === 'ImportSpecifier' && specifier.importKind === 'type') {
      move.push(specifier);
    } else {
      keep.push(specifier);
    }
    if (specifier.type === 'ImportSpecifier') {
      delete specifier.importKind;
      // todo: import typeof
    }
  }
  if (move.length > 0 && keep.length === 0) {
    // import {type A, type B} from 'mod';
    path.node.importKind = 'type';
  } else if (move.length > 0 && keep.length > 0) {
    // import {A, type B} from 'mod';
    // import C, {A, type B} from 'mod';
    path.node.specifiers = keep;
    path.insertAfter({ ...path.node, importKind: 'type', specifiers: move });
  }
}
