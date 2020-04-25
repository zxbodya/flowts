import { testTransform } from '../transform';

test('declare empty named module', () => {
  const result = testTransform(`declare module "react" {}`);
  expect(result.babel).toMatchInlineSnapshot(`"declare module \\"react\\" {}"`);
  expect(result.recast).toMatchInlineSnapshot(
    `"declare module \\"react\\" {}"`
  );
});

test('declare module "React"', () => {
  const result = testTransform(`declare module React {}`);
  expect(result.babel).toMatchInlineSnapshot(`"declare module \\"React\\" {}"`);
  expect(result.recast).toMatchInlineSnapshot(
    `"declare module \\"React\\" {}"`
  );
});
