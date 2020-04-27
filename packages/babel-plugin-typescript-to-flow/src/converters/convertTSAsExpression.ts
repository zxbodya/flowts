import * as t from '@babel/types';
import { convertTSType } from './convertTSType';
import { baseNodeProps } from '../utils/baseNodeProps';
import { recastProps } from '../utils/recastProps';

export function convertTSAsExpression(
  node: t.TSAsExpression
): t.TypeCastExpression {
  return {
    ...t.typeCastExpression(
      node.expression,
      t.typeAnnotation({
        ...baseNodeProps(node.typeAnnotation),
        ...convertTSType(node.typeAnnotation),
      })
    ),
    ...recastProps(node),
  };
}
