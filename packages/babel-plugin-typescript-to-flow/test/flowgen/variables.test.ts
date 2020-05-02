import { testTransform } from '../transform';

it('should handle declares', () => {
  const ts = `
declare const test: {a: number};
declare const foo: string, bar: number;

declare var baz: number;
declare var quuz: any, quuuz: string;

declare let quuuuz: number;
declare let quuuuz: string, fox: number;
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var test: {
  a: number,
  ...
};
declare var foo: string;
declare var bar: number;
declare var baz: number;
declare var quuz: any;
declare var quuuz: string;
declare var quuuuz: number;
declare var quuuuz: string;
declare var fox: number;
"
`);
});
