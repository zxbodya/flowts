import { testTransform } from '../transform';

xtest('Removes type from export all declaration', () => {
  const result = testTransform(`export * from 'module';`);
  const flow = `export type * from 'module';`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
