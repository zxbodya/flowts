import * as t from '@babel/types';
import { convertFlowType } from './convertFlowType';
import { baseNodeProps } from '../utils/baseNodeProps';
import { convertObjectTypeIndexer } from './convertObjectTypeIndexer';
import { warnOnlyOnce } from '../utils/warnOnlyOnce';
import { convertInterfaceExtends } from './convertInterfaceExtends';
import { convertTypeParameterDeclaration } from './convertTypeParameterDeclaration';
import { getPropertyKey } from './getPropertyKey';
import { convertFlowIdentifierToExpression } from './convertFlowIdentifierToExpression';

export function convertDeclareClass(node: t.DeclareClass) {
  const bodyElements: t.ClassBody['body'] = [];

  for (const property of node.body.properties) {
    if (t.isObjectTypeSpreadProperty(property)) {
      throw new Error('ObjectTypeSpreadProperty is unexpected in DeclareClass');
    }

    let convertedProperty = convertFlowType(property.value);
    if (t.isTSFunctionType(convertedProperty)) {
      convertedProperty = t.tsParenthesizedType(convertedProperty);
    }

    const { key, isComputed } = getPropertyKey(property);
    if (property.method) {
      if (
        !t.isTSParenthesizedType(convertedProperty) ||
        !t.isTSFunctionType(convertedProperty.typeAnnotation)
      ) {
        throw new Error('incorrect method');
      }

      const converted = t.tsDeclareMethod(
        null,
        property.key,
        convertedProperty.typeAnnotation.typeParameters,
        convertedProperty.typeAnnotation.parameters,
        convertedProperty.typeAnnotation.typeAnnotation
      );
      // todo: fix bug in tsDeclareMethod builder to accept member expression
      converted.key = key;
      converted.static = !!property.static;
      // @ts-expect-error todo improve babel types
      converted.kind = property.kind;
      if (
        converted.kind === 'set' ||
        // remove return type for constructor
        (t.isIdentifier(property.key) && property.key.name === 'constructor')
      ) {
        if (converted.returnType) {
          // setter should not have return type annotation in typescript
          converted.returnType = null;
        }
        if (converted.typeParameters) {
          // todo: add warning
          // there should be no type parameters on constructor in typescript
          converted.typeParameters = null;
        }
      }
      converted.computed = isComputed;
      bodyElements.push(converted);
    } else if (property.kind === 'init') {
      const converted = t.classProperty(
        key,
        null,
        t.tsTypeAnnotation(convertedProperty)
      );
      converted.static = !!property.static;
      converted.readonly =
        property.variance && property.variance.kind === 'plus';
      converted.computed = isComputed;
      bodyElements.push({ ...converted, ...baseNodeProps(property) });
    }
  }

  // todo:
  // if (node.body.callProperties) {
  //   bodyElements.push(...node.body.callProperties.map(convertObjectTypeCallProperty));
  // }

  if (node.body.indexers) {
    bodyElements.push(
      ...node.body.indexers.map(i => ({
        ...convertObjectTypeIndexer(i),
        ...baseNodeProps(i),
      }))
    );
  }

  // todo:
  // if (node.body.internalSlots) {
  //   bodyElements.push(...node.body.internalSlots.map(convertObjectTypeInternalSlot));
  // }

  let superClass = null;
  let superTypeParameters = null;

  if (node.extends && node.extends.length) {
    if (node.extends.length > 1) {
      warnOnlyOnce(
        'declare-class-many-parents',
        'Declare Class definitions in TS can only have one super class. Dropping extras.'
      );
    }

    const firstExtend = node.extends[0];
    if (firstExtend) {
      const typeParameterParams = firstExtend.typeParameters?.params || [];
      superTypeParameters = typeParameterParams.length
        ? {
            ...t.tsTypeParameterInstantiation(
              typeParameterParams.map(item => ({
                ...convertFlowType(item),
                ...baseNodeProps(item),
              }))
            ),
            ...(firstExtend.typeParameters
              ? baseNodeProps(firstExtend.typeParameters)
              : null),
          }
        : null;

      superClass = {
        ...convertFlowIdentifierToExpression(firstExtend.id),
        ...baseNodeProps(node.extends[0].id),
      };
    }
  }

  let typeParameters = null;
  if (t.isTypeParameterDeclaration(node.typeParameters)) {
    typeParameters = {
      ...convertTypeParameterDeclaration(node.typeParameters),
      ...baseNodeProps(node.typeParameters),
    };
  }

  const body = { ...t.classBody(bodyElements), ...baseNodeProps(node.body) };
  let _implements = null;
  if (node.implements && node.implements.length) {
    _implements = node.implements.map(i => ({
      ...convertInterfaceExtends(i),
      ...baseNodeProps(i),
    }));
  }

  const decl = t.classDeclaration(node.id, superClass, body, []);

  decl.implements = _implements;
  decl.superTypeParameters = superTypeParameters;
  decl.typeParameters = typeParameters;

  return decl;
}
