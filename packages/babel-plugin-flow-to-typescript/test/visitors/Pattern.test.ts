import { testTransform } from '../transform';

test('remove unexpected type annotations in ArrayPattern', () => {
  const result = testTransform(`// @flow
let [a, b: number] = [];`);
  expect(result.babel).toMatchInlineSnapshot(`"let [a, b] = [];"`);
  expect(result.recast).toMatchInlineSnapshot(`"let [a, b] = [];"`);
});

test('remove unexpected type annotations in more of a generic pattern', () => {
  const result = testTransform(`// @flow
let {test: [a, b: number] = []} = {};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let {
      test: [a, b] = []
    } = {};"
  `);
  expect(result.recast).toMatchInlineSnapshot(
    `"let {test: [a, b] = []} = {};"`
  );
});
