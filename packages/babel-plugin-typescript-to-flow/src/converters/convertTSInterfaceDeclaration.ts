import * as t from '@babel/types';

import { convertTSTypeParameterDeclaration } from './convertTSTypeParameterDeclaration';
import { baseNodeProps } from '../utils/baseNodeProps';
import { convertTSEntityName } from './convertTSEntityName';
import { convertTSTypeElements } from './convertTSTypeElements';
import { convertTSTypeParameterInstantiation } from './convertTSTypeParameterInstantiation';

export function convertTSInterfaceDeclaration(
  node: t.TSInterfaceDeclaration,
  isAmbientContext?: boolean
) {
  let typeParameters = null;
  if (node.typeParameters) {
    typeParameters = {
      ...convertTSTypeParameterDeclaration(node.typeParameters),
      ...baseNodeProps(node.typeParameters),
    };
  }

  const _extends = node.extends
    ? node.extends.map(extend => {
        const id = convertTSEntityName(extend.expression);
        const typeParameters = extend.typeParameters
          ? convertTSTypeParameterInstantiation(extend.typeParameters)
          : null;
        return t.interfaceExtends(id, typeParameters);
      })
    : [];

  const { properties, indexers, callProperties, internalSlots } =
    convertTSTypeElements(node.body.body);
  const body = t.objectTypeAnnotation(
    properties,
    indexers,
    callProperties,
    internalSlots
  );

  const interfaceDeclaration =
    node.declare || isAmbientContext
      ? t.declareInterface
      : t.interfaceDeclaration;
  return interfaceDeclaration(node.id, typeParameters, _extends, body);
}
