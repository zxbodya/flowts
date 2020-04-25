import { testTransform } from '../transform';

test('declare opaque type', () => {
  const result = testTransform(`declare opaque type TimeoutID;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"declare type TimeoutID = unknown;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"declare type TimeoutID = unknown;"`
  );
});

test('declare opaque type', () => {
  const result = testTransform(`declare opaque type TimeoutID: number;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"declare type TimeoutID = unknown;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"declare type TimeoutID = unknown;"`
  );
});
