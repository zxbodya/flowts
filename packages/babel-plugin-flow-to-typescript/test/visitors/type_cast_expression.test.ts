import { testTransform } from '../transform';

test('type case expression', () => {
  const result = testTransform(`(a: A);`);
  expect(result.babel).toMatchInlineSnapshot(`"(a as A);"`);
  expect(result.recast).toMatchInlineSnapshot(`"(a as A);"`);
});

test('type case expression, with comments', () => {
  const result = testTransform(`(/*1*/a/*2*/:/*3*/A/*4*/);`);
  expect(result.babel).toMatchInlineSnapshot(`
    "(
    /*1*/
    a
    /*2*/
    as
    /*3*/
    A
    /*4*/
    );"
  `);
  expect(result.recast).toMatchInlineSnapshot(`"(/*1*/a as /*3*/A/*4*/);"`);
});

test('typecast on arrow function expression', () => {
  const result = testTransform(
    `const highlight = (n => false: number => boolean);`
  );
  expect(result.babel).toMatchInlineSnapshot(
    `"const highlight = ((n => false) as (a: number) => boolean);"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"const highlight = ((n => false) as (a: number) => boolean);"`
  );
});

test('typecast on arrow function expression in object property', () => {
  const result = testTransform(`const defaultOptions = {
  highlight: (n => false: number => boolean)
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "const defaultOptions = {
      highlight: ((n => false) as (a: number) => boolean)
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "const defaultOptions = {
      highlight: ((n => false) as (a: number) => boolean)
    };"
  `);
});
