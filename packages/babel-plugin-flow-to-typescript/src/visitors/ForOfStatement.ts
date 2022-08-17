import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

export function ForOfStatement(path: NodePath<t.ForOfStatement>) {
  if (t.isVariableDeclaration(path.node.left)) {
    for (const decl of path.node.left.declarations) {
      if (t.isIdentifier(decl.id) && decl.id.typeAnnotation) {
        decl.id.typeAnnotation = t.noop();
        console.warn('Ignoring types inside left in ForOfStatement');
      }
    }
  }
}
