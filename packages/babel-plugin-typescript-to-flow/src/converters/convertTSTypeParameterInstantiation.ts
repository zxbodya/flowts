import * as t from '@babel/types';
import { baseNodeProps } from '../utils/baseNodeProps';
import { convertTSType } from './convertTSType';

export function convertTSTypeParameterInstantiation(
  node: t.TSTypeParameterInstantiation
): t.TypeParameterInstantiation {
  const params = node.params.map(p => ({
    ...baseNodeProps(p),
    ...convertTSType(p),
  }));

  return t.typeParameterInstantiation(params);
}
