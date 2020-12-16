import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

export function ExportAllDeclaration(path: NodePath<t.ExportAllDeclaration>) {
  path.node.exportKind = null;
}
