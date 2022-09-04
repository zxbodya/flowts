import { testTransform } from '../transform';

test('empty', () => {
  const result = testTransform(`function f() {}`);
  expect(result.babel).toMatchInlineSnapshot(`"function f() {}"`);
  expect(result.recast).toMatchInlineSnapshot(`"function f() {}"`);
});

test('return type', () => {
  const result = testTransform(`function f(): T {}`);
  expect(result.babel).toMatchInlineSnapshot(`"function f(): T {}"`);
  expect(result.recast).toMatchInlineSnapshot(`"function f(): T {}"`);
});

test('argument type', () => {
  const result = testTransform(`function f(a: T, b: R): T {}`);
  expect(result.babel).toMatchInlineSnapshot(`"function f(a: T, b: R): T {}"`);
  expect(result.recast).toMatchInlineSnapshot(`"function f(a: T, b: R): T {}"`);
});

test('simple generic', () => {
  const result = testTransform(`function f<T>(v: T): T {}`);
  expect(result.babel).toMatchInlineSnapshot(`"function f<T>(v: T): T {}"`);
  expect(result.recast).toMatchInlineSnapshot(`"function f<T>(v: T): T {}"`);
});

test('optional argument', () => {
  const result = testTransform(`function f(arg?: string) {}`);
  expect(result.babel).toMatchInlineSnapshot(`"function f(arg?: string) {}"`);
  expect(result.recast).toMatchInlineSnapshot(`"function f(arg?: string) {}"`);
});

test('maybe argument', () => {
  const result = testTransform(`function f(arg: ?string) {}`);
  expect(result.babel).toMatchInlineSnapshot(
    `"function f(arg?: string | null) {}"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"function f(arg?: string | null) {}"`
  );
});

test('optional maybe argument', () => {
  const result = testTransform(`function f(arg?: ?string) {}`);
  expect(result.babel).toMatchInlineSnapshot(
    `"function f(arg?: string | null) {}"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"function f(arg?: string | null) {}"`
  );
});

test('rest parameters', () => {
  const result = testTransform(`function f(...args) {}`);
  expect(result.babel).toMatchInlineSnapshot(`"function f(...args) {}"`);
  expect(result.recast).toMatchInlineSnapshot(`"function f(...args) {}"`);
});

test('function argument type', () => {
  const result = testTransform(`function f(a: () => void) {}`);
  expect(result.babel).toMatchInlineSnapshot(`"function f(a: () => void) {}"`);
  expect(result.recast).toMatchInlineSnapshot(`"function f(a: () => void) {}"`);
});

test('maybe function argument type', () => {
  const result = testTransform(`function f(a: ?(() => void)) {}`);
  expect(result.babel).toMatchInlineSnapshot(
    `"function f(a?: (() => void) | null) {}"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"function f(a?: (() => void) | null) {}"`
  );
});

test('maybe function argument type with pattern after it', () => {
  const result = testTransform(`function f(a: ?number, { b }) {}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "function f(a: number | undefined | null, {
      b
    }) {}"
  `);
  expect(result.recast).toMatchInlineSnapshot(
    `"function f(a: number | undefined | null, { b }) {}"`
  );
});

test('function with default param value', () => {
  const result = testTransform(`function a(c?: string = "v") {}`);
  expect(result.babel).toMatchInlineSnapshot(
    `"function a(c: string = "v") {}"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"function a(c: string = "v") {}"`
  );
});

test('function with optional parameters followed by default value', () => {
  const result = testTransform(
    `function a(a?: number, b?: number, c: number = 1) {}`
  );
  expect(result.babel).toMatchInlineSnapshot(
    `"function a(a?: number, b?: number, c: number = 1) {}"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"function a(a?: number, b?: number, c: number = 1) {}"`
  );
});

test('predicate function', () => {
  const result = testTransform(`function foo(x: mixed): %checks {
  return typeof x === "string";
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "function foo(x: unknown) {
      return typeof x === "string";
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "function foo(x: unknown) {
      return typeof x === "string";
    }"
  `);
});

test('predicate function 2', () => {
  const result = testTransform(`function a(v: mixed): boolean %checks {
  return typeof v === 'undefined' || v === null || v.length === 0;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "function a(v: unknown): boolean {
      return typeof v === 'undefined' || v === null || v.length === 0;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "function a(v: unknown): boolean {
      return typeof v === 'undefined' || v === null || v.length === 0;
    }"
  `);
});
