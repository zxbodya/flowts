import { testTransform } from '../transform';

test('declare type alias', () => {
  const result = testTransform(`declare type DOMHighResTimeStamp = number;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"declare type DOMHighResTimeStamp = number;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"declare type DOMHighResTimeStamp = number;"`
  );
});
