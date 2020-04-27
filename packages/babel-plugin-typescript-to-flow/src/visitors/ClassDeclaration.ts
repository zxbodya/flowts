import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTSTypeParameterInstantiation } from '../converters/convertTSTypeParameterInstantiation';
import { convertTSEntityName } from '../converters/convertTSEntityName';
import { convertTSTypeParameterDeclaration } from '../converters/convertTSTypeParameterDeclaration';
import { transformClassBody } from '../transforms/transformClassBody';

export function ClassDeclaration(path: NodePath<t.ClassDeclaration>) {
  if (t.isTSTypeParameterInstantiation(path.node.superTypeParameters)) {
    const superTypeParameters = path.get('superTypeParameters') as NodePath;
    superTypeParameters.replaceWith(
      convertTSTypeParameterInstantiation(path.node.superTypeParameters)
    );
  }
  if (path.node.implements) {
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
    path.node.typeParameters &&
    t.isTSTypeParameterDeclaration(path.node.typeParameters)
  ) {
    (path.get('typeParameters') as NodePath).replaceWith(
      convertTSTypeParameterDeclaration(path.node.typeParameters)
    );
  }

  // todo @babel/types
  transformClassBody(path.get('body') as NodePath<t.ClassBody>);
}
