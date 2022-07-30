import * as t from '@babel/types';
import { convertTSType } from './convertTSType';
import { convertFunctionTypeAnnotation } from './convertFunctionTypeAnnotation';
import { convertKey } from './convertKey';

export function convertTSTypeElements(elements: Array<t.TSTypeElement>) {
  const properties: Array<t.ObjectTypeProperty | t.ObjectTypeSpreadProperty> =
    [];
  const indexers: Array<t.ObjectTypeIndexer> = [];
  const callProperties: Array<t.ObjectTypeCallProperty> = [];
  const internalSlots: Array<t.ObjectTypeInternalSlot> = [];

  for (const member of elements) {
    if (t.isTSCallSignatureDeclaration(member)) {
      const { typeParams, parameters, rest, returnType } =
        convertFunctionTypeAnnotation(member);

      callProperties.push(
        t.objectTypeCallProperty(
          t.functionTypeAnnotation(
            typeParams,
            parameters,
            rest,
            returnType ? returnType : t.anyTypeAnnotation()
          )
        )
      );
    }
    if (t.isTSConstructSignatureDeclaration(member)) {
      throw new Error('not implemented');
    }
    if (t.isTSPropertySignature(member)) {
      const key = convertKey(member.key);
      const prop = t.objectTypeProperty(
        key,
        convertTSType(member.typeAnnotation!.typeAnnotation)
      );
      if (member.readonly) {
        prop.variance = t.variance('plus');
      }
      if (member.optional) {
        prop.optional = true;
      }
      properties.push(prop);
    }
    if (t.isTSMethodSignature(member)) {
      const key = convertKey(member.key);

      const { typeParams, parameters, rest, returnType } =
        convertFunctionTypeAnnotation(member);

      const prop = t.objectTypeProperty(
        key,
        t.functionTypeAnnotation(
          typeParams,
          parameters,
          rest,
          returnType ? returnType : t.anyTypeAnnotation()
        )
      );
      prop.method = true;
      if (member.optional) {
        prop.optional = true;
      }
      properties.push(prop);
    }
    if (t.isTSIndexSignature(member)) {
      const indexer = t.objectTypeIndexer(
        t.identifier(member.parameters[0].name),
        convertTSType(
          (member.parameters[0].typeAnnotation as t.TSTypeAnnotation)
            .typeAnnotation
        ),
        convertTSType(member.typeAnnotation!.typeAnnotation)
      );
      if (member.readonly) {
        indexer.variance = t.variance('plus');
      }
      indexers.push(indexer);
    }
  }
  return {
    properties,
    indexers,
    callProperties,
    internalSlots,
  };
}
