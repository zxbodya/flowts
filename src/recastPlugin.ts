import * as babel from '@babel/core';
import * as recast from 'recast';
import { File } from '@babel/types';

/**
 * Babel plugin to use recast for parsing and printing later
 */
export default () => ({
  name: 'recast-plugin',
  parserOverride(
    code: string,
    options: babel.ParserOptions,
    parse: (code: string, options: babel.ParserOptions) => File
  ): File {
    return recast.parse(code, {
      parser: {
        // tslint:disable-next-line:no-shadowed-variable
        parse: (code: string) => {
          return parse(code, { ...options, tokens: true });
        },
      },
    });
  },
  generatorOverride(ast: File): { code: string; map?: object } {
    return recast.print(ast);
  },
});
