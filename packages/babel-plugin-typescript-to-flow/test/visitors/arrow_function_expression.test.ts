import { testTransform } from '../transform';

xtest('empty', () => {
  const result = testTransform(`const f = () => {};`);
  const flow = `const f = () => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('return type', () => {
  const result = testTransform(`const f = (): T => {};`);
  const flow = `const f = (): T => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('argument type', () => {
  const result = testTransform(`const f = (a: T, b: R): T => {};`);
  const flow = `const f = (a: T, b: R): T => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('simple generic', () => {
  const result = testTransform(`const f = <T extends any>(v: T): T => {};`);
  const flow = `const f = <T>(v: T): T => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('optional argument', () => {
  const result = testTransform(`const f = (arg?: string) => {};`);
  const flow = `const f = (arg?: string) => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('maybe argument', () => {
  const result = testTransform(`const f = (arg?: string | null) => {};`);
  const flow = `const f = (arg: ?string) => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('optional maybe argument', () => {
  const result = testTransform(`const f = (arg?: string | null) => {};`);
  const flow = `const f = (arg?: ?string) => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('rest parameters', () => {
  const result = testTransform(`const f = (...args) => {};`);
  const flow = `const f = (...args) => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('arrow function with type parameters for JSX context', () => {
  const result = testTransform(`const a = <T extends any, R>(v: T) => v;`);
  const flow = `const a = <T, R>(v: T) => v;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('arrow function with type parameters for JSX context', () => {
  const result = testTransform(
    `export const a = <T extends any>(a: A<T> | undefined | null, b: B): T | undefined | null => {};`
  );
  const flow = `export const a = <T>(
  a?: A<T>,
  b: B,
): ?T => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('arrow predicate function', () => {
  const result = testTransform(
    `var f = (x: unknown) => typeof x === "string";`
  );
  const flow = `var f = (x: mixed): %checks => typeof x === "string";`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('arrow function returning object expression', () => {
  const result = testTransform(`var f = () => ({
  a: 1
} as {});`);
  const flow = `var f = () => ({
  a: 1
}: {});`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('arrow function with destructuring in arguments, keeps type', () => {
  const result = testTransform(`([a, b]: [A, B]) => {};`);
  const flow = `([a, b]: [A, B]) => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('arrow function with typed destructuring in arguments, array', () => {
  const result = testTransform(`([a, b]) => {};`);
  const flow = `([ a: B, b: B ]) => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('arrow function with typed destructuring in arguments, array with rest', () => {
  const result = testTransform(`([a, b, ...c]) => {};`);
  const flow = `([ a: B, b: B, ...c: C[] ]) => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('arrow function with typed destructuring in arguments, nested array', () => {
  const result = testTransform(`([a, [b]]) => {};`);
  const flow = `([ a: B, [b: B] ]) => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('arrow function with typed destructuring in arguments, array nested in object', () => {
  const result = testTransform(`({
  a,
  b: [b]
}) => {};`);
  const flow = `({ a, b:[b: B] }) => {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('template expression indentation should not be changed by recast', () => {
  const result = testTransform(`
// Wrapped to avoid wasting time parsing this when almost no-one uses
// build-external-helpers.
const buildUmdWrapper = replacements => template\`
    (function (root, factory) {
    });
  \`(replacements);
`);
  const flow = `
// Wrapped to avoid wasting time parsing this when almost no-one uses
// build-external-helpers.
const buildUmdWrapper = replacements =>
  template\`
    (function (root, factory) {
    });
  \`(replacements);
`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
