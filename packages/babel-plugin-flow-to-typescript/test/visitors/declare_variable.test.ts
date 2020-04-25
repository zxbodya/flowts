import { testTransform } from '../transform';

test('declare variable', () => {
  const result = testTransform(`declare var screen: Screen;`);
  expect(result.babel).toMatchInlineSnapshot(`"declare var screen: Screen;"`);
  expect(result.recast).toMatchInlineSnapshot(`"declare var screen: Screen;"`);
});
