import * as t from '@babel/types';
import { convertFunctionTypeAnnotation } from '../converters/convertFunctionTypeAnnotation';

export function convertTSDeclareFunction(node: t.TSDeclareFunction) {
  const {
    typeParams,
    parameters,
    rest,
    returnType,
  } = convertFunctionTypeAnnotation(node);

  const id = t.identifier(node.id!.name);
  id.typeAnnotation = t.typeAnnotation(
    t.functionTypeAnnotation(
      typeParams,
      parameters,
      rest,
      returnType ? returnType : t.anyTypeAnnotation()
    )
  );
  return t.declareFunction(id);
}
