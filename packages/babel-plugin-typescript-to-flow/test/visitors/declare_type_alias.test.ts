import { testTransform } from '../transform';

test('declare type alias', () => {
  const result = testTransform(`declare type DOMHighResTimeStamp = number;`);
  const flow = `declare type DOMHighResTimeStamp = number;`;
  expect(result.babel).toMatchInlineSnapshot(
    `"declare type DOMHighResTimeStamp = number;"`
  );
  // todo: bug
  // expect(result.recast).toMatchInlineSnapshot();
});
