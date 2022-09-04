import { testTransform } from '../transform';

describe('declare module ', () => {
  test('string name', () => {
    const result = testTransform(`declare module "react" {}`);
    expect(result.babel).toMatchInlineSnapshot(`"declare module "react" {}"`);
    expect(result.recast).toMatchInlineSnapshot(`"declare module "react" {}"`);
  });

  test('identifier name', () => {
    const result = testTransform(`declare module React {}`);
    expect(result.babel).toMatchInlineSnapshot(`"declare module "React" {}"`);
    expect(result.recast).toMatchInlineSnapshot(`"declare module "React" {}"`);
  });

  test('opaque type', () => {
    const result = testTransform(`declare module "test" {
    declare export opaque type A: string;
  }`);
    expect(result.babel).toMatchInlineSnapshot(`
      "declare module "test" {
        export type A = string;
      }"
    `);
    expect(result.recast).toMatchInlineSnapshot(`
      "declare module "test" {
        export type A = string;
      }"
    `);
  });

  test('named export', () => {
    const result = testTransform(`declare module "test" {
    declare export { default as A } from "b";
  }`);
    expect(result.babel).toMatchInlineSnapshot(`
      "declare module "test" {
        export { default as A } from "b";
      }"
    `);
    expect(result.recast).toMatchInlineSnapshot(`
      "declare module "test" {
        export { default as A } from "b";
      }"
    `);
  });
});
