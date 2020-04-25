import { testTransform } from '../transform';

xtest('empty', () => {
  const result = testTransform(`function f() {}`);
  const flow = `function f() {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('return type', () => {
  const result = testTransform(`function f(): T {}`);
  const flow = `function f(): T {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('argument type', () => {
  const result = testTransform(`function f(a: T, b: R): T {}`);
  const flow = `function f(a: T, b: R): T {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('simple generic', () => {
  const result = testTransform(`function f<T>(v: T): T {}`);
  const flow = `function f<T>(v: T): T {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('optional argument', () => {
  const result = testTransform(`function f(arg?: string) {}`);
  const flow = `function f(arg?: string) {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('maybe argument', () => {
  const result = testTransform(`function f(arg?: string | null) {}`);
  const flow = `function f(arg: ?string) {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('optional maybe argument', () => {
  const result = testTransform(`function f(arg?: string | null) {}`);
  const flow = `function f(arg?: ?string) {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('rest parameters', () => {
  const result = testTransform(`function f(...args) {}`);
  const flow = `function f(...args) {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('function argument type', () => {
  const result = testTransform(`function f(a: () => void) {}`);
  const flow = `function f(a: () => void) {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('maybe function argument type', () => {
  const result = testTransform(`function f(a?: (() => void) | null) {}`);
  const flow = `function f(a: ?(() => void)) {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('maybe function argument type with pattern after it', () => {
  const result = testTransform(`function f(a: number | undefined | null, {
  b
}) {}`);
  const flow = `function f(a: ?number, { b }) {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('function with default param value', () => {
  const result = testTransform(`function a(c: string = "v") {}`);
  const flow = `function a(c?: string = "v") {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('function with optional parameters followed by default value', () => {
  const result = testTransform(
    `function a(a?: number, b?: number, c: number = 1) {}`
  );
  const flow = `function a(a?: number, b?: number, c: number = 1) {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('predicate function', () => {
  const result = testTransform(`function foo(x: unknown) {
  return typeof x === "string";
}`);
  const flow = `function foo(x: mixed): %checks {
  return typeof x === "string";
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('predicate function 2', () => {
  const result = testTransform(`function a(v: unknown): boolean {
  return typeof v === 'undefined' || v === null || v.length === 0;
}`);
  const flow = `function a(v: mixed): boolean %checks {
  return typeof v === 'undefined' || v === null || v.length === 0;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
