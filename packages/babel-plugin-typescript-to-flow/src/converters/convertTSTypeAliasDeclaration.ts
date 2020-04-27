import * as t from '@babel/types';
import { convertTSType } from './convertTSType';
import { convertTSTypeParameterDeclaration } from './convertTSTypeParameterDeclaration';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertTSTypeAliasDeclaration(
  node: t.TSTypeAliasDeclaration
): t.TypeAlias | t.DeclareTypeAlias {
  const typeParameters = node.typeParameters;
  const typeAnnotation = node.typeAnnotation;
  const typeAlias = node.declare ? t.declareTypeAlias : t.typeAlias;
  return typeAlias(
    node.id,
    typeParameters
      ? {
          ...convertTSTypeParameterDeclaration(typeParameters),
          ...baseNodeProps(typeParameters),
        }
      : null,
    { ...baseNodeProps(typeAnnotation), ...convertTSType(typeAnnotation) }
  );
}
