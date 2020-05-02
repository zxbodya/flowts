import { testTransform } from '../transform';

it('should handle declared interfaces', () => {
  const ts = `
declare interface ICustomMessage {
  method(test: string): void;
  otherMethod(literal: "A"|"B"): void;
}
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare interface ICustomMessage {
  method(test: string): void;
  otherMethod(literal: \\"A\\" | \\"B\\"): void;
}
"
`);
});
