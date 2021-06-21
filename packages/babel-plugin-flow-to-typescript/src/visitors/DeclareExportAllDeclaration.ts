import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';

import { convertFlowType } from '../converters/convertFlowType';
import { convertDeclareVariable } from '../converters/convertDeclareVariable';
import { convertDeclareFunction } from '../converters/convertDeclareFunction';
import { convertDeclareTypeAlias } from '../converters/convertDeclareTypeAlias';
import { convertDeclareClass } from '../converters/convertDeclareClass';
import { replaceWith } from '../utils/replaceWith';
import { convertInterfaceDeclaration } from '../converters/convertInterfaceDeclaration';

export function DeclareExportAllDeclaration(
  path: NodePath<t.DeclareExportAllDeclaration>
) {
  const node = path.node;
  const replacement = t.exportAllDeclaration(node.source);
  replacement.exportKind = node.exportKind;
  path.replaceWith(replacement);
}
