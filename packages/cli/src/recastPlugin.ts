import * as babel from '@babel/core';
import * as recast from '@zxbodya/recast';
import * as t from '@babel/types';

/**
 * Babel plugin to use recast for parsing and printing later
 */
export default () => ({
  name: 'recast-plugin',
  parserOverride(
    code: string,
    options: babel.ParserOptions,
    parse: (code: string, options: babel.ParserOptions) => t.File
  ): t.File {
    return recast.parse(code, {
      parser: {
        parse: (code: string) => {
          return parse(code, { ...options, tokens: true });
        },
      },
    });
  },
  generatorOverride(ast: t.File): { code: string; map?: object } {
    return recast.print(ast);
  },
});
