import { testTransform } from '../transform';

it('should handle union strings', () => {
  const ts = `
  interface MyObj {
    state?: "APPROVED" | "REQUEST_CHANGES" | "COMMENT" | "PENDING"
  }
  type CompletionsTriggerCharacter = '"' | "'";
`;

  const result = testTransform(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface MyObj {
      state?: \\"APPROVED\\" | \\"REQUEST_CHANGES\\" | \\"COMMENT\\" | \\"PENDING\\"
    }
    declare type CompletionsTriggerCharacter = \\"\\\\\\"\\" | \\"'\\";"
  `);
});
