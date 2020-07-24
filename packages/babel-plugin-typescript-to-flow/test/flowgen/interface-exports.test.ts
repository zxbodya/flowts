import { testTransformDts } from '../transform';

it('should handle exported interfaces', () => {
  const ts = `export interface UnaryFunction<T, R> {
    (source: T): R
  }
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"export interface UnaryFunction<T, R> {
  (source: T): R
}"
`);
});
