import { testTransform } from '../transform';

xtest('export type', () => {
  const result = testTransform(`type Something = void;
export type { Something };`);
  const flow = `type Something = void;
export type { Something };`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('export type from', () => {
  const result = testTransform(`export type { B } from "./mod";`);
  const flow = `export type { B } from "./mod";`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
