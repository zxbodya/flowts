import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { PluginPass } from '../types';

export function ForOfStatement(
  path: NodePath<t.ForOfStatement>,
  state: PluginPass
) {
  if (t.isVariableDeclaration(path.node.left)) {
    for (let i = 0, l = path.node.left.declarations.length; i < l; i += 1) {
      const decl = path.node.left.declarations[i];
      if (t.isIdentifier(decl.id) && decl.id.typeAnnotation) {
        decl.id.typeAnnotation = t.noop();
        state
          .get('logger')
          .warn(decl, 'Ignoring types inside left in ForOfStatement');
      }
    }
  }
}
