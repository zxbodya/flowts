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
import { convertKey } from '../converters/convertKey';

const converted = new WeakSet<any>();

function convertMemberExpressionToQualifiedTypeIdentifier(
  id: t.Identifier | t.MemberExpression
): t.Identifier | t.QualifiedTypeIdentifier {
  if (t.isIdentifier(id)) return id;
  if (!t.isIdentifier(id.object) && !t.isMemberExpression(id.object)) {
    throw new Error('not implemented');
  }
  if (!t.isIdentifier(id.property)) {
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
  if (converted.has(node)) {
    return;
  }
  converted.add(node);
  if (node.declare || isAmbientContext) {
    const id = node.id;
    let typeParameters: t.TypeParameterDeclaration | null = null;
    if (node.typeParameters) {
      if (!t.isTSTypeParameterDeclaration(node.typeParameters)) {
        throw new Error(
          `TSTypeParameterDeclaration is expected, but got ${node.typeParameters.type} instead`
        );
      }
      typeParameters = convertTSTypeParameterDeclaration(node.typeParameters);
    }
    let _extends: t.InterfaceExtends[] = [];
    if (node.superClass) {
      if (
        !t.isIdentifier(node.superClass) &&
        !t.isMemberExpression(node.superClass)
      ) {
        throw new Error(
          `Identifier or MemberExpression is expected, but got ${node.superClass.type} instead`
        );
      }
      if (
        node.superTypeParameters &&
        !t.isTSTypeParameterInstantiation(node.superTypeParameters)
      ) {
        throw new Error(
          `TSTypeParameterInstantiation is expected, but got ${node.superClass.type} instead`
        );
      }

      _extends = [
        t.interfaceExtends(
          convertMemberExpressionToQualifiedTypeIdentifier(node.superClass),
          node.superTypeParameters
            ? convertTSTypeParameterInstantiation(node.superTypeParameters)
            : null
        ),
      ];
    }
    const properties: Array<
      t.ObjectTypeProperty | t.ObjectTypeSpreadProperty
    > = [];
    const indexers: Array<t.ObjectTypeIndexer> = [];
    const callProperties: Array<t.ObjectTypeCallProperty> = [];
    const internalSlots: Array<t.ObjectTypeInternalSlot> = [];

    for (const member of node.body.body) {
      if (t.isClassProperty(member)) {
        const key = convertKey(member.key);

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
    const body = t.objectTypeAnnotation(
      properties,
      indexers,
      callProperties,
      internalSlots
    );
    const replacement = t.declareClass(id, typeParameters, _extends, body);
    if (node.implements) {
      replacement.implements = node.implements.map(impl => {
        if (!t.isTSExpressionWithTypeArguments(impl)) {
          throw new Error(
            `TSExpressionWithTypeArguments is expected, but got ${impl.type} instead`
          );
        }
        const id = convertTSEntityName(impl.expression);
        const typeParameters = impl.typeParameters
          ? convertTSTypeParameterInstantiation(impl.typeParameters)
          : null;
        if (!t.isIdentifier(id)) {
          // todo: create alias for the interface to be added to implements
          throw new Error(
            'not implemented, flow does not allow class to implement interface with qualified type name'
          );
        }
        return t.classImplements(id, typeParameters);
      });
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
