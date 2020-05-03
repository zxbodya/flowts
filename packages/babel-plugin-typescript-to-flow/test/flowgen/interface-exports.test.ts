import { testTransform } from '../transform';

xit('should handle exported interfaces', () => {
  const ts = `export interface UnaryFunction<T, R> {
    (source: T): R;
  }
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"export interface UnaryFunction<T, R> {
  (source: T): R;
}
"
`);
});
