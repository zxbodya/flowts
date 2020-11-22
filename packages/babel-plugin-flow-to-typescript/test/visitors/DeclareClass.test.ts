import { testTransform } from '../transform';

test('declare class', () => {
  const result = testTransform(`declare class A<X,Y,Z> extends B<X<Y<Z>>> {
  static C: D<X, Y>;
  constructor(abc: boolean): A;
  E: boolean;
  F: ?X<Z>;
  g(): H;
  get getterX(): string;
  set setterY(boolean): number;
  set setterZ(val?:boolean): boolean;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare class A<X, Y, Z> extends B<X<Y<Z>>> {
      static C: D<X, Y>;
      constructor(abc: boolean): A;
      E: boolean;
      F: X<Z> | undefined | null;
      g(): H;
      get getterX(): string;
      set setterY(a: boolean);
      set setterZ(val?: boolean);
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare class A<X, Y, Z> extends B<X<Y<Z>>> {
      static C: D<X, Y>;
      constructor(abc: boolean): A;
      E: boolean;
      F: X<Z> | undefined | null;
      g(): H;
      get getterX(): string;
      set setterY(a: boolean);
      set setterZ(val?: boolean);
    }"
  `);
});

test('declare class', () => {
  const result = testTransform(`declare class A extends B implements C {
  static +C: D;
  +F: D;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare class A extends B implements C {
      static readonly C: D;
      readonly F: D;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare class A extends B implements C {
      static readonly C: D;
      readonly F: D;
    }"
  `);
});

test('declare class', () => {
  const result = testTransform(`declare class A extends B implements C {
  // 123
  static C: D;
  // 321
  F: D;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare class A extends B implements C {
      // 123
      static C: D;
      // 321
      F: D;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare class A extends B implements C {
      // 123
      static C: D;
      // 321
      F: D;
    }"
  `);
});

test('declare class with indexer property', () => {
  const result = testTransform(`declare class A {
  [k: number]: string
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare class A {
      [k: number]: string;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare class A {
      [k: number]: string
    }"
  `);
});

test('declare class with with generic method', () => {
  const result = testTransform(`declare class A {
  map<T>(fn: (node: this, index: number) => T): Array<T>;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare class A {
      map<T>(fn: (node: this, index: number) => T): Array<T>;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare class A {
      map<T>(fn: (node: this, index: number) => T): Array<T>;
    }"
  `);
});

test('iterable class', () => {
  const result = testTransform(`declare class A {
  @@iterator(): Iterator<string>;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare class A {
      [Symbol.iterator](): Iterator<string>;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare class A {
      [Symbol.iterator](): Iterator<string>;
    }"
  `);
});

test('async iterable class', () => {
  const result = testTransform(`declare class A {
  @@asyncIterator(): Iterator<string>;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare class A {
      [Symbol.asyncIterator](): Iterator<string>;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare class A {
      [Symbol.asyncIterator](): Iterator<string>;
    }"
  `);
});
