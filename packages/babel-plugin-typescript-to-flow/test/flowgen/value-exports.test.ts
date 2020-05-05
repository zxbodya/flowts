import { testTransformDts } from '../transform';

xit('should handle exported es module values', () => {
  const ts = `declare var test: {a: number};
export {test};
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var test: {
  a: number
};
declare export { test };
"
`);
});

xit('should handle default exported es module values', () => {
  const ts = `declare var test: {a: number};
export default test;
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var test: {
  a: number,
  ...
};
declare export default typeof test;
"
`);
});
