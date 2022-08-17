import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

import { convertInterfaceExtends } from '../converters/convertInterfaceExtends';
import { convertTypeParameterInstantiation } from '../converters/convertTypeParameterInstantiation';
import { convertTypeParameterDeclaration } from '../converters/convertTypeParameterDeclaration';
import { replaceWith } from '../utils/replaceWith';
import { transformClassBody } from '../transforms/transformClassBody';

export function ClassDeclaration(
  path: NodePath<t.ClassDeclaration | t.ClassExpression>
) {
  const node = path.node;

  const superTypeParameters = node.superTypeParameters;
  if (t.isTypeParameterInstantiation(superTypeParameters)) {
    if (superTypeParameters.params.length) {
      replaceWith(
        path.get('superTypeParameters') as NodePath,
        convertTypeParameterInstantiation(superTypeParameters)
      );
    } else {
      // empty node.superTypeParameters is not valid in typescript and so has to be removed
      node.superTypeParameters = null;
    }
  }

  const typeParameters = node.typeParameters;
  if (t.isTypeParameterDeclaration(typeParameters)) {
    replaceWith(
      path.get('typeParameters') as NodePath,
      convertTypeParameterDeclaration(typeParameters)
    );
  }

  const classImplements = node.implements;
  if (Array.isArray(classImplements)) {
    const classImplements = path.get(
      'implements'
    ) as NodePath<t.ClassImplements>[];
    if (classImplements !== null) {
      for (const classImplement of classImplements) {
        if (classImplement.isClassImplements()) {
          replaceWith(
            classImplement,
            convertInterfaceExtends(classImplement.node)
          );
        }
      }
    }
  }

  transformClassBody(path.get('body') as NodePath<t.ClassBody>);
}
