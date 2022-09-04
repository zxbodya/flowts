import { testTransform } from '../transform';

test('declares inside of a module', () => {
  const result = testTransform(`declare module React {
  declare class A {}
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare module "React" {
      class A {}
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare module "React" {
      class A {}
    }"
  `);
});

test('declares outside of a module', () => {
  const result = testTransform(`declare module React {}
declare class A {}
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare module "React" {}

    declare class A {}"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare module "React" {}
    declare class A {}"
  `);
});
