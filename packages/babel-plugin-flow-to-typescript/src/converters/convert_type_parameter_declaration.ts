import * as t from '@babel/types';
import { convertTypeParameter } from './convert_type_parameter';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertTypeParameterDeclaration(
  node: t.TypeParameterDeclaration
): t.TSTypeParameterDeclaration {
  const params = node.params.map(p => ({
    ...baseNodeProps(p),
    ...convertTypeParameter(p),
  }));

  return t.tsTypeParameterDeclaration(params);
}
