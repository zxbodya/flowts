import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

export function VariableDeclaration(path: NodePath<t.VariableDeclaration>) {
  if (path.node.declare) {
    const declarations = [];
    for (const node of path.node.declarations) {
      if (!t.isIdentifier(node.id)) {
        throw new Error('not implemented');
      }
      declarations.push(t.declareVariable(node.id));
    }
    path.replaceWithMultiple(declarations);
  }
}
