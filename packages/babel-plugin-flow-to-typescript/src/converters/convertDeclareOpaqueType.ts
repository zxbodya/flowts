import * as t from '@babel/types';
import { convertFlowType } from './convertFlowType';
import { warnOnlyOnce } from '../utils/warnOnlyOnce';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertDeclareOpaqueType(
  node: t.DeclareOpaqueType | t.OpaqueType
) {
  if (node.supertype) {
    warnOnlyOnce(
      'Subtyping constraints in opaque type in Flow is ignored in TypeScript'
    );
  }
  const typeAnnotation = node.impltype
    ? {
        ...convertFlowType(node.impltype),
        ...baseNodeProps(node.impltype),
      }
    : node.supertype
    ? {
        ...convertFlowType(node.supertype),
        ...baseNodeProps(node.supertype),
      }
    : t.tsAnyKeyword();
  return t.tsTypeAliasDeclaration(node.id, null, typeAnnotation);
}
