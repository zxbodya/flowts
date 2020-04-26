import * as t from '@babel/types';
import { convertFlowType } from './convert_flow_type';
import { convertTypeParameterDeclaration } from './convert_type_parameter_declaration';
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
