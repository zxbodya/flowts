import { testTransform } from '../transform';

test('interface decl basic', () => {
  const result = testTransform(`interface Something {
  something: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something {
      something: string;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "interface Something {
      something: string;
    }"
  `);
});

test('interface decl extend', () => {
  const result = testTransform(`interface Something extends Another {
  something: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something extends Another {
      something: string;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "interface Something extends Another {
      something: string;
    }"
  `);
});

test('interface decl extend params', () => {
  const result = testTransform(`interface Something<A> extends Another<A, B> {
  something: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something<A> extends Another<A, B> {
      something: string;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "interface Something<A> extends Another<A, B> {
      something: string;
    }"
  `);
});

test('interface decl implement', () => {
  const result = testTransform(`interface Something implements Another {
  something: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something extends Another {
      something: string;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "interface Something extends Another {
      something: string;
    }"
  `);
});

test('interface decl implement params', () => {
  const result =
    testTransform(`interface Something<A> implements Another<A, B> {
  something: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something<A> extends Another<A, B> {
      something: string;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "interface Something<A> extends Another<A, B> {
      something: string;
    }"
  `);
});

test('interface decl implement extend', () => {
  const result =
    testTransform(`interface Something extends What implements Another {
  something: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something extends What, Another {
      something: string;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "interface Something extends What, Another {
      something: string;
    }"
  `);
});

test('interface decl implement extend params', () => {
  const result =
    testTransform(`interface Something<A> extends What<Yes> implements Another<A, B> {
  something: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something<A> extends What<Yes>, Another<A, B> {
      something: string;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "interface Something<A> extends What<Yes>, Another<A, B> {
      something: string;
    }"
  `);
});

test('interface decl method', () => {
  const result =
    testTransform(`interface Something<A> extends What<Yes> implements Another<A, B> {
  something(): string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface Something<A> extends What<Yes>, Another<A, B> {
      something(): string;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "interface Something<A> extends What<Yes>, Another<A, B> {
      something(): string;
    }"
  `);
});

test('interface with generic method', () => {
  const result = testTransform(`interface A {
  map<T>(fn: (node: this, index: number) => T): Array<T>;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface A {
      map<T>(fn: (node: this, index: number) => T): Array<T>;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "interface A {
      map<T>(fn: (node: this, index: number) => T): Array<T>;
    }"
  `);
});

test('iterable interface', () => {
  const result = testTransform(`interface A {
  @@iterator(): Iterator<string>;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "interface A {
      [Symbol.iterator](): Iterator<string>;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "interface A {
      [Symbol.iterator](): Iterator<string>;
    }"
  `);
});

test('interface extending type specified by QualifiedTypeIdentifier', () => {
  const result = testTransform(`interface A extends A.B {}`);
  expect(result.babel).toMatchInlineSnapshot(`"interface A extends A.B {}"`);
  expect(result.recast).toMatchInlineSnapshot(`"interface A extends A.B {}"`);
});
