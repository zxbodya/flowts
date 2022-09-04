import { testTransform } from '../transform';

test('Any type', () => {
  const result = testTransform(`let a: any;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: any;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: any;"`);
});

test('Array type', () => {
  const result = testTransform(`let a: Array<any>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: Array<any>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: Array<any>;"`);
});

test('Array type with shorthand syntax', () => {
  const result = testTransform(`let a: any[];`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: any[];"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: any[];"`);
});

test('Boolean keyword', () => {
  const result = testTransform(`let a: boolean;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: boolean;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: boolean;"`);
});

test('Boolean literal', () => {
  const result = testTransform(`let a: true;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: true;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: true;"`);
});

test('numerical literal', () => {
  const result = testTransform(`let a: 42;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: 42;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: 42;"`);
});

test('string literal', () => {
  const result = testTransform(`let a: "42";`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: "42";"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: "42";"`);
});

test('Mixed type', () => {
  const result = testTransform(`let a: mixed;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: unknown;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: unknown;"`);
});

test('Null literal', () => {
  const result = testTransform(`let a: null;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: null;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: null;"`);
});

test('Empty type', () => {
  const result = testTransform(`let a: empty;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: never;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: never;"`);
});

test('typeof keyword', () => {
  const result = testTransform(`let a: typeof A;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: typeof A;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: typeof A;"`);
});

test('Generic type', () => {
  const result = testTransform(`let a: X<T>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: X<T>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: X<T>;"`);
});

test('Utility generics: $Keys', () => {
  const result = testTransform(`let a: $Keys<X>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: keyof X;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: keyof X;"`);
});

test('Utility generics: $Keys with typeof', () => {
  const result = testTransform(`let a: $Keys<typeof X>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: keyof typeof X;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: keyof typeof X;"`);
});

test('Utility generics: $Values', () => {
  const result = testTransform(`let a: $Values<X>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: X[keyof X];"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: X[keyof X];"`);
});

test('Utility generics: $ReadOnly', () => {
  const result = testTransform(`let a: $ReadOnly<X>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: Readonly<X>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: Readonly<X>;"`);
});

test('Utility generics: $ReadOnlyArray', () => {
  const result = testTransform(`let a: $ReadOnlyArray<X>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: ReadonlyArray<X>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: ReadonlyArray<X>;"`);
});

test('Utility generics: $Exact', () => {
  const result = testTransform(`let a: $Exact<X>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: X;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: X;"`);
});

test('Utility generics: $Diff', () => {
  const result = testTransform(`let a: $Diff<X, Y>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: Omit<X, keyof Y>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: Omit<X, keyof Y>;"`);
});

test('Utility generics: $Rest', () => {
  const result = testTransform(`let a: $Rest<X, Y>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: Omit<X, keyof Y>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: Omit<X, keyof Y>;"`);
});

test('Utility generics: $Diff when keys from type literal can be computed on compile time', () => {
  const result = testTransform(
    `let a: $Diff<X, {a:number, 'b':B, c():void }>;`
  );
  expect(result.babel).toMatchInlineSnapshot(
    `"let a: Omit<X, "a" | "b" | "c">;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let a: Omit<X, "a" | "b" | "c">;"`
  );
});

test('Utility generics: $Diff when keys from type literal can not be computed on compile time', () => {
  const result = testTransform(`let a: $Diff<X, {[k:string]:B}>;`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: Omit<X, keyof {
      [k: string]: B;
    }>;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: Omit<X, keyof {
      [k: string]: B
    }>;"
  `);
});

test('Utility generics: $PropertyType', () => {
  const result = testTransform(`let a: $PropertyType<T, k>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: T[k];"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: T[k];"`);
});

test('Utility generics: $ElementType', () => {
  const result = testTransform(`let a: $ElementType<T, k>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: T[k];"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: T[k];"`);
});

test('Utility generics: $Shape', () => {
  const result = testTransform(`let a: $Shape<X>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: Partial<X>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: Partial<X>;"`);
});

test('Utility generics: $NonMaybeType', () => {
  const result = testTransform(`let a: $NonMaybeType<X>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: NonNullable<X>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: NonNullable<X>;"`);
});

test('Utility generics: $ReadOnlySet', () => {
  const result = testTransform(`let a: $ReadOnlySet<X>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: ReadonlySet<X>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: ReadonlySet<X>;"`);
});

test('Utility generics: $ReadOnlyMap', () => {
  const result = testTransform(`let a: $ReadOnlyMap<X>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: ReadonlyMap<X>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: ReadonlyMap<X>;"`);
});

test('Utility generics: $Exports', () => {
  const result = testTransform(`type A = $Exports<"react">;`);
  expect(result.babel).toMatchInlineSnapshot(`"type A = import("react");"`);
  expect(result.recast).toMatchInlineSnapshot(`"type A = import("react");"`);
});

test('Utility generics: $Exports inside of $PropertyType', () => {
  const result = testTransform(
    `type B = $PropertyType<$Exports<"react">, "ReactNode">`
  );
  expect(result.babel).toMatchInlineSnapshot(
    `"type B = import("react").ReactNode;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"type B = import("react").ReactNode;"`
  );
});

test('Utility generics: Class', () => {
  const result = testTransform(`let a: Class<X>;`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      new (...args: any): X;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: {
      new (...args: any): X
    };"
  `);
});

test('Object type: exact=true', () => {
  const result = testTransform(`let a: {| a: T |};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      a: T;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: {
      a: T
    };"
  `);
});

test('Intersection type', () => {
  const result = testTransform(`let a: {x: number} & {y: string};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      x: number;
    } & {
      y: string;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: {
      x: number
    } & {
      y: string
    };"
  `);
});

test('Type literal: indexer', () => {
  const result = testTransform(`let a: {
  [x:string]: number,
  [x:number]: boolean
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      [x: string]: number;
      [x: number]: boolean;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: {
      [x: string]: number
      [x: number]: boolean
    };"
  `);
});

test('Type literal: indexer without key name', () => {
  const result = testTransform(`let a: {
  [string]: number,
  [number]: boolean
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      [x: string]: number;
      [x: number]: boolean;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: {
      [x: string]: number
      [x: number]: boolean
    };"
  `);
});

test('Type literal: indexer to mapped type - skip indexer', () => {
  const result = testTransform(`let a: {
  [x:string]: number;
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      [x: string]: number;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: {
      [x: string]: number
    };"
  `);
});

test('Type literal: indexer to mapped type', () => {
  const result = testTransform(`let a: {
  [x:A]: number;
};`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: { [x in A]: number };"`);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: {
      [x in A]: number;
    };"
  `);
});

test('Type literal: type literal with variance', () => {
  const result = testTransform(`let a: { +b: string, -c:number };`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      readonly b: string;
      c: number;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: {
      readonly b: string
      c: number
    };"
  `);
});

test('Type literal: type literal with indexer with variance', () => {
  const result = testTransform(`let a: { +[x:string]: string };
let b: { -[x:string]: string };`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      readonly [x: string]: string;
    };
    let b: {
      [x: string]: string;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: {
      readonly [x: string]: string
    };
    let b: {
      [x: string]: string
    };"
  `);
});

test('Type literal: type literal with spread operator', () => {
  const result = testTransform(`let a: { b: string, ...T };`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      b: string;
    } & T;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: {
      b: string
    } & T;"
  `);
});

test('Type literal: deep type literal with spread operator', () => {
  const result = testTransform(`let a: { b: { c: T, ...U} };`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      b: {
        c: T;
      } & U;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: {
      b: {
        c: T
      } & U
    };"
  `);
});

test('Maybe type: variable declaration', () => {
  const result = testTransform(`let a: ?string;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"let a: string | undefined | null;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let a: string | undefined | null;"`
  );
});

test('Maybe type: type literal', () => {
  const result = testTransform(`let a: { x: ?string };`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      x: string | undefined | null;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: {
      x: string | undefined | null
    };"
  `);
});

test('Maybe type: type literal with optional key', () => {
  const result = testTransform(`let a: { x?: ?string };`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      x?: string | null;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "let a: {
      x?: string | null
    };"
  `);
});

test('Maybe type: required parameter in function declaration', () => {
  const result = testTransform(`function f(arg: ?string) {}`);
  expect(result.babel).toMatchInlineSnapshot(
    `"function f(arg?: string | null) {}"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"function f(arg?: string | null) {}"`
  );
});

test('Maybe type: generic type instantiation', () => {
  const result = testTransform(`let a: X<?T>;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"let a: X<T | undefined | null>;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let a: X<T | undefined | null>;"`
  );
});

test('Union type', () => {
  const result = testTransform(`let a: string | number | boolean;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"let a: string | number | boolean;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let a: string | number | boolean;"`
  );
});

test('Void literal', () => {
  const result = testTransform(`let a: void;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: void;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: void;"`);
});

test('Function type', () => {
  const result = testTransform(`function
test(): string { return 'test'; }`);
  expect(result.babel).toMatchInlineSnapshot(`
    "function test(): string {
      return 'test';
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(
    `"function test(): string { return 'test'; }"`
  );
});

test('Function type (param)', () => {
  const result = testTransform(
    `function
test(arg: string): string { return arg; }`
  );
  expect(result.babel).toMatchInlineSnapshot(`
    "function test(arg: string): string {
      return arg;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(
    `"function test(arg: string): string { return arg; }"`
  );
});

test('Function type (multi param)', () => {
  const result = testTransform(
    `function
test(arg1: string, arg2: number): string { return arg1; }`
  );
  expect(result.babel).toMatchInlineSnapshot(`
    "function test(arg1: string, arg2: number): string {
      return arg1;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(
    `"function test(arg1: string, arg2: number): string { return arg1; }"`
  );
});

test('Arrow Function type', () => {
  const result = testTransform(`let test: () => string;`);
  expect(result.babel).toMatchInlineSnapshot(`"let test: () => string;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let test: () => string;"`);
});

test('Arrow Function type (param)', () => {
  const result = testTransform(`let test: (a: number) => string;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: (a: number) => string;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: (a: number) => string;"`
  );
});

test('Arrow Function type (multi params)', () => {
  const result = testTransform(`let test: (a: number, b: string) => string;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: (a: number, b: string) => string;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: (a: number, b: string) => string;"`
  );
});

test('function type annotation with type parameters', () => {
  const result = testTransform(`let test: <T>(a: number) => T;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: <T>(a: number) => T;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: <T>(a: number) => T;"`
  );
});

test('maybe argument', () => {
  const result = testTransform(`let test: (a: ?number) => T;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: (a?: number | null) => T;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: (a?: number | null) => T;"`
  );
});

test('maybe argument with not null after it', () => {
  const result = testTransform(`let test: (a: ?number, b: number) => T;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: (a: number | undefined | null, b: number) => T;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: (a: number | undefined | null, b: number) => T;"`
  );
});

test('function maybe argument', () => {
  const result = testTransform(`let test: (a: ?(number=>number)) => T;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: (a?: ((a: number) => number) | null) => T;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: (a?: ((a: number) => number) | null) => T;"`
  );
});

test('maybe function type annotation', () => {
  const result = testTransform(`let test: ?(a: number) => T;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: ((a: number) => T) | undefined | null;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: ((a: number) => T) | undefined | null;"`
  );
});

test('Generic Function type', () => {
  const result = testTransform(
    `function test<T>(value: T): T { return value; }`
  );
  expect(result.babel).toMatchInlineSnapshot(`
    "function test<T>(value: T): T {
      return value;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(
    `"function test<T>(value: T): T { return value; }"`
  );
});

test('Function type (rest param)', () => {
  const result = testTransform(
    `function
test(value: number, ...arg2: Array<string>): number { return value; }`
  );
  expect(result.babel).toMatchInlineSnapshot(`
    "function test(value: number, ...arg2: Array<string>): number {
      return value;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(
    `"function test(value: number, ...arg2: Array<string>): number { return value; }"`
  );
});

test('Arrow Function type (rest param)', () => {
  const result = testTransform(
    `let test: (value: number, ...args: Array<string>) => number;`
  );
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: (value: number, ...args: Array<string>) => number;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: (value: number, ...args: Array<string>) => number;"`
  );
});

test('Qualified type', () => {
  const result = testTransform(`let a: A.B;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: A.B;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: A.B;"`);
});

test('recursively qualified type', () => {
  const result = testTransform(`import * as A from "a";
type B = A.B.C;`);
  expect(result.babel).toMatchInlineSnapshot(`
    "import * as A from "a";
    type B = A.B.C;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "import * as A from "a";
    type B = A.B.C;"
  `);
});

test('Tuple type', () => {
  const result = testTransform(`let a: [number, string, Array<boolean>];`);
  expect(result.babel).toMatchInlineSnapshot(
    `"let a: [number, string, Array<boolean>];"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let a: [number, string, Array<boolean>];"`
  );
});

test('Object type (alias to any)', () => {
  const result = testTransform(`let a: Object;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: any;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: any;"`);
});

test('preserves comments above imports', () => {
  const result = testTransform(`// not flow comment
import * as React from "react";`);
  expect(result.babel).toMatchInlineSnapshot(`
    "// not flow comment
    import * as React from "react";"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "// not flow comment
    import * as React from "react";"
  `);
});

test('with empty type parameters', () => {
  const result = testTransform(`let a: A<>;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: A;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: A;"`);
});

test('SymbolTypeAnnotation', () => {
  const result = testTransform(
    `const symbols: Array<symbol> = Object.getOwnPropertySymbols(node);`
  );
  expect(result.babel).toMatchInlineSnapshot(
    `"const symbols: Array<symbol> = Object.getOwnPropertySymbols(node);"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"const symbols: Array<symbol> = Object.getOwnPropertySymbols(node);"`
  );
});

describe('InterfaceTypeAnnotation', () => {
  test('simple', () => {
    const result = testTransform(
      `
// @flow

let start: interface {
  line: number,
  column: number,
};
    `
    );
    expect(result.babel).toMatchInlineSnapshot(`
      "let start: {
        line: number;
        column: number;
      };"
    `);
    expect(result.recast).toMatchInlineSnapshot(`
      "let start: {
        line: number
        column: number
      };"
    `);
  });

  test('simple', () => {
    const result = testTransform(
      `
// @flow

let start: interface extends B,C {
  line: number,
  column: number,
};
    `
    );
    expect(result.babel).toMatchInlineSnapshot(`
      "let start: {
        line: number;
        column: number;
      } & B & C;"
    `);
    expect(result.recast).toMatchInlineSnapshot(`
      "let start: {
        line: number
        column: number
      } & B & C;"
    `);
  });
});

test('function array type', () => {
  const result = testTransform(`let a: ((t2: T)=> T)[]`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: ((t2: T) => T)[];"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: ((t2: T) => T)[]"`);
});
