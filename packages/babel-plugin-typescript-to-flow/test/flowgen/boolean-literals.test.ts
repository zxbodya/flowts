import { testTransform } from '../transform';

it('should handle boolean literals in type', () => {
  const ts = `
  type MyFalsyType = string | false;
  type MyTruthyType = true | string;
`;

  const result = testTransform(ts);

  expect(result.babel).toMatchInlineSnapshot(`
"declare type MyFalsyType = string | false;
declare type MyTruthyType = true | string;"
`);
});
