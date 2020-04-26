import * as t from '@babel/types';

import { convertFunctionTypeAnnotation } from './convertFunctionTypeAnnotation';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertDeclareFunction(node: t.DeclareFunction) {
  if (!t.isTypeAnnotation(node.id.typeAnnotation))
    throw new Error('typeAnnotation is missing');

  const typeAnnotation = node.id.typeAnnotation.typeAnnotation;
  if (!t.isFunctionTypeAnnotation(typeAnnotation)) {
    throw new Error('typeAnnotation is not FunctionTypeAnnotation');
  }

  const { typeParams, parameters, returnType } = convertFunctionTypeAnnotation(
    typeAnnotation
  );
  const id = { ...t.identifier(node.id.name), ...baseNodeProps(node.id) };
  return t.tsDeclareFunction(id, typeParams, parameters, returnType);
}
