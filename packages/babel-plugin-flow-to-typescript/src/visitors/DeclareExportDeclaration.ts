import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';

import { convertFlowType } from '../converters/convertFlowType';
import { convertDeclareVariable } from '../converters/convertDeclareVariable';
import { convertDeclareFunction } from '../converters/convertDeclareFunction';
import { convertDeclareTypeAlias } from '../converters/convertDeclareTypeAlias';
import { convertDeclareClass } from '../converters/convertDeclareClass';
import { replaceWith } from '../utils/replaceWith';
import { convertInterfaceDeclaration } from '../converters/convertInterfaceDeclaration';
import { PluginPass } from '../types';

export function DeclareExportDeclaration(
  path: NodePath<t.DeclareExportDeclaration>,
  state: PluginPass
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
      declaration.declare = !state.get('isModuleDeclaration');
    } else if (t.isDeclareFunction(node.declaration)) {
      declaration = convertDeclareFunction(node.declaration);
      declaration.declare = !state.get('isModuleDeclaration');
    } else if (t.isTypeAlias(node.declaration)) {
      declaration = convertDeclareTypeAlias(node.declaration);
      declaration.declare = !state.get('isModuleDeclaration');
    } else if (t.isDeclareClass(node.declaration)) {
      declaration = convertDeclareClass(node.declaration);
      declaration.declare = !state.get('isModuleDeclaration');
    } else if (t.isInterfaceDeclaration(node.declaration)) {
      declaration = convertInterfaceDeclaration(node.declaration);
      declaration.declare = !state.get('isModuleDeclaration');
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
