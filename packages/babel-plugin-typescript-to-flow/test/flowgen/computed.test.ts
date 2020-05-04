import { testTransform } from '../transform';

it('should handle computed Symbol.iterator and Symbol.asyncIterator', () => {
  const ts = `
  type A = {
    [Symbol.asyncIterator]?(): any,
    [Symbol.iterator]?(): any,
    readonly [Symbol.asyncIterator]?: () => any,
    readonly [Symbol.iterator]?: () => any,
    [Symbol.asyncIterator](): any,
    [Symbol.iterator](): any,
    readonly [Symbol.asyncIterator]: () => any,
    readonly [Symbol.iterator]: () => any,
    [Symbol.asyncIterator]?: any,
    [Symbol.iterator]?: any,
    readonly [Symbol.asyncIterator]?: any,
    readonly [Symbol.iterator]?: any,
    [Symbol.asyncIterator]: any,
    [Symbol.iterator]: any,
    readonly [Symbol.asyncIterator]: any,
    readonly [Symbol.iterator]: any,
  }
  declare class B {
    [Symbol.asyncIterator]?: () => any;
    [Symbol.iterator]?: () => any;
    readonly [Symbol.asyncIterator]?: () => any;
    readonly [Symbol.iterator]?: () => any;
    [Symbol.asyncIterator]: () => any;
    [Symbol.iterator]: () => any;
    readonly [Symbol.asyncIterator]: () => any;
    readonly [Symbol.iterator]: () => any;
    [Symbol.asyncIterator]?: any;
    [Symbol.iterator]?: any;
    readonly [Symbol.asyncIterator]?: any;
    readonly [Symbol.iterator]?: any;
    [Symbol.asyncIterator]: any;
    [Symbol.iterator]: any;
    readonly [Symbol.asyncIterator]: any;
    readonly [Symbol.iterator]: any;
  }
  interface C {
    [Symbol.asyncIterator]?(): any,
    [Symbol.iterator]?(): any,
    readonly [Symbol.asyncIterator]?: () => any,
    readonly [Symbol.iterator]?: () => any,
    [Symbol.asyncIterator]: () => any,
    [Symbol.iterator]: () => any,
    readonly [Symbol.asyncIterator]: () => any,
    readonly [Symbol.iterator]: () => any,
    [Symbol.asyncIterator]?: any,
    [Symbol.iterator]?: any,
    readonly [Symbol.asyncIterator]?: any,
    readonly [Symbol.iterator]?: any,
    [Symbol.asyncIterator]: any,
    [Symbol.iterator]: any,
    readonly [Symbol.asyncIterator]: any,
    readonly [Symbol.iterator]: any,
  }
`;

  const result = testTransform(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare type A = {
      @@asyncIterator?(): any,
      @@iterator?(): any,
      +@@asyncIterator?: () => any,
      +@@iterator?: () => any,
      @@asyncIterator(): any,
      @@iterator(): any,
      +@@asyncIterator: () => any,
      +@@iterator: () => any,
      @@asyncIterator?: any,
      @@iterator?: any,
      +@@asyncIterator?: any,
      +@@iterator?: any,
      @@asyncIterator: any,
      @@iterator: any,
      +@@asyncIterator: any,
      +@@iterator: any,
    };
    declare class B {
      @@asyncIterator?: () => any,
      @@iterator?: () => any,
      +@@asyncIterator?: () => any,
      +@@iterator?: () => any,
      @@asyncIterator: () => any,
      @@iterator: () => any,
      +@@asyncIterator: () => any,
      +@@iterator: () => any,
      @@asyncIterator?: any,
      @@iterator?: any,
      +@@asyncIterator?: any,
      +@@iterator?: any,
      @@asyncIterator: any,
      @@iterator: any,
      +@@asyncIterator: any,
      +@@iterator: any,
    }
    declare interface C {
      @@asyncIterator?(): any,
      @@iterator?(): any,
      +@@asyncIterator?: () => any,
      +@@iterator?: () => any,
      @@asyncIterator: () => any,
      @@iterator: () => any,
      +@@asyncIterator: () => any,
      +@@iterator: () => any,
      @@asyncIterator?: any,
      @@iterator?: any,
      +@@asyncIterator?: any,
      +@@iterator?: any,
      @@asyncIterator: any,
      @@iterator: any,
      +@@asyncIterator: any,
      +@@iterator: any,
    }"
  `);
});

it('should handle string literals', () => {
  const ts = `
  type A = {
    ["foo"]?(): any;
    readonly ["foo"]?: () => any;
    ["foo"](): any;
    readonly ["foo"]: () => any;
    ["foo"]?: any;
    readonly ["foo"]?: any;
    ["foo"]: any;
    readonly ["foo"]: any;
  }
  declare class B {
    ["foo"]?(): any;
    readonly ["foo"]?: ()=> any;
    ["foo"](): any;
    readonly ["foo"]: ()=> any;
    ["foo"]?: any;
    readonly ["foo"]?: any;
    ["foo"]: any;
    readonly ["foo"]: any;
  }
  interface C {
    ["foo"]?(): any;
    readonly ["foo"]?: () => any;
    ["foo"](): any;
    readonly ["foo"]: ()=> any;
    ["foo"]?: any;
    readonly ["foo"]?: any;
    ["foo"]: any;
    readonly ["foo"]: any;
  }
`;

  const result = testTransform(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare type A = {
      \\"foo\\"?(): any,
      +\\"foo\\"?: () => any,
      \\"foo\\"(): any,
      +\\"foo\\": () => any,
      \\"foo\\"?: any,
      +\\"foo\\"?: any,
      \\"foo\\": any,
      +\\"foo\\": any,
    };
    declare class B {
      \\"foo\\"(): any,
      +\\"foo\\"?: () => any,
      \\"foo\\"(): any,
      +\\"foo\\": () => any,
      \\"foo\\"?: any,
      +\\"foo\\"?: any,
      \\"foo\\": any,
      +\\"foo\\": any,
    }
    declare interface C {
      \\"foo\\"?(): any,
      +\\"foo\\"?: () => any,
      \\"foo\\"(): any,
      +\\"foo\\": () => any,
      \\"foo\\"?: any,
      +\\"foo\\"?: any,
      \\"foo\\": any,
      +\\"foo\\": any,
    }"
  `);
});

