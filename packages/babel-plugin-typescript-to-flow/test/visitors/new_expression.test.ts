import { testTransform } from '../transform';

test('simple case', () => {
  const result = testTransform(`new A<number>();`);
  const flow = `// @flow
new A<number>();`;
  expect(result.babel).toMatchInlineSnapshot(`"new A<number>();"`);
  expect(result.recast).toMatchInlineSnapshot(`"new A<number>();"`);
});
