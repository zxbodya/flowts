import * as t from '@babel/types';
import { convertFlowType } from './convertFlowType';
import { convertTypeParameterDeclaration } from './convertTypeParameterDeclaration';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertTypeAlias(node: t.TypeAlias): t.TSTypeAliasDeclaration {
  const typeParameters = node.typeParameters;
  const right = node.right;
  return t.tsTypeAliasDeclaration(
    node.id,
    t.isTypeParameterDeclaration(typeParameters)
      ? {
          ...convertTypeParameterDeclaration(typeParameters),
          ...baseNodeProps(typeParameters),
        }
      : null,
    { ...baseNodeProps(right), ...convertFlowType(right) }
  );
}
