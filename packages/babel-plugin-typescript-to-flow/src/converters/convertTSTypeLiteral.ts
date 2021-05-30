import * as t from '@babel/types';
import { convertTSTypeElements } from './convertTSTypeElements';

export function convertTSTypeLiteral(
  node: t.TSTypeLiteral
): t.ObjectTypeAnnotation {
  const { properties, indexers, callProperties, internalSlots } =
    convertTSTypeElements(node.members);
  const res = t.objectTypeAnnotation(
    properties,
    indexers,
    callProperties,
    internalSlots
  );
  return res;
}
