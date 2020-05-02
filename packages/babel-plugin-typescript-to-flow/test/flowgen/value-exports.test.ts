import { testTransform } from '../transform';

it('should handle exported es module values', () => {
  const ts = `declare var test: {a: number};
export {test};
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var test: {
  a: number,
  ...
};
declare export { test };
"
`);
});

it('should handle default exported es module values', () => {
  const ts = `declare var test: {a: number};
export default test;
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var test: {
  a: number,
  ...
};
declare export default typeof test;
"
`);
});
