import { testTransform } from '../transform';

xtest('type case expression', () => {
  const result = testTransform(`(a as A);`);
  const flow = `(a: A);`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

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
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('typecast on arrow function expression', () => {
  const result = testTransform(
    `const highlight = ((n => false) as (a: number) => boolean);`
  );
  const flow = `const highlight = (n => false: number => boolean);`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('typecast on arrow function expression in object property', () => {
  const result = testTransform(`const defaultOptions = {
  highlight: ((n => false) as (a: number) => boolean)
};`);
  const flow = `const defaultOptions = {
  highlight: (n => false: number => boolean)
};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
