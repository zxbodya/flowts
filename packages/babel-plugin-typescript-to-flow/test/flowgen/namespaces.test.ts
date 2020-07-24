import { testTransformDts } from '../transform';

xdescribe('should handle merging with other types', () => {
  describe('function', () => {
    test('interface', () => {
      const ts = `
declare function test(foo: number): string;
namespace test {
  export interface Foo {
    bar: number
  }
}
`;
      const result = testTransformDts(ts);

      expect(result.babel).toMatchInlineSnapshot(`
"declare var test: typeof npm$namespace$test;

declare var npm$namespace$test: {|
  (foo: number): string
|};
export interface test$Foo {
  bar: number;
}
"
`);
    });

    test('type', () => {
      const ts = `
declare function test(foo: number): string;
namespace test {
  export type Foo = {
    bar: number
  }
}
`;
      const result = testTransformDts(ts);

      expect(result.babel).toMatchInlineSnapshot(`
"declare var test: typeof npm$namespace$test;

declare var npm$namespace$test: {|
  (foo: number): string
|};
export type test$Foo = {
  bar: number,
  ...
};
"
`);
    });

    test('const', () => {
      const ts = `
declare function test(foo: number): string;
namespace test {
  export const ok: number
}
`;
      const result = testTransformDts(ts);

      expect(result.babel).toMatchInlineSnapshot(`
"declare var test: typeof npm$namespace$test;

declare var npm$namespace$test: {|
  (foo: number): string,

  ok: typeof test$ok
|};
declare export var test$ok: number;
"
`);
    });
  });

  test('class', () => {
    const ts = `
// TODO: implement class merging
declare class Album {
  label: Album.AlbumLabel;
}
namespace Album {
  export declare class AlbumLabel { }
}
`;
    const result = testTransformDts(ts);

    expect(result.babel).toMatchInlineSnapshot(`
"declare class Album {
  label: Album$AlbumLabel;
}
declare var Album: typeof npm$namespace$Album;

declare var npm$namespace$Album: {|
  AlbumLabel: typeof Album$AlbumLabel
|};
declare export class Album$AlbumLabel {}
"
`);
  });

  test('enum', () => {
    const ts = `
// TODO: implement enum merging
enum Color {
  red = 1,
  green = 2,
  blue = 4
}
namespace Color {
  export declare function mixColor(colorName: string): number;
}
`;
    const result = testTransformDts(ts);

    expect(result.babel).toMatchInlineSnapshot(`
"declare var Color: {|
  +red: 1, // 1
  +green: 2, // 2
  +blue: 4 // 4
|};
declare var Color: typeof npm$namespace$Color;

declare var npm$namespace$Color: {|
  mixColor: typeof Color$mixColor
|};
declare export function Color$mixColor(colorName: string): number;
"
`);
  });
});

xit('should handle namespaces', () => {
  const ts = `
namespace test {
  export const ok: number
}
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var test: typeof npm$namespace$test;

declare var npm$namespace$test: {|
  ok: typeof test$ok
|};
declare export var test$ok: number;
"
`);
});

xit('should handle namespace merging', () => {
  const ts = `
namespace test {
  export const ok: number
}
namespace test {
  export const error: string
}
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var test: typeof npm$namespace$test;

declare var npm$namespace$test: {|
  ok: typeof test$ok,
  error: typeof test$error
|};
declare export var test$ok: number;

declare export var test$error: string;
"
`);
});

xit('should handle namespace function merging', () => {
  const ts = `
namespace test {
  declare function test(err: number): void
}
namespace test {
  declare function test(response: string): string
}
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var test: typeof npm$namespace$test;

declare var npm$namespace$test: {|
  test: typeof test$test
|};
declare function test$test(err: number): void;

declare function test$test(response: string): string;
"
`);
});

xit('should handle exported interfaces and types', () => {
  const ts = `
namespace Example {
  export interface StoreModel<S> {}
}
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"export interface Example$StoreModel<S> {}
"
`);
});

xit('should handle nested namespaces', () => {
  const ts = `
import * as external from "external";

declare namespace E0 {
  type A = external.type;
  namespace U1 {
    declare interface S3 {
      a: string;
    }
  }
  namespace U1 {
    declare var e2: number;
    enum E2 {
      E = 1,
    }
    declare interface S3 {
      b: string;
    }
    namespace D1 {
      namespace S2 {
        declare interface S3 {
          b: string;
        }
        declare var n3: symbol;
        class N3 {}
      }
    }
    namespace DD1 {
      namespace S2 {
        declare interface S3 {
          e: number;
        }
      }
    }
  }
  namespace S1 {
    declare var m3: string;
  }
  declare var s1: string;
}
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"import * as external from \\"external\\";
declare var E0: typeof npm$namespace$E0;

declare var npm$namespace$E0: {|
  s1: typeof E0$s1,

  S1: typeof npm$namespace$E0$S1
|};
declare type E0$A = external.type;

declare var npm$namespace$E0$U1: {|
  e2: typeof E0$U1$e2,
  E2: typeof E0$U1$E2,

  D1: typeof npm$namespace$E0$U1$D1,
  DD1: typeof npm$namespace$E0$U1$DD1
|};
declare interface E0$U1$S3 {
  a: string;
  b: string;
}

declare var E0$U1$e2: number;

declare var E0$U1$E2: {|
  +E: 1 // 1
|};

declare var npm$namespace$E0$U1$D1: {|
  S2: typeof npm$namespace$E0$U1$D1$S2
|};

declare var npm$namespace$E0$U1$D1$S2: {|
  n3: typeof E0$U1$D1$S2$n3,

  N3: typeof E0$U1$D1$S2$N3
|};
declare interface E0$U1$D1$S2$S3 {
  b: string;
}

declare var E0$U1$D1$S2$n3: Symbol;

declare class E0$U1$D1$S2$N3 {}

declare interface E0$U1$DD1$S2$S3 {
  e: number;
}

declare var npm$namespace$E0$S1: {|
  m3: typeof E0$S1$m3
|};
declare var E0$S1$m3: string;

declare var E0$s1: string;
"
`);
});

xit('should handle qualified namespaces', () => {
  const ts = `
declare namespace A.B {
  interface S<A> {
    readonly d: A;
    b: number;
  }
  declare class D<S> {}
}

declare namespace A.B.C {
  declare class N<A> extends D<A> implements S<A> {
    a: string;
  }
}`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var A: typeof npm$namespace$A;

declare var npm$namespace$A: {|
  B: typeof npm$namespace$A$B
|};

declare var npm$namespace$A$B: {|
  D: typeof A$B$D,
  C: typeof npm$namespace$A$B$C
|};
declare interface A$B$S<A> {
  +d: A;
  b: number;
}

declare class A$B$D<S> {}

declare var npm$namespace$A$B$C: {|
  N: typeof A$B$C$N
|};
declare class A$B$C$N<A> mixins A$B$D<A>, A$B$S<A> {
  a: string;
}
"
`);
});

xit('should handle global augmentation', () => {
  const ts = `
declare global {
  interface Array<T> {}
}`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare module \\"global\\" {
  declare interface Array<T> {}
}
"
`);
});

xit('should handle import equals declaration', () => {
  const ts = `
import hello = A.B;
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var hello: typeof A.B;
"
`);
});
