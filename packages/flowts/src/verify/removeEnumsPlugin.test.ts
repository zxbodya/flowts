import plugin from './removeEnumsPlugin';
import { createTransform } from '../createTransform';
import { PluginObj } from '@babel/core';

describe('removeEnumsPlugin', () => {
  test('flow enums are removed', () => {
    const transform = createTransform([
      () =>
        ({
          name: 'config',
          manipulateOptions(opts: any, parserOpts: any) {
            parserOpts.plugins.push(['flow', { enums: true }]);
          },
        } as PluginObj),
      plugin,
    ]);
    expect(
      transform(`
enum E1 {
  A,
  B,
  C,
}

enum E2 {
  A = 'a',
  B = 'b',
  C = 'c',
}

enum E3 {
  A = true,
  B = false,
}

enum E4 {
  A = 1,
  B = 2,
  C = 3,
}
`)
    ).toMatchInlineSnapshot(`""`);
  });
  test('ts enums are removed', () => {
    const transform = createTransform([
      () =>
        ({
          name: 'config',
          manipulateOptions(opts: any, parserOpts: any) {
            parserOpts.plugins.push('typescript');
          },
        } as PluginObj),
      plugin,
    ]);
    expect(
      transform(`
enum E1 {
  A,
  B,
  C,
}

enum E2 {
  A = 'a',
  B = 'b',
  C = 'c',
}

enum E3 {
  A = true,
  B = false,
}

enum E4 {
  A = 1,
  B = 2,
  C = 3,
}
`)
    ).toMatchInlineSnapshot(`""`);
  });
});
