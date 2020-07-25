import * as babel from '@babel/core';
import babelPluginRecast from './';

function transform(code: string): string {
  const result = babel.transformSync(code.trim(), {
    babelrc: false,
    configFile: false,
    plugins: [babelPluginRecast],
  });
  if (result === null) {
    throw new Error(
      'babel.transformSync returned null, probably configuration issue'
    );
  }
  return result.code as string;
}

test('basic usage', () => {
  expect(transform('var a = 1')).toMatchInlineSnapshot(`"var a = 1"`);
});
