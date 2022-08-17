import { testTransform } from '../transform';

test('remove unexpected type annotations in for of statement', () => {
  const result = testTransform(`// @flow
for(let a:number of b ){}`);
  expect(result.babel).toMatchInlineSnapshot(`"for (let a of b) {}"`);
  expect(result.recast).toMatchInlineSnapshot(`
    "for (let a of b)
      {}"
  `);
});
