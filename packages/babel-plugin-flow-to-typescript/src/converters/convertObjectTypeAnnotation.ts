import * as t from '@babel/types';
import { convertObjectTypeCallProperty } from './convertObjectTypeCallProperty';
import { convertObjectTypeIndexer } from './convertObjectTypeIndexer';
import { convertObjectTypeInternalSlot } from './convertObjectTypeInternalSlot';
import { baseNodeProps } from '../utils/baseNodeProps';
import { convertObjectTypeProperty } from './convertObjectTypeProperty';
import { convertFlowType } from './convertFlowType';

export function convertObjectTypeAnnotation(
  node: t.ObjectTypeAnnotation
): t.TSType {
  const members: t.TSTypeElement[] = [];
  const spreads: t.TSType[] = [];

  if (
    (!node.properties || node.properties.length === 0) &&
    (!node.callProperties || node.callProperties.length === 0) &&
    (!node.internalSlots || node.internalSlots.length === 0) &&
    node.indexers &&
    node.indexers.length === 1 &&
    !t.isNumberTypeAnnotation(node.indexers[0].key) &&
    !t.isStringTypeAnnotation(node.indexers[0].key)
  ) {
    // should be converted to mapped type
    // todo: handle cases when there are few indexers which should be represented as mapped types
    return t.tsMappedType(
      t.tsTypeParameter(
        convertFlowType(node.indexers[0].key),
        null,
        node.indexers[0].id?.name || 'k'
      ),
      convertFlowType(node.indexers[0].value)
    );
  }

  if (node.properties) {
    for (const property of node.properties) {
      if (t.isObjectTypeProperty(property)) {
        members.push({
          ...convertObjectTypeProperty(property),
          ...baseNodeProps(property),
        });
      }

      if (t.isObjectTypeSpreadProperty(property)) {
        // {p1:T, ...U} -> {p1:T} & U
        spreads.push(convertFlowType(property.argument));
      }
    }
  }

  if (node.indexers) {
    members.push(...node.indexers.map(convertObjectTypeIndexer));
  }

  if (node.callProperties) {
    members.push(...node.callProperties.map(convertObjectTypeCallProperty));
  }

  if (node.internalSlots) {
    members.push(...node.internalSlots.map(convertObjectTypeInternalSlot));
  }

  // TSCallSignatureDeclaration | TSConstructSignatureDeclaration | TSMethodSignature ;

  let ret: t.TSType = t.tsTypeLiteral(members);

  if (spreads.length > 0) {
    if (ret.members.length > 0) {
      spreads.unshift(ret);
    }
    ret = t.tsIntersectionType(spreads);
  }

  return ret;
}
