import * as t from '@babel/types';
import { baseNodeProps } from '../utils/baseNodeProps';
import { convertFlowType } from './convertFlowType';

export function convertTypeParameterInstantiation(
  node: t.TypeParameterInstantiation
): t.TSTypeParameterInstantiation {
  const params = node.params.map(p => ({
    ...baseNodeProps(p),
    ...convertFlowType(p),
  }));

  return t.tsTypeParameterInstantiation(params);
}
