import { testTransform } from '../transform';

xtest('declares inside of a module', () => {
  const result = testTransform(`declare module "React" {
  class A {}
}`);
  const flow = `declare module "React" {
  declare class A {}
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

test('declares outside of a module', () => {
  const result = testTransform(`declare module "React" {}

declare class A {}
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare module \\"React\\" {}
    declare class A {}"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare module \\"React\\" {}

    declare class A {}"
  `);
});
