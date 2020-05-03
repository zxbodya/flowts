import { testTransform } from '../transform';

xit('should handle module', () => {
  const ts = `
declare module 'test' {
  declare export type Test = 'ok' | 'error'
  declare type Test2 = 'ok' | 'error'
  type Maybe<T> = {type: 'just', value: T} | {type: 'nothing'}
  export type Ref<T> = { current: T }

  export const ok: number
}
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare module \\"test\\" {
  declare export type Test = \\"ok\\" | \\"error\\";
  declare type Test2 = \\"ok\\" | \\"error\\";
  declare type Maybe<T> =
    | {
        type: \\"just\\",
        value: T,
        ...
      }
    | {
        type: \\"nothing\\",
        ...
      };
  declare export type Ref<T> = {
    current: T,
    ...
  };
  declare export var ok: number;
}
"
`);
});

xit('should handle module merging', () => {
  const ts = `
declare module 'test' {
  interface A {
    bar: string
  }
  export const ok: number
}
declare module 'test' {
  interface A {
    baz: string
  }
  export const error: string
}
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare module \\"test\\" {
  declare interface A {
    bar: string;
    baz: string;
  }
  declare export var ok: number;
  declare export var error: string;
}
"
`);
});

xit('should not merge distinct modules', () => {
  const ts = `
declare module 'A' {
  export interface A {
    foo: string;
  }
}
declare module 'B' {
  export interface A {
    baz: string;
  }
}
export interface A {
  bar: string
}
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare module \\"A\\" {
  declare export interface A {
    foo: string;
  }
}

declare module \\"B\\" {
  declare export interface A {
    baz: string;
  }
}

export interface A {
  bar: string;
}
"
`);
});

xit('should handle module function merging', () => {
  const ts = `
declare module 'test' {
  declare function test(err: number): void
}
declare module 'test' {
  declare function test(response: string): string
}
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare module \\"test\\" {
  declare function test(err: number): void;

  declare function test(response: string): string;
}
"
`);
});
