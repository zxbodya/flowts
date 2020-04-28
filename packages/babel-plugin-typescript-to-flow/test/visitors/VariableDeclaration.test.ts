import { testTransform } from '../transform';

test('declare varible', () => {
  const result = testTransform(`declare const locale: {
    collapse: string;
    expand: string;
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare var locale: {
      collapse: string,
      expand: string,
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});
