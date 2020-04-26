import * as t from '@babel/types';
import { convertFlowType } from './convert_flow_type';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertTypeParameter(node: t.TypeParameter): t.TSTypeParameter {
  return t.tsTypeParameter(
    node.bound && {
      ...baseNodeProps(node.bound.typeAnnotation),
      ...convertFlowType(node.bound.typeAnnotation),
    },
    node.default && {
      ...baseNodeProps(node.default),
      ...convertFlowType(node.default),
    },
    node.name!
  );
}
