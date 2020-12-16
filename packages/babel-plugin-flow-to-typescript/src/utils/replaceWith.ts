import { NodePath, Node } from '@babel/traverse';

export function replaceWith(
  path: NodePath<any>,
  replacement: Node | NodePath<any>
) {
  if (replacement instanceof NodePath) {
    replacement = replacement.node;
  }
  path.replaceWith({
    ...replacement,
    comments: path.node ? path.node.comments : undefined,
  } as Node);
}
