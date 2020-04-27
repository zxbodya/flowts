import { testTransform } from '../transform';

test('empty', () => {
  const result = testTransform(`const f = () => {};`);
  expect(result.babel).toMatchInlineSnapshot(`"const f = () => {};"`);
  expect(result.recast).toMatchInlineSnapshot(`"const f = () => {};"`);
});

test('return type', () => {
  const result = testTransform(`const f = (): T => {};`);
  expect(result.babel).toMatchInlineSnapshot(`"const f = (): T => {};"`);
  expect(result.recast).toMatchInlineSnapshot(`"const f = (): T => {};"`);
});

test('argument type', () => {
  const result = testTransform(`const f = (a: T, b: R): T => {};`);
  expect(result.babel).toMatchInlineSnapshot(
    `"const f = (a: T, b: R): T => {};"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"const f = (a: T, b: R): T => {};"`
  );
});

test('simple generic', () => {
  const result = testTransform(`const f = <T extends any>(v: T): T => {};`);
  // todo: extents any is a workaround which can be removed
  expect(result.babel).toMatchInlineSnapshot(
    `"const f = <T: any>(v: T): T => {};"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"const f = <T: any>(v: T): T => {};"`
  );
});

test('optional argument', () => {
  const result = testTransform(`const f = (arg?: string) => {};`);
  expect(result.babel).toMatchInlineSnapshot(
    `"const f = (arg?: string) => {};"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"const f = (arg?: string) => {};"`
  );
});

test('maybe argument', () => {
  const result = testTransform(`const f = (arg?: string | null) => {};`);
  // todo: can be improved
  // const flow = `const f = (arg: ?string) => {};`;
  expect(result.babel).toMatchInlineSnapshot(
    `"const f = (arg?: string | null) => {};"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"const f = (arg?: string | null) => {};"`
  );
});

test('optional maybe argument', () => {
  const result = testTransform(`const f = (arg?: string | null) => {};`);
  // todo: can be improved
  // const flow = `const f = (arg?: ?string) => {};`;
  expect(result.babel).toMatchInlineSnapshot(
    `"const f = (arg?: string | null) => {};"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"const f = (arg?: string | null) => {};"`
  );
});

test('rest parameters', () => {
  const result = testTransform(`const f = (...args) => {};`);
  expect(result.babel).toMatchInlineSnapshot(`"const f = (...args) => {};"`);
  expect(result.recast).toMatchInlineSnapshot(`"const f = (...args) => {};"`);
});

test('arrow function with type parameters for JSX context', () => {
  const result = testTransform(`const a = <T extends any, R>(v: T) => v;`);
  // const flow = `const a = <T, R>(v: T) => v;`;
  expect(result.babel).toMatchInlineSnapshot(
    `"const a = <T: any, R>(v: T) => v;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"const a = <T: any, R>(v: T) => v;"`
  );
});

test('arrow function with type parameters for JSX context 2', () => {
  const result = testTransform(
    `export const a = <T extends any>(a: A<T> | undefined | null, b: B): T | undefined | null => {};`
  );
  // todo:
  //   const flow = `export const a = <T>(
  //   a?: A<T>,
  //   b: B,
  // ): ?T => {};`;
  expect(result.babel).toMatchInlineSnapshot(
    `"export const a = <T: any>(a: A<T> | void | null, b: B): T | void | null => {};"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"export const a = <T: any>(a: A<T> | void | null, b: B): T | void | null => {};"`
  );
});

test('arrow function returning object expression', () => {
  const result = testTransform(`var f = () => ({
  a: 1
} as {});`);
  const flow = `var f = () => ({
  a: 1
}: {});`;
  expect(result.babel).toMatchInlineSnapshot(`
    "var f = () => ({
      a: 1
    }: {});"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "var f = () => (({
      a: 1
    }: {}));"
  `);
});

test('arrow function with destructuring in arguments, keeps type', () => {
  const result = testTransform(`([a, b]: [A, B]) => {};`);
  expect(result.babel).toMatchInlineSnapshot(`"([a, b]: [A, B]) => {};"`);
  expect(result.recast).toMatchInlineSnapshot(`"([a, b]: [A, B]) => {};"`);
});

test('arrow function with typed destructuring in arguments, array', () => {
  const result = testTransform(`([a, b]) => {};`);
  expect(result.babel).toMatchInlineSnapshot(`"([a, b]) => {};"`);
  expect(result.recast).toMatchInlineSnapshot(`"([a, b]) => {};"`);
});

test('arrow function with typed destructuring in arguments, array with rest', () => {
  const result = testTransform(`([a, b, ...c]) => {};`);
  expect(result.babel).toMatchInlineSnapshot(`"([a, b, ...c]) => {};"`);
  expect(result.recast).toMatchInlineSnapshot(`"([a, b, ...c]) => {};"`);
});

test('arrow function with typed destructuring in arguments, nested array', () => {
  const result = testTransform(`([a, [b]]) => {};`);
  expect(result.babel).toMatchInlineSnapshot(`"([a, [b]]) => {};"`);
  expect(result.recast).toMatchInlineSnapshot(`"([a, [b]]) => {};"`);
});

test('arrow function with destructuring in arguments, array nested in object', () => {
  const result = testTransform(`({
  a,
  b: [b]
}) => {};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "({
      a,
      b: [b]
    }) => {};"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "({
      a,
      b: [b]
    }) => {};"
  `);
});

test('template expression indentation should not be changed by recast', () => {
  const result = testTransform(`
// Wrapped to avoid wasting time parsing this when almost no-one uses
// build-external-helpers.
const buildUmdWrapper = replacements => template\`
    (function (root, factory) {
    });
  \`(replacements);
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "// Wrapped to avoid wasting time parsing this when almost no-one uses
    // build-external-helpers.
    const buildUmdWrapper = replacements => template\`
        (function (root, factory) {
        });
      \`(replacements);"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "// Wrapped to avoid wasting time parsing this when almost no-one uses
    // build-external-helpers.
    const buildUmdWrapper = replacements => template\`
        (function (root, factory) {
        });
      \`(replacements);"
  `);
});
