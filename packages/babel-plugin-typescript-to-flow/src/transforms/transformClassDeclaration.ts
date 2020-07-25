import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTSTypeParameterInstantiation } from '../converters/convertTSTypeParameterInstantiation';
import { convertTSEntityName } from '../converters/convertTSEntityName';
import { convertTSTypeParameterDeclaration } from '../converters/convertTSTypeParameterDeclaration';
import { transformClassBody } from '../transforms/transformClassBody';
import { replaceWith } from '../utils/replaceWith';
import { convertClassTypeDeclaration } from '../converters/convertClassTypeDeclaration';

const converted = new WeakSet<any>();

export function transformClassDeclaration(
  path: NodePath<t.ClassDeclaration>,
  isAmbientContext?: boolean
) {
  const node = path.node;
  if (converted.has(node)) {
    return;
  }
  converted.add(node);
  if (node.declare || isAmbientContext) {
    replaceWith(path, convertClassTypeDeclaration(node));
    return;
  }
  if (t.isTSTypeParameterInstantiation(node.superTypeParameters)) {
    const superTypeParameters = path.get('superTypeParameters') as NodePath;
    superTypeParameters.replaceWith(
      convertTSTypeParameterInstantiation(node.superTypeParameters)
    );
  }
  if (node.implements) {
    const impls = path.get('implements') as NodePath<
      t.TSExpressionWithTypeArguments
    >[];
    for (const impl of impls) {
      const id = convertTSEntityName(impl.node.expression);
      const typeParameters = impl.node.typeParameters
        ? convertTSTypeParameterInstantiation(impl.node.typeParameters)
        : null;

      if (!t.isIdentifier(id)) {
        throw new Error(
          'todo: welcome to flow - support qualified identifiers in implements are not supported'
        );
      }
      impl.replaceWith(t.classImplements(id, typeParameters));
    }
  }
  if (
    node.typeParameters &&
    t.isTSTypeParameterDeclaration(node.typeParameters)
  ) {
    (path.get('typeParameters') as NodePath).replaceWith(
      convertTSTypeParameterDeclaration(node.typeParameters)
    );
  }

  // todo @babel/types
  transformClassBody(path.get('body') as NodePath<t.ClassBody>);
}
