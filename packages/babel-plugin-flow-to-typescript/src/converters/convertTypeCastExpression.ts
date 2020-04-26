import * as t from '@babel/types';
import { convertFlowType } from './convertFlowType';
import { baseNodeProps } from '../utils/baseNodeProps';
import { recastProps } from '../utils/recastProps';

export function convertTypeCastExpression(
  node: t.TypeCastExpression
): t.TSAsExpression {
  return {
    ...t.tsAsExpression(node.expression, {
      ...baseNodeProps(node.typeAnnotation.typeAnnotation),
      ...convertFlowType(node.typeAnnotation.typeAnnotation),
    }),
    ...recastProps(node),
  };
}
