import { testTransform } from '../transform';

xtest('declare opaque type', () => {
  const result = testTransform(`declare type TimeoutID = unknown;`);
  const flow = `declare opaque type TimeoutID;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('declare opaque type', () => {
  const result = testTransform(`declare type TimeoutID = unknown;`);
  const flow = `declare opaque type TimeoutID: number;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
