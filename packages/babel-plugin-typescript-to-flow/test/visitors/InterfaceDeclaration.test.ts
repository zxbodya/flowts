import { testTransform } from '../transform';

test('interface decl basic', () => {
  const result = testTransform(`interface Something {
  something: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something {
      something: string
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(
    `"interface Something { something: string }"`
  );
});

test('interface decl extend', () => {
  const result = testTransform(`interface Something extends Another {
  something: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something extends Another {
      something: string
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('interface decl extend params', () => {
  const result = testTransform(`interface Something<A> extends Another<A, B> {
  something: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something<A> extends Another<A, B> {
      something: string
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('interface extend few others', () => {
  const result = testTransform(`interface Something extends What, Another {
  something: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something extends What, Another {
      something: string
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('interface extend few others with params', () => {
  const result =
    testTransform(`interface Something<A> extends What<Yes>, Another<A, B> {
  something: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something<A> extends What<Yes>, Another<A, B> {
      something: string
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('interface decl method', () => {
  const result = testTransform(`interface Something {
  something(): string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something {
      something(): string
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('interface with generic method', () => {
  const result = testTransform(`interface A {
  map<T>(fn: (node: this, index: number) => T): Array<T>;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface A {
      map<T>(fn: (node: this, index: number) => T): Array<T>
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('iterable interface', () => {
  const result = testTransform(`interface A {
  [Symbol.iterator](): Iterator<string>;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface A {
      @@iterator(): Iterator<string>
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('interface extending type specified by QualifiedTypeIdentifier', () => {
  const result = testTransform(`interface A extends A.B {}`);
  expect(result.babel).toMatchInlineSnapshot(`"interface A extends A.B {}"`);
  // expect(result.recast).toMatchInlineSnapshot();
});
