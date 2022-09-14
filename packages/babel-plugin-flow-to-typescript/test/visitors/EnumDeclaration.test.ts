import { testTransform } from '../transform';

test('EnumDeclaration', () => {
  const result = testTransform(`
enum E1 {
  A,
  B,
  C,
}

enum E2 {
  A = 'a',
  B = 'b',
  C = 'c',
}

enum E3 {
  A = true,
  B = false,
}

enum E4 {
  A = 1,
  B = 2,
  C = 3,
}
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "enum E1 {
      A,
      B,
      C,
    }
    enum E2 {
      A = 'a',
      B = 'b',
      C = 'c',
    }
    enum E3 {
      A = true,
      B = false,
    }
    enum E4 {
      A = 1,
      B = 2,
      C = 3,
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "enum E1 {
      A,
      B,
      C
    }

    enum E2 {
      A = 'a',
      B = 'b',
      C = 'c'
    }

    enum E3 {
      A = true,
      B = false
    }

    enum E4 {
      A = 1,
      B = 2,
      C = 3
    }"
  `);
});
