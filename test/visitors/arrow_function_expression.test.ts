import { pluginTester } from '../transform';

pluginTester({
  tests: [
    {
      title: 'empty',
      code: `const f = () => {};`,
      output: `const f = () => {};`,
    },
    {
      title: 'return type',
      code: `const f = (): T => {};`,
      output: `const f = (): T => {};`,
    },
    {
      title: 'argument type',
      code: `const f = (a: T, b: R): T => {};`,
      output: `const f = (a: T, b: R): T => {};`,
    },
    {
      title: 'simple generic',
      code: `const f = <T>(v: T): T => {};`,
      output: `const f = <T extends any>(v: T): T => {};`,
    },
    {
      title: 'optional argument',
      code: `const f = (arg?: string) => {};`,
      output: `const f = (arg?: string) => {};`,
    },
    {
      title: 'maybe argument',
      code: `const f = (arg: ?string) => {};`,
      output: `const f = (arg?: string | null) => {};`,
    },
    {
      title: 'optional maybe argument',
      code: `const f = (arg?: ?string) => {};`,
      output: `const f = (arg?: string | null) => {};`,
    },
    {
      title: 'rest parameters',
      code: `const f = (...args) => {};`,
      output: `const f = (...args) => {};`,
    },
    {
      title: 'arrow function with type parameters for JSX context',
      code: `const a = <T, R>(v: T) => v;`,
      output: `const a = <T extends any, R>(v: T) => v;`,
    },
    {
      title: 'arrow function with type parameters for JSX context',
      code: `export const a = <T>(
  a?: A<T>,
  b: B,
): ?T => {};`,
      output: `export const a = <T extends any>(a: A<T> | undefined | null, b: B): T | undefined | null => {};`,
    },
    {
      title: 'arrow predicate function',
      code: 'var f = (x: mixed): %checks => typeof x === "string";',
      output: 'var f = (x: unknown) => typeof x === "string";',
    },
    {
      title: 'arrow function returning object expression',
      code: `var f = () => ({
  a: 1
}: {});`,
      output: `var f = () => ({
  a: 1
} as {});`,
      recast: `var f = () => (({
  a: 1
} as {}));`,
    },
    {
      title: 'arrow function with destructuring in arguments, keeps type',
      code: `([a, b]: [A, B]) => {};`,
      output: `([a, b]: [A, B]) => {};`,
    },
    // todo: type information is removed, theoretically this can be fixed
    {
      title: 'arrow function with typed destructuring in arguments, array',
      code: `([ a: B, b: B ]) => {};`,
      output: `([a, b]) => {};`,
      recast: `([ a, b ]) => {};`,
    },
    {
      title:
        'arrow function with typed destructuring in arguments, array with rest',
      code: `([ a: B, b: B, ...c: C[] ]) => {};`,
      output: `([a, b, ...c]) => {};`,
      recast: `([ a, b, ...c ]) => {};`,
    },
    {
      title:
        'arrow function with typed destructuring in arguments, nested array',
      code: `([ a: B, [b: B] ]) => {};`,
      output: `([a, [b]]) => {};`,
      recast: `([ a, [b] ]) => {};`,
    },
    {
      title:
        'arrow function with typed destructuring in arguments, array nested in object',
      code: `({ a, b:[b: B] }) => {};`,
      output: `({
  a,
  b: [b]
}) => {};`,
      recast: `({ a, b:[b] }) => {};`,
    },
    {
      title: 'template expression indentation should not be changed by recast',
      code: `
// Wrapped to avoid wasting time parsing this when almost no-one uses
// build-external-helpers.
const buildUmdWrapper = replacements =>
  template\`
    (function (root, factory) {
    });
  \`(replacements);
`,
      output: `
// Wrapped to avoid wasting time parsing this when almost no-one uses
// build-external-helpers.
const buildUmdWrapper = replacements => template\`
    (function (root, factory) {
    });
  \`(replacements);
`,
      recast: `
// Wrapped to avoid wasting time parsing this when almost no-one uses
// build-external-helpers.
const buildUmdWrapper = replacements =>
  template\`
    (function (root, factory) {
    });
  \`(replacements);
`,
    },
  ],
});
