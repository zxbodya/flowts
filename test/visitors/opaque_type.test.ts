import { testTransform } from '../transform';

test('opaque type', () => {
  const result = testTransform(`opaque type A = B;`);
  expect(result.babel).toMatchInlineSnapshot(`"type A = B;"`);
  expect(result.recast).toMatchInlineSnapshot(`"type A = B;"`);
});

test('opaque type with super type', () => {
  const result = testTransform(`opaque type A: S = B;`);
  expect(result.babel).toMatchInlineSnapshot(`"type A = B;"`);
  expect(result.recast).toMatchInlineSnapshot(`"type A = B;"`);
});
