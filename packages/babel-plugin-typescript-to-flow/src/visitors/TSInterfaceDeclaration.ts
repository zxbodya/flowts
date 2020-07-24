import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

import { convertTSInterfaceDeclaration } from '../converters/convertTSInterfaceDeclaration';
import { replaceWith } from '../utils/replaceWith';

export function TSInterfaceDeclaration(
  path: NodePath<t.TSInterfaceDeclaration>
) {
  replaceWith(path, convertTSInterfaceDeclaration(path.node));
}
