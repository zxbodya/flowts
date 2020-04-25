import { testTransform } from '../transform';

xtest('declare variable', () => {
  const result = testTransform(`declare var screen: Screen;`);
  const flow = `declare var screen: Screen;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
