import { testTransform } from '../transform';

test('declare empty named module', () => {
  const result = testTransform(`declare module "react" {}`);
  const flow = `declare module "react" {}`;
  expect(result.babel).toMatchInlineSnapshot(`"declare module \\"react\\" {}"`);
  expect(result.recast).toMatchInlineSnapshot(
    `"declare module \\"react\\" {}"`
  );
});
