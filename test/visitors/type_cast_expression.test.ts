import { pluginTester } from '../transform';

pluginTester({
  tests: [
    {
      title: 'type case expression',
      code: `(a: A);`,
      output: `(a as A);`,
    },
    {
      title: 'type case expression, with comments',
      code: `(/*1*/a/*2*/:/*3*/A/*4*/);`,
      output: `(
/*1*/
a
/*2*/
as
/*3*/
A
/*4*/
);`,
      // todo: recast drops some comments, but this should be very rare case
      recast: '(/*1*/a as /*3*/A/*4*/);',
    },
    {
      title: 'typecast on arrow function expression',
      code: 'const highlight = (n => false: number => boolean);',
      output: 'const highlight = ((n => false) as (a: number) => boolean);',
    },
    {
      title: 'typecast on arrow function expression in object property',
      code: `const defaultOptions = {
  highlight: (n => false: number => boolean)
};`,
      output: `const defaultOptions = {
  highlight: ((n => false) as (a: number) => boolean)
};`,
    },
  ],
});
