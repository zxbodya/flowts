import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTSTypeParameterInstantiation } from '../converters/convertTSTypeParameterInstantiation';
import { convertTSEntityName } from '../converters/convertTSEntityName';
import { convertTSTypeParameterDeclaration } from '../converters/convertTSTypeParameterDeclaration';
import { transformClassBody } from '../transforms/transformClassBody';
import { replaceWith } from '../utils/replaceWith';
import { convertTSType } from '../converters/convertTSType';
import { TSTypeAnnotation } from '@babel/types';
import { convertFunctionTypeAnnotation } from '../converters/convertFunctionTypeAnnotation';

function convertMemberExpressionToQualifiedTypeIdentifier(
  id: t.Identifier | t.MemberExpression
): t.Identifier | t.QualifiedTypeIdentifier {
  if (t.isIdentifier(id)) return id;
  if (!t.isIdentifier(id.object) && !t.isMemberExpression(id.object)) {
    throw new Error('not implemented');
  }
  return t.qualifiedTypeIdentifier(
    id.property,
    convertMemberExpressionToQualifiedTypeIdentifier(id.object)
  );
}
export function transformClassDeclaration(
  path: NodePath<t.ClassDeclaration>,
  isAmbientContext?: boolean
) {
  const node = path.node;
  if (node.declare || isAmbientContext) {
    const id = node.id;
    const typeParameters = node.typeParameters
      ? convertTSTypeParameterDeclaration(node.typeParameters)
      : null;
    const _extends = node.superClass
      ? [
          t.interfaceExtends(
            convertMemberExpressionToQualifiedTypeIdentifier(node.superClass),
            node.superTypeParameters
              ? convertTSTypeParameterInstantiation(node.superTypeParameters)
              : null
          ),
        ]
      : [];
    const properties: Array<
      t.ObjectTypeProperty | t.ObjectTypeSpreadProperty
    > = [];
    const indexers: Array<t.ObjectTypeIndexer> = [];
    const callProperties: Array<t.ObjectTypeCallProperty> = [];
    const internalSlots: Array<t.ObjectTypeInternalSlot> = [];

    for (const member of node.body.body) {
      if (t.isClassProperty(member)) {
        const key =
          t.isIdentifier(member.key) || t.isStringLiteral(member.key)
            ? member.key
            : t.isNumericLiteral(member.key)
            ? t.stringLiteral(member.key.value + '')
            : null;

        const prop = t.objectTypeProperty(
          // @ts-ignore
          key,
          convertTSType(
            (member.typeAnnotation as TSTypeAnnotation).typeAnnotation
          )
        );
        prop.static = member.static;
        prop.optional = !!member.optional;
        if (member.readonly) {
          prop.variance = t.variance('plus');
        }

        properties.push(prop);
      } else if (t.isTSDeclareMethod(member)) {
        const key =
          t.isIdentifier(member.key) || t.isStringLiteral(member.key)
            ? member.key
            : t.isNumericLiteral(member.key)
            ? t.stringLiteral(member.key.value + '')
            : null;

        const {
          typeParams,
          parameters,
          rest,
          returnType,
        } = convertFunctionTypeAnnotation(member);
        const prop = t.objectTypeProperty(
          // @ts-ignore
          key,
          t.functionTypeAnnotation(
            typeParams,
            parameters,
            rest,
            returnType ? returnType : t.anyTypeAnnotation()
          )
        );
        prop.static = member.static;
        prop.kind =
          member.kind === 'get' || member.kind === 'set' ? member.kind : 'init';
        // @ts-ignore
        prop.method = true;
        properties.push(prop);
      } else {
        throw new Error('todo:');
      }
    }
    // todo:
    const body = t.objectTypeAnnotation(
      properties,
      indexers,
      callProperties,
      internalSlots
    );
    const replacement = t.declareClass(id, typeParameters, _extends, body);
    if (node.implements) {
      replacement.implements = node.implements.map(
        (impl: t.TSExpressionWithTypeArguments) => {
          const id = convertTSEntityName(impl.expression);
          const typeParameters = impl.typeParameters
            ? convertTSTypeParameterInstantiation(impl.typeParameters)
            : null;
          return t.interfaceExtends(id, typeParameters);
        }
      );
    }
    replaceWith(path, replacement);
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
