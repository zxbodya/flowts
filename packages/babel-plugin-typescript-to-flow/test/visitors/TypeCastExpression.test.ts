import { testTransform } from '../transform';

test('type case expression', () => {
  const result = testTransform(`(a as A);`);
  expect(result.babel).toMatchInlineSnapshot(`"(a: A);"`);
  // expect(result.recast).toMatchInlineSnapshot();
});

// todo: babel fails to parse this
xtest('type case expression, with comments', () => {
  const result = testTransform(`(
/*1*/
a
/*2*/
as
/*3*/
A
/*4*/
);`);
  const flow = `(/*1*/a/*2*/:/*3*/A/*4*/);`;
  expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

test('typecast on arrow function expression', () => {
  const result = testTransform(
    `const highlight = ((n => false) as (a: number) => boolean);`
  );
  expect(result.babel).toMatchInlineSnapshot(
    `"const highlight = (n => false: (a: number) => boolean);"`
  );
  // expect(result.recast).toMatchInlineSnapshot();
});

test('typecast on arrow function expression in object property', () => {
  const result = testTransform(`const defaultOptions = {
  highlight: ((n => false) as (a: number) => boolean)
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "const defaultOptions = {
      highlight: (n => false: (a: number) => boolean)
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});
