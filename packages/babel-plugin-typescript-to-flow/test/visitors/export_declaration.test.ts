import { testTransform } from '../transform';

test('export type', () => {
  const result = testTransform(`type Something = void;
export type { Something };`);
  const flow = `type Something = void;
export type { Something };`;
  expect(result.babel).toMatchInlineSnapshot(`
    "type Something = void;
    export type { Something };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "type Something = void;
    export type { Something };"
  `);
});

test('export type from', () => {
  const result = testTransform(`export type { B } from "./mod";`);
  const flow = `export type { B } from "./mod";`;
  expect(result.babel).toMatchInlineSnapshot(
    `"export type { B } from \\"./mod\\";"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"export type { B } from \\"./mod\\";"`
  );
});
