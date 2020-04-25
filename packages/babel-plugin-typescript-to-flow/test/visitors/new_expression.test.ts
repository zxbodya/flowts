import { testTransform } from '../transform';

xtest('simple case', () => {
  const result = testTransform(`new A<number>();`);
  const flow = `// @flow
new A<number>();`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
