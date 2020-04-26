import * as t from '@babel/types';
import { convertTypeParameterDeclaration } from './convertTypeParameterDeclaration';
import { convertFlowType } from './convertFlowType';

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
