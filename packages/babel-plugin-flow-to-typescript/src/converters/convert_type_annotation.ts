import * as t from '@babel/types';
import { convertFlowType } from './convert_flow_type';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertTypeAnnotation(node: t.TypeAnnotation): t.TSTypeAnnotation {
  return t.tsTypeAnnotation({
    ...convertFlowType(node.typeAnnotation),
    ...baseNodeProps(node.typeAnnotation),
  });
}
