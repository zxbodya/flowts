import * as t from '@babel/types';
import { warnOnlyOnce } from '../utils/warnOnlyOnce';
import { convertFlowType } from './convertFlowType';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertOpaqueType(
  node: t.OpaqueType
): t.TSTypeAliasDeclaration {
  if (node.supertype) {
    warnOnlyOnce(
      'Subtyping constraints in opaque type in Flow is ignored in TypeScript'
    );
  }
  const tsNode = t.tsTypeAliasDeclaration(node.id, null, {
    ...convertFlowType(node.impltype),
    ...baseNodeProps(node.impltype),
  });
  tsNode.declare = false;

  return tsNode;
}
