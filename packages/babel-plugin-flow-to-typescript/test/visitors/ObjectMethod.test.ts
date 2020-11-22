import { testTransform } from '../transform';

test('getter/setter support', () => {
  const result = testTransform(`let a = {
  get a(): number { return 1; },
  set a(value:number): number {},
  set b(value?:number) {}
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a = {
      get a(): number {
        return 1;
      },

      set a(value: number) {},

      set b(value: number | undefined | null) {}

    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a = {
      get a(): number { return 1; },
      set a(value: number) {},
      set b(value: number | undefined | null) {}
    }"
  `);
});
