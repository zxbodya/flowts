import { testTransform } from '../transform';

xtest('declare empty named module', () => {
  const result = testTransform(`declare module "react" {}`);
  const flow = `declare module "react" {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('declare module "React"', () => {
  const result = testTransform(`declare module "React" {}`);
  const flow = `declare module React {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
