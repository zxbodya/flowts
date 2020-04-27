import * as t from '@babel/types';
import { convertTSType } from './convertTSType';
import { convertFunctionTypeAnnotation } from './convertFunctionTypeAnnotation';

export function convertTSTypeElements(elements: Array<t.TSTypeElement>) {
  const properties: Array<
    t.ObjectTypeProperty | t.ObjectTypeSpreadProperty
  > = [];
  const indexers: Array<t.ObjectTypeIndexer> = [];
  const callProperties: Array<t.ObjectTypeCallProperty> = [];
  const internalSlots: Array<t.ObjectTypeInternalSlot> = [];

  for (const member of elements) {
    if (t.isTSCallSignatureDeclaration(member)) {
      const {
        typeParams,
        parameters,
        rest,
        returnType,
      } = convertFunctionTypeAnnotation(member);

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
      throw new Error('todo:');
    }
    if (t.isTSPropertySignature(member)) {
      if (t.isIdentifier(member.key) || t.isStringLiteral(member.key)) {
        const prop = t.objectTypeProperty(
          member.key,
          convertTSType(member.typeAnnotation!.typeAnnotation)
        );
        properties.push(prop);
        if (member.readonly) {
          prop.variance = t.variance('plus');
        }
      } else {
        throw new Error('todo:');
      }
    }
    if (t.isTSMethodSignature(member)) {
      let key: t.Identifier | t.StringLiteral;
      if (t.isIdentifier(member.key) || t.isStringLiteral(member.key)) {
        key = member.key;
      } else {
        if (
          t.isMemberExpression(member.key) &&
          t.isIdentifier(member.key.object) &&
          t.isIdentifier(member.key.property)
        ) {
          if (
            member.key.object.name === 'Symbol' &&
            member.key.property.name === 'iterator'
          ) {
            key = t.identifier('@@iterator');
          } else if (
            member.key.object.name === 'Symbol' &&
            member.key.property.name === 'asyncIterator'
          ) {
            key = t.identifier('@@asyncIterator');
          } else {
            throw new Error('todo:');
          }
        } else {
          throw new Error('todo:');
        }
      }

      const {
        typeParams,
        parameters,
        rest,
        returnType,
      } = convertFunctionTypeAnnotation(member);

      const prop = t.objectTypeProperty(
        key,
        t.functionTypeAnnotation(
          typeParams,
          parameters,
          rest,
          returnType ? returnType : t.anyTypeAnnotation()
        )
      );
      // @ts-ignore todo: @babel-types
      prop.method = true;
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
