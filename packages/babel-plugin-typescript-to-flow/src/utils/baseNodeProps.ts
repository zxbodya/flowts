import * as t from '@babel/types';
import { recastProps } from './recastProps';

export function baseNodeProps(node: t.Node): Omit<t.Node, 'type'> {
  return {
    leadingComments: node.leadingComments,
    innerComments: node.innerComments,
    trailingComments: node.trailingComments,
    start: null,
    end: null,
    loc: node.loc,
    ...recastProps(node),
  };
}
