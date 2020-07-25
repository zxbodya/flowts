import { testTransform } from '../transform';

test('simple case', () => {
  const result = testTransform(`createPlugin<number>();`);
  expect(result.babel).toMatchInlineSnapshot(`"createPlugin<number>();"`);
  expect(result.recast).toMatchInlineSnapshot(`"createPlugin<number>();"`);
});

test('more complicated case', () => {
  const result = testTransform(`createPlugin<any, unknown>();`);
  expect(result.babel).toMatchInlineSnapshot(`"createPlugin<any, mixed>();"`);
  expect(result.recast).toMatchInlineSnapshot(`"createPlugin<any, mixed>();"`);
});
