import * as t from '@babel/types';
import { convertFunctionTypeAnnotation } from './convertFunctionTypeAnnotation';

export function convertObjectTypeCallProperty(
  callProperty: t.ObjectTypeCallProperty
) {
  if (t.isFunctionTypeAnnotation(callProperty.value)) {
    const { typeParams, parameters, returnType } =
      convertFunctionTypeAnnotation(callProperty.value);

    return t.tsCallSignatureDeclaration(typeParams, parameters, returnType);
  } else {
    throw new Error('ObjectCallTypeProperty case not implemented');
  }
}
