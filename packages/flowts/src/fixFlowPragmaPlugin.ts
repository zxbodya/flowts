import { PluginObj, Visitor } from '@babel/core';
import * as t from '@babel/types';

const updateFlowPragma = (comments: t.Comment[]) => {
  comments
    .filter((item: t.Comment) => /@flow/.test(item.value))
    .forEach((comment: t.Comment) => {
      comment.value = comment.value.replace('@flow', '@ts-check');
    });
  comments
    .filter((item: t.Comment) => /@noflow/.test(item.value))
    .forEach((comment: t.Comment) => {
      comment.value = comment.value.replace('@noflow', '@ts-nocheck');
    });
};

export default (
  _babel: any,
  opts: { isConvertedFile?: (source: string) => boolean }
) => {
  const visitor: Visitor = {
    Program(path) {
      const [firstNode] = path.node.body;
      if (
        firstNode &&
        firstNode.leadingComments &&
        firstNode.leadingComments.length
      ) {
        // @ts-expect-error recast support
        updateFlowPragma(firstNode.leadingComments);
      }
      // @ts-expect-error recast support
      if (firstNode && firstNode.comments && firstNode.comments.length) {
        // @ts-expect-error recast support
        updateFlowPragma(firstNode.comments);
      }
    },
  };

  return {
    name: 'fix-flow-pragma',
    visitor,
  } as PluginObj;
};
