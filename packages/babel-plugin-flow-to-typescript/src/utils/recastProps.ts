import * as t from '@babel/types';

export function recastProps(node: t.Node): Partial<Omit<t.Node, 'type'>> {
  return {
    // @ts-expect-error comments for recast
    comments: node.comments,
  };
}
