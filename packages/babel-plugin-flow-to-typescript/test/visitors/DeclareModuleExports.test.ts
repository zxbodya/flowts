import { testTransform } from '../transform';

test('declare empty named module', () => {
  const result = testTransform(`declare module 'react' {
  declare module.exports: A;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare module 'react' {
      let __exports: A;
      export = __exports;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare module 'react' {
      let __exports: A;
      export = __exports
    }"
  `);
});

test('declare empty named module', () => {
  const result = testTransform(`declare module 'react' {
  declare module.exports: {
    a: number,
  };
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare module 'react' {
      let __exports: {
        a: number;
      };
      export = __exports;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare module 'react' {
      let __exports: {
        a: number;
      };

      export = __exports
    }"
  `);
});
