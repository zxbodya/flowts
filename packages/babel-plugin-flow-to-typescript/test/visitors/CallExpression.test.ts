import { testTransform } from '../transform';

test('simple case', () => {
  const result = testTransform(`// @flow
createPlugin<number>();`);
  expect(result.babel).toMatchInlineSnapshot(`"createPlugin<number>();"`);
  expect(result.recast).toMatchInlineSnapshot(`"createPlugin<number>();"`);
});

test('more complicated case', () => {
  const result = testTransform(`// @flow
createPlugin<*, mixed>();`);
  expect(result.babel).toMatchInlineSnapshot(`"createPlugin<any, unknown>();"`);
  expect(result.recast).toMatchInlineSnapshot(
    `"createPlugin<any, unknown>();"`
  );
});

test('empty type arguments', () => {
  const result = testTransform(`// @flow
createPlugin<>();`);
  expect(result.babel).toMatchInlineSnapshot(`"createPlugin();"`);
  expect(result.recast).toMatchInlineSnapshot(`"createPlugin();"`);
});

test('optional call expression', () => {
  const result = testTransform(`// @flow
something?.createPlugin<?string>();`);
  expect(result.babel).toMatchInlineSnapshot(
    `"something?.createPlugin<string | undefined | null>();"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"something?.createPlugin<string | undefined | null>();"`
  );
});
