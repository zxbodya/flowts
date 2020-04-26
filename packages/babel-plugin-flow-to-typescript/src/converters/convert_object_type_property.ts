import * as t from '@babel/types';
import { convertFlowType } from './convert_flow_type';
import { baseNodeProps } from '../utils/baseNodeProps';
import { getPropertyKey } from './get_property_key';

export function convertObjectTypeProperty(property: t.ObjectTypeProperty) {
  let tsType;
  if (!t.isNullableTypeAnnotation(property.value)) {
    tsType = convertFlowType(property.value);
  } else {
    let tsValueT = convertFlowType(property.value.typeAnnotation);
    if (t.isTSFunctionType(tsValueT)) {
      tsValueT = t.tsParenthesizedType(tsValueT);
    }
    if (property.optional) {
      // { key?: ?T } -> { key?: T | null }
      tsType = t.tsUnionType([tsValueT, t.tsNullKeyword()]);
    } else {
      // { key: ?T } -> { key: T | null | undefined }
      tsType = t.tsUnionType([
        tsValueT,
        t.tsUndefinedKeyword(),
        t.tsNullKeyword(),
      ]);
    }
  }

  const { key, isComputed } = getPropertyKey(property);

  // @ts-ignore todo: property is missing in type definition
  if (property.method) {
    if (!t.isTSFunctionType(tsType)) {
      throw new Error('incorrect method declaration');
    }
    const tsMethod = t.tsMethodSignature(
      key,
      tsType.typeParameters,
      tsType.parameters,
      tsType.typeAnnotation
    );

    tsMethod.optional = property.optional;
    tsMethod.computed = isComputed;
    return tsMethod;
  } else {
    const tsPropSignature = t.tsPropertySignature(
      key,
      t.tsTypeAnnotation({ ...tsType, ...baseNodeProps(property.value) })
    );
    tsPropSignature.optional = property.optional;
    tsPropSignature.readonly =
      property.variance && property.variance.kind === 'plus';
    tsPropSignature.computed = isComputed;
    return tsPropSignature;
  }
}
