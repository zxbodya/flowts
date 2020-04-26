import * as t from '@babel/types';
import { convertFlowType } from './convertFlowType';
import { convertFunctionTypeAnnotation } from './convertFunctionTypeAnnotation';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertObjectTypeInternalSlot(
  property: t.ObjectTypeInternalSlot
) {
  if (property.method) {
    if (!t.isFunctionTypeAnnotation(property.value)) {
      throw new Error('FunctionTypeAnnotation expected');
    }
    const {
      typeParams,
      parameters,
      returnType,
    } = convertFunctionTypeAnnotation(property.value);
    const methodSignature = t.tsMethodSignature(
      property.id,
      typeParams,
      parameters,
      returnType
    );

    methodSignature.computed = true;
    methodSignature.optional = property.optional;
    return methodSignature;
  } else {
    const tsPropSignature = t.tsPropertySignature(
      property.id,
      t.tsTypeAnnotation({
        ...convertFlowType(property.value),
        ...baseNodeProps(property.value),
      })
    );
    tsPropSignature.optional = property.optional;
    tsPropSignature.computed = true;
    // todo: property.static;
    return tsPropSignature;
  }
}
