import { testTransform } from '../transform';

xit('should handle tuples', () => {
  const ts = `
  type T1 = [number, string?];
  type T2 = [number, ...string[]];
  `;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare type T1 = [number, string | void];
declare type T2 = [number] & string[];
"
`);
});
