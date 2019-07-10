import { DeclareInterface } from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertInterfaceDeclaration } from '../converters/convert_interface_declaration';
import { recastProps } from '../utils/recastProps';

export function DeclareInterface(path: NodePath<DeclareInterface>) {
  const node = path.node;
  const replacement = convertInterfaceDeclaration(node);
  replacement.declare = true;
  path.replaceWith({ ...recastProps(node), ...replacement });
}