xit('should approximate unsupported keys', () => {
  const ts = `
  type A = {
    [Foo]?(): any,
    readonly [Foo]?(): any,
    [Foo](): any,
    readonly [Foo](): any,
    [Foo]?: any,
    readonly [Foo]?: any,
    [Foo]: any,
    readonly [Foo]: any,
  }
  declare class B {
    [Foo]?(): any,
    readonly [Foo]?(): any,
    [Foo](): any,
    readonly [Foo](): any,
    [Foo]?: any,
    readonly [Foo]?: any,
    [Foo]: any,
    readonly [Foo]: any,
  }
  interface C {
    [Foo]?(): any,
    readonly [Foo]?(): any,
    [Foo](): any,
    readonly [Foo](): any,
    [Foo]?: any,
    readonly [Foo]?: any,
    [Foo]: any,
    readonly [Foo]: any,
  }
`;

  const result = testTransform(ts);

  expect(result.babel).toMatchInlineSnapshot(`
"declare type A = {
  [typeof Foo]: (() => any) | void,
  +[typeof Foo]: (() => any) | void,
  [typeof Foo]: () => any,
  +[typeof Foo]: () => any,
  [typeof Foo]: any | void,
  +[typeof Foo]: any | void,
  [typeof Foo]: any,
  +[typeof Foo]: any,
  ...
};
declare class B {
  [typeof Foo]: (() => any) | void;
  +[typeof Foo]: (() => any) | void;
  [typeof Foo]: () => any;
  +[typeof Foo]: () => any;
  [typeof Foo]: any | void;
  +[typeof Foo]: any | void;
  [typeof Foo]: any;
  +[typeof Foo]: any;
}
declare interface C {
  [typeof Foo]: (() => any) | void;
  +[typeof Foo]: (() => any) | void;
  [typeof Foo]: () => any;
  +[typeof Foo]: () => any;
  [typeof Foo]: any | void;
  +[typeof Foo]: any | void;
  [typeof Foo]: any;
  +[typeof Foo]: any;
}
"
`);
});
