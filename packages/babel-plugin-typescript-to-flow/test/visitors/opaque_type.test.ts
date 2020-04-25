import { testTransform } from '../transform';

xtest('opaque type', () => {
  const result = testTransform(`type A = B;`);
  const flow = `opaque type A = B;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('opaque type with super type', () => {
  const result = testTransform(`type A = B;`);
  const flow = `opaque type A: S = B;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
