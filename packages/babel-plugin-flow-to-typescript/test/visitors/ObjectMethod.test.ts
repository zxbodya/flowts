import { testTransform } from '../transform';

test('getter/setter support', () => {
  const result = testTransform(`let a = {
  get a(): number { return 1; },
  set a(value:number): number {}
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a = {
      get a(): number {
        return 1;
      },

      set a(value: number) {}

    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a = {
      get a(): number { return 1; },
      set a(value: number) {}
    }"
  `);
});
