import { testTransform } from '../transform';

test('declare export all', () => {
  const result = testTransform(`declare module 'something' {
  declare export * from 'something-else';
}`);
  expect(result.babel).toMatchInlineSnapshot(`
"declare module 'something' {
  export * from 'something-else';
}"
`);
  expect(result.recast).toMatchInlineSnapshot(`
"declare module 'something' {
  export * from 'something-else';
}"
`);
});
