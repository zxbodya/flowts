import { testTransform } from '../transform';

xtest('declare type alias', () => {
  const result = testTransform(`declare type DOMHighResTimeStamp = number;`);
  const flow = `declare type DOMHighResTimeStamp = number;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
