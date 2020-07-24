import { testTransformDts } from '../transform';

it('should handle declares', () => {
  const ts = `
declare const test: {a: number};
declare const foo: string, bar: number;

declare var baz: number;
declare var quuz: any, quuuz: string;

declare let quuuuz1: number;
declare let quuuuz2: string, fox: number;
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var test: {
  a: number
};
declare var foo: string;
declare var bar: number;
declare var baz: number;
declare var quuz: any;
declare var quuuz: string;
declare var quuuuz1: number;
declare var quuuuz2: string;
declare var fox: number;"
`);
});
