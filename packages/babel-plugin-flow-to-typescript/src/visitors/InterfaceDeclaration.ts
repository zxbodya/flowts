import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

import { convertInterfaceDeclaration } from '../converters/convertInterfaceDeclaration';
import { replaceWith } from '../utils/replaceWith';

export function InterfaceDeclaration(path: NodePath<t.InterfaceDeclaration>) {
  replaceWith(path, convertInterfaceDeclaration(path.node));
}
