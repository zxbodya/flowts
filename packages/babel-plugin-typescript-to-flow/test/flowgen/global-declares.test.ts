import { testTransformDts } from '../transform';

it('should handle declared interfaces', () => {
  const ts = `
declare interface ICustomMessage {
  method(test: string): void;
  otherMethod(literal: "A"|"B"): void;
}
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare interface ICustomMessage {
  method(test: string): void,
  otherMethod(literal: \\"A\\" | \\"B\\"): void,
}"
`);
});
