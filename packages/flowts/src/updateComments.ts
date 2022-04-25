import * as t from '@babel/types';
import * as babel from '@babel/core';
import { sharedParserPlugins } from './sharedParserPlugins';
import traverse from '@babel/traverse';

export type CommentOperation =
  | { type: 'remove' }
  | { type: 'replace'; code: string };

type CommentWithOperation = { comment: t.Comment; operation: CommentOperation };

/**
 * Helper to update fix comments.
 *
 * This is to be used to removing/replacing code in place of comments, instead of using babel plugin.
 * Reason is - babel generator does not preserve formatting. recast has bugs for this kind of changes.
 *
 * @param source
 * @param transform
 * @param options
 */
export function updateComments(
  source: string,
  transform: (comment: t.Comment) => CommentOperation,
  options: {
    isJSX: boolean;
    syntax: 'flow' | 'typescript';
    filename?: string;
  }
): string {
  const isJSX = options.isJSX;
  const jsxPlugin = isJSX ? (['jsx'] as const) : [];
  const filename =
    options.filename ?? 'source' + (options.syntax === 'flow' ? '.js' : '.ts');
  const ast = babel.parseSync(source, {
    compact: false,
    babelrc: false,
    configFile: false,
    ast: true,
    parserOpts: {
      allowReturnOutsideFunction: true,
      plugins: [
        options.syntax === 'flow' ? 'flow' : 'typescript',
        ...jsxPlugin,
        ...sharedParserPlugins,
      ],
    },
    filename,
  });

  if (ast === null) {
    throw new Error(
      'babel.parseSync returned null - probably there is some configuration error'
    );
  }

  // workaround to have "scope.hub"
  // @ts-ignore
  new babel.File({ filename }, { code: source, ast });

  let comments: t.Comment[] = [];
  traverse(ast, {
    Program(path) {
      path.traverse({
        enter: function ({ node }) {
          if (node.leadingComments) comments.push(...node.leadingComments);
          if (node.innerComments) comments.push(...node.innerComments);
          if (node.trailingComments) comments.push(...node.trailingComments);
        },
      });
    },
  });
  comments = [...new Set(comments)];
  const operations: Array<CommentWithOperation> = comments.map(comment => ({
    comment,
    operation: transform(comment),
  }));
  operations.sort((a, b) => a.comment.start - b.comment.start);

  const parts = [];
  let start = 0;
  for (const { comment, operation } of operations) {
    // code before comment
    parts.push(source.substring(start, comment.start));
    if (operation.type === 'remove') {
      // comment is skipped
    } else if (operation.type === 'replace') {
      // replacement
      parts.push(operation.code);
    }
    start = comment.end;
  }
  // remaining code till end of file
  parts.push(source.substring(start));

  return parts.join('');
}
//
// const USELESS_FLOW_COMMENT_EXPS = [
//   /^\s*\$FlowFixMe suppressed for compatibility with web-code migration\s*$/i,
// ] as const;
// const updateComments = (comments: t.Comment[]) => {
//   // comments.forEach((item) => {
//   //   if (/\$FlowFixMe/i.test(item.value)) {
//   //     console.log({ value: item.value });
//   //   }
//   // });
//   const commentIndex = comments.findIndex(item => {
//     return USELESS_FLOW_COMMENT_EXPS.some(exp => exp.test(item.value));
//   });
//   if (commentIndex !== -1) {
//     comments.splice(commentIndex, 1);
//     return true;
//   }
//   return false;
// };
