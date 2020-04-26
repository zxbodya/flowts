import * as t from '@babel/types';
import { convertTypeParameterDeclaration } from './convert_type_parameter_declaration';
import { convertFlowType } from './convert_flow_type';

export function convertDeclareTypeAlias(
  node: t.DeclareTypeAlias | t.TypeAlias
) {
  let typeParams = null;
  if (node.typeParameters) {
    typeParams = convertTypeParameterDeclaration(node.typeParameters);
  }
  const type = convertFlowType(node.right);
  return t.tsTypeAliasDeclaration(node.id, typeParams, type);
}
