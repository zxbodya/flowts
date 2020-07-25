import { testTransform, testTransformDts } from '../transform';

test('declare class', () => {
  const result = testTransform(`declare class A<X, Y, Z> extends B<X<Y<Z>>> {
  static C: D<X, Y>;
  constructor(abc: boolean): A;
  E: boolean;
  F: X<Z> | undefined | null;
  g(): H;
  get getterX(): string;
  set setterY(a: boolean): number;
}`);
  const flow = `declare class A<X,Y,Z> extends B<X<Y<Z>>> {
  static C: D<X, Y>;
  constructor(abc: boolean): A;
  E: boolean;
  F: ?X<Z>;
  g(): H;
  get getterX(): string;
  set setterY(boolean): number;
}`;
  expect(result.babel).toMatchInlineSnapshot(`
    "declare class A<X, Y, Z> extends B<X<Y<Z>>> {
      static C: D<X, Y>,
      constructor(abc: boolean): A,
      E: boolean,
      F: X<Z> | void | null,
      g(): H,
      get getterX(): string,
      set setterY(a: boolean): number,
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('declare class', () => {
  const result = testTransform(`declare class A extends B implements C {
  static readonly C: D;
  readonly F: D;
}`);
  const flow = `declare class A extends B implements C {
  static +C: D;
  +F: D;
}`;
  expect(result.babel).toMatchInlineSnapshot(`
    "declare class A extends B implements C {
      static +C: D,
      +F: D,
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('declare class', () => {
  const result = testTransform(`declare class A extends B implements C {
  // 123
  static C: D;
  // 321
  F: D;
}`);
  const flow = `declare class A extends B implements C {
  // 123
  static C: D;
  // 321
  F: D;
}`;
  expect(result.babel).toMatchInlineSnapshot(`
    "declare class A extends B implements C {
      static C: D,
      F: D,
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('declare class with indexer property', () => {
  const result = testTransform(`declare class A {
  [k: number]: string;
}`);
  const flow = `declare class A {
  [k: number]: string
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

test('declare class with with generic method', () => {
  const result = testTransform(`declare class A {
  map<T>(fn: (node: this, index: number) => T): Array<T>;
}`);
  const flow = `declare class A {
  map<T>(fn: (node: this, index: number) => T): Array<T>;
}`;
  expect(result.babel).toMatchInlineSnapshot(`
    "declare class A {
      map<T>(fn: (node: this, index: number) => T): Array<T>
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('iterable class', () => {
  const result = testTransform(`declare class A {
  [Symbol.iterator](): Iterator<string>;
}`);
  const flow = `declare class A {
  @@iterator(): Iterator<string>;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('async iterable class', () => {
  const result = testTransform(`declare class A {
  [Symbol.asyncIterator](): Iterator<string>;
}`);
  const flow = `declare class A {
  @@asyncIterator(): Iterator<string>;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

test('member expression in super', () => {
  const result = testTransform(`declare class C extends React.Component<A, B> {
}`);
  expect(result.babel).toMatchInlineSnapshot(
    `"declare class C extends React.Component<A, B> {}"`
  );
  // expect(result.recast).toMatchInlineSnapshot();
});

test('declare class with methods', () => {
  const result = testTransform(`export declare class BrowserDebugEngine {
  private worker;
  private counter;

  constructor(worker?: any);

  debug({ stackIndex, stackInfo }: {
    stackIndex: any;
    stackInfo: any;
  }): string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare export class BrowserDebugEngine {
      worker: any,
      counter: any,
      constructor(worker?: any): any,
      debug(v0: {
        stackIndex: any,
        stackInfo: any,
      }): string,
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});
