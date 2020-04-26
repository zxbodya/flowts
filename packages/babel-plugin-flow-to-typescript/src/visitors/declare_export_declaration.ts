import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';

import { convertFlowType } from '../converters/convert_flow_type';
import { convertDeclareVariable } from '../converters/convert_declare_variable';
import { convertDeclareFunction } from '../converters/convert_declare_function';
import { convertDeclareTypeAlias } from '../converters/convert_declare_type_alias';
import { convertDeclareClass } from '../converters/convert_declare_class';
import { replaceWith } from '../utils/replaceWith';
import { convertInterfaceDeclaration } from '../converters/convert_interface_declaration';

export function DeclareExportDeclaration(
  path: NodePath<t.DeclareExportDeclaration>
) {
  const node = path.node;

  let replacement;
  if (node.default) {
    if (!node.declaration) {
      throw path.buildCodeFrameError('todo: declaration is missing');
    }
    if (t.isDeclareFunction(node.declaration)) {
      replacement = t.exportDefaultDeclaration(
        convertDeclareFunction(node.declaration)
      );
      replaceWith(path, replacement);
    } else if (t.isDeclareClass(node.declaration)) {
      replacement = t.exportDefaultDeclaration(
        convertDeclareClass(node.declaration)
      );
      replaceWith(path, replacement);
    } else {
      if (!t.isFlowType(node.declaration)) {
        throw path.buildCodeFrameError('not implemented');
      }
      const declaration = convertFlowType(node.declaration);

      const aliasId = t.identifier('__default');

      path.replaceWithMultiple([
        t.variableDeclaration('let', [
          t.variableDeclarator({
            ...aliasId,
            typeAnnotation: t.tsTypeAnnotation(declaration),
          }),
        ]),
        t.exportDefaultDeclaration(aliasId),
      ]);
    }
  } else {
    let declaration = null;
    if (t.isDeclareVariable(node.declaration)) {
      declaration = convertDeclareVariable(node.declaration);
    } else if (t.isDeclareFunction(node.declaration)) {
      declaration = convertDeclareFunction(node.declaration);
    } else if (t.isTypeAlias(node.declaration)) {
      declaration = convertDeclareTypeAlias(node.declaration);
    } else if (t.isDeclareClass(node.declaration)) {
      declaration = convertDeclareClass(node.declaration);
    } else if (t.isInterfaceDeclaration(node.declaration)) {
      declaration = convertInterfaceDeclaration(node.declaration);
    } else {
      throw path.buildCodeFrameError(`DeclareExportDeclaration not converted`);
    }
    replacement = t.exportNamedDeclaration(
      declaration,
      node.specifiers ? node.specifiers : [],
      node.source
    );
    replaceWith(path, replacement);
  }
}
