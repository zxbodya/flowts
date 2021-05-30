import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertFunctionTypeAnnotation } from '../converters/convertFunctionTypeAnnotation';
import { replaceWith } from '../utils/replaceWith';
import { transformClassDeclaration } from '../transforms/transformClassDeclaration';
import { convertClassTypeDeclaration } from '../converters/convertClassTypeDeclaration';

export function ExportNamedDeclaration(
  path: NodePath<t.ExportNamedDeclaration>
) {
  const srcDeclaration = path.node.declaration;
  if (t.isVariableDeclaration(srcDeclaration) && srcDeclaration.declare) {
    if (srcDeclaration.declarations.length !== 1) {
      throw new Error('not implemented');
    }
    if (!t.isIdentifier(srcDeclaration.declarations[0].id)) {
      throw new Error('not implemented');
    }
    path.replaceWith(
      t.declareExportDeclaration(
        t.declareVariable(srcDeclaration.declarations[0].id)
      )
    );
  } else if (t.isTSDeclareFunction(srcDeclaration)) {
    // todo: copypaste from ExportDefaultDeclaration.ts
    const { typeParams, parameters, rest, returnType } =
      convertFunctionTypeAnnotation(srcDeclaration);

    const id = t.identifier(srcDeclaration.id!.name);
    id.typeAnnotation = t.typeAnnotation(
      t.functionTypeAnnotation(
        typeParams,
        parameters,
        rest,
        returnType ? returnType : t.anyTypeAnnotation()
      )
    );
    const declaration = t.declareFunction(id);

    const replacement = t.declareExportDeclaration(declaration);

    replaceWith(path, replacement);
    // todo: remove typecast to any
  } else if (t.isClassDeclaration(srcDeclaration)) {
    const replacement = t.declareExportDeclaration(
      convertClassTypeDeclaration(srcDeclaration)
    );
    replaceWith(path, replacement);
  } else if (srcDeclaration && (srcDeclaration as any).declare) {
    (srcDeclaration as any).declare = false;
  }
}
