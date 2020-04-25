import { testTransform } from '../transform';

xtest('simple case', () => {
  const result = testTransform(`createPlugin<number>();`);
  const flow = `// @flow
createPlugin<number>();`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('more complicated case', () => {
  const result = testTransform(`createPlugin<any, unknown>();`);
  const flow = `// @flow
createPlugin<*, mixed>();`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
