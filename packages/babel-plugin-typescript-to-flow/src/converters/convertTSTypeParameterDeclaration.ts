import * as t from '@babel/types';
import { convertTSTypeParameter } from './convertTSTypeParameter';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertTSTypeParameterDeclaration(
  node: t.TSTypeParameterDeclaration
): t.TypeParameterDeclaration {
  const params = node.params.map(p => ({
    ...baseNodeProps(p),
    ...convertTSTypeParameter(p),
  }));

  return t.typeParameterDeclaration(params);
}
