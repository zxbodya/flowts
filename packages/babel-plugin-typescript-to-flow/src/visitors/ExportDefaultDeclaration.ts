import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { replaceWith } from '../utils/replaceWith';
import { convertFunctionTypeAnnotation } from '../converters/convertFunctionTypeAnnotation';
import { convertClassTypeDeclaration } from '../converters/convertClassTypeDeclaration';
import { PluginPass } from '../types';

export function ExportDefaultDeclaration(
  path: NodePath<t.ExportDefaultDeclaration>,
  state: PluginPass
) {
  if (!state.opts.isAmbientContext) return;
  const srcDeclaration = path.node.declaration;
  if (t.isTSDeclareFunction(srcDeclaration)) {
    const { typeParams, parameters, rest, returnType } =
      convertFunctionTypeAnnotation(srcDeclaration);

    // @ts-expect-error bug in @babel/types
    const id = t.identifier(srcDeclaration?.id?.name || 'fn');
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
  } else if (t.isClassDeclaration(srcDeclaration)) {
    const replacement = t.declareExportDeclaration(
      convertClassTypeDeclaration(srcDeclaration)
    );
    replaceWith(path, replacement);
  }
}
