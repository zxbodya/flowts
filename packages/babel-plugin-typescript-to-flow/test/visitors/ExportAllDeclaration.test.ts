import { testTransform } from '../transform';

test('Removes type from export all declaration', () => {
  const result = testTransform(`export * from 'module';`);
  const flow = `export type * from 'module';`;
  expect(result.babel).toMatchInlineSnapshot(`"export * from 'module';"`);
  expect(result.recast).toMatchInlineSnapshot(`"export * from 'module';"`);
});
