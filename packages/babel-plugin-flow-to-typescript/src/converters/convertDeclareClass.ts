import * as t from '@babel/types';
import { convertFlowType } from './convertFlowType';
import { baseNodeProps } from '../utils/baseNodeProps';
import { convertObjectTypeIndexer } from './convertObjectTypeIndexer';
import { warnOnlyOnce } from '../utils/warnOnlyOnce';
import { convertInterfaceExtends } from './convertInterfaceExtends';
import { convertTypeParameterDeclaration } from './convertTypeParameterDeclaration';
import { getPropertyKey } from './getPropertyKey';

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
      if (converted.kind === 'set') {
        if (converted.returnType) {
          // setter should not have return type annotation in typescript
          converted.returnType = null;
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

    const firstExtend = convertInterfaceExtends(node.extends[0]);
    if (t.isIdentifier(firstExtend.expression)) {
      superClass = {
        ...firstExtend.expression,
        ...baseNodeProps(node.extends[0].id),
      };
      if (firstExtend.typeParameters && node.extends[0].typeParameters) {
        superTypeParameters = {
          ...firstExtend.typeParameters,
          ...baseNodeProps(node.extends[0].typeParameters),
        };
      }
    } else {
      throw new Error('not implemented');
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
