import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

export function ExportAllDeclaration(path: NodePath<t.ExportAllDeclaration>) {
  // @ts-expect-error todo: types in babel
  path.node.exportKind = null;
}
