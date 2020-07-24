import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { transformClassDeclaration } from '../transforms/transformClassDeclaration';

export function ClassDeclaration(path: NodePath<t.ClassDeclaration>) {
  transformClassDeclaration(path);
}
