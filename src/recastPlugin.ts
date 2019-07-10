import * as babel from '@babel/core';
import * as recast from '@zxbodya/recast';

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
