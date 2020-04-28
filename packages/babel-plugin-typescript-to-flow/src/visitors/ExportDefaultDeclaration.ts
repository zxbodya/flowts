import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { replaceWith } from '../utils/replaceWith';
import { convertFunctionTypeAnnotation } from '../converters/convertFunctionTypeAnnotation';

export function ExportDefaultDeclaration(
  path: NodePath<t.ExportDefaultDeclaration>
) {
  const srcDeclaration = path.node.declaration;
  if (t.isTSDeclareFunction(srcDeclaration)) {
    const {
      typeParams,
      parameters,
      rest,
      returnType,
    } = convertFunctionTypeAnnotation(srcDeclaration);

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
    replacement.default = true;
    replaceWith(path, replacement);
  }
}
