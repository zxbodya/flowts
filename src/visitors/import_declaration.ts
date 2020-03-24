import { ImportDeclaration } from '@babel/types';
import { NodePath } from '@babel/traverse';

export function ImportDeclaration(path: NodePath<ImportDeclaration>) {
  // "import type" in TypeScript does not allow mixing different imports (default, namespace and named)
  if (path.node.importKind === 'type') {
    const importSpecifiers = [];
    const importDefaultSpecifiers = [];
    const importNamespaceSpecifiers = [];
    for (const specifier of path.node.specifiers) {
      if (specifier.type === 'ImportSpecifier') importSpecifiers.push(specifier);
      if (specifier.type === 'ImportDefaultSpecifier') importDefaultSpecifiers.push(specifier);
      if (specifier.type === 'ImportNamespaceSpecifier') importNamespaceSpecifiers.push(specifier);
    }
    const groups = [importNamespaceSpecifiers, importDefaultSpecifiers, importSpecifiers].filter(
      v => v.length > 0,
    );
    if (groups.length > 1) {
      path.node.specifiers = groups[0];
      path.insertAfter(groups.slice(1).map(group => ({ ...path.node, specifiers: group })));
    }
  } else {
    // import with possibly mixed named specifiers (types and values)
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
  // todo: import typeof
}
