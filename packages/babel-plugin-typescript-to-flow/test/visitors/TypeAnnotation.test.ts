import { testTransform } from '../transform';

test('Any type', () => {
  const result = testTransform(`let a: any;`);
  const flow = `let a: any;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: any;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: any;"`);
});

test('Array type', () => {
  const result = testTransform(`let a: Array<any>;`);
  const flow = `let a: Array<any>;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: Array<any>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: Array<any>;"`);
});

test('Array type with shorthand syntax', () => {
  const result = testTransform(`let a: any[];`);
  const flow = `let a: any[];`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: any[];"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: any[];"`);
});

test('Boolean keyword', () => {
  const result = testTransform(`let a: boolean;`);
  const flow = `let a: boolean;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: boolean;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: boolean;"`);
});

test('Boolean literal', () => {
  const result = testTransform(`let a: true;`);
  const flow = `let a: true;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: true;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: true;"`);
});

test('numerical literal', () => {
  const result = testTransform(`let a: 42;`);
  const flow = `let a: 42;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: 42;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: 42;"`);
});

test('string literal', () => {
  const result = testTransform(`let a: "42";`);
  const flow = `let a: "42";`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: \\"42\\";"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: \\"42\\";"`);
});

test('Mixed type', () => {
  const result = testTransform(`let a: unknown;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: mixed;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: mixed;"`);
});

test('Null literal', () => {
  const result = testTransform(`let a: null;`);
  const flow = `let a: null;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: null;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: null;"`);
});

test('Empty type', () => {
  const result = testTransform(`let a: never;`);
  expect(result.babel).toMatchInlineSnapshot(`"let a: empty;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: empty;"`);
});

test('typeof keyword', () => {
  const result = testTransform(`let a: typeof A;`);
  const flow = `let a: typeof A;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: typeof A;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: typeof A;"`);
});

test('Generic type', () => {
  const result = testTransform(`let a: X<T>;`);
  const flow = `let a: X<T>;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: X<T>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: X<T>;"`);
});

test('Utility generics: $Keys', () => {
  const result = testTransform(`let a: keyof X;`);
  const flow = `let a: $Keys<X>;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: $Keys<X>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: $Keys<X>;"`);
});

test('Utility generics: $Keys with typeof', () => {
  const result = testTransform(`let a: keyof typeof X;`);
  const flow = `let a: $Keys<typeof X>;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: $Keys<typeof X>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: $Keys<typeof X>;"`);
});

test('Utility generics: $Values', () => {
  const result = testTransform(`let a: X[keyof X];`);
  const flow = `let a: $Values<X>;`;
  expect(result.babel).toMatchInlineSnapshot(
    `"let a: $ElementType<X, $Keys<X>>;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let a: $ElementType<X, $Keys<X>>;"`
  );
});

test('Utility generics: $ReadOnly', () => {
  const result = testTransform(`let a: Readonly<X>;`);
  const flow = `let a: $ReadOnly<X>;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: $ReadOnly<X>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: $ReadOnly<X>;"`);
});

test('Utility generics: $ReadOnlyArray', () => {
  const result = testTransform(`let a: ReadonlyArray<X>;`);
  const flow = `let a: $ReadOnlyArray<X>;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: $ReadOnlyArray<X>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: $ReadOnlyArray<X>;"`);
});

test('Utility generics: $PropertyType', () => {
  const result = testTransform(`let a: T[k];`);
  const flow = `let a: $PropertyType<T, k>;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: $ElementType<T, k>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: $ElementType<T, k>;"`);
});

test('Utility generics: $ElementType', () => {
  const result = testTransform(`let a: T[k];`);
  const flow = `let a: $ElementType<T, k>;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: $ElementType<T, k>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: $ElementType<T, k>;"`);
});

test('Utility generics: $Shape', () => {
  const result = testTransform(`let a: Partial<X>;`);
  const flow = `let a: $Shape<X>;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: $Shape<X>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: $Shape<X>;"`);
});

test('Utility generics: $NonMaybeType', () => {
  const result = testTransform(`let a: NonNullable<X>;`);
  const flow = `let a: $NonMaybeType<X>;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: $NonMaybeType<X>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: $NonMaybeType<X>;"`);
});

test('Utility generics: $Exports', () => {
  const result = testTransform(`type A = import("react");`);
  expect(result.babel).toMatchInlineSnapshot(
    `"type A = $Exports<\\"react\\">;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"type A = $Exports<\\"react\\">;"`
  );
});

test('Utility generics: $Exports inside of $PropertyType', () => {
  const result = testTransform(`type B = import("react").ReactNode;`);
  const flow = `type B = $PropertyType<$Exports<"react">, "ReactNode">`;
  expect(result.babel).toMatchInlineSnapshot(
    `"type B = $PropertyType<$Exports<\\"react\\">, \\"ReactNode\\">;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"type B = $PropertyType<$Exports<\\"react\\">, \\"ReactNode\\">;"`
  );
});

test('Maybe type: variable declaration', () => {
  const result = testTransform(`let a: string | undefined | null;`);
  const flow = `let a: ?string;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: string | void | null;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: string | void | null;"`);
});

test('Maybe type: required parameter in function declaration', () => {
  const result = testTransform(`function f(arg?: string | null) {}`);
  const flow = `function f(arg: ?string) {}`;
  expect(result.babel).toMatchInlineSnapshot(
    `"function f(arg?: string | null) {}"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"function f(arg?: string | null) {}"`
  );
});

test('Maybe type: generic type instantiation', () => {
  const result = testTransform(`let a: X<T | undefined | null>;`);
  const flow = `let a: X<?T>;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: X<T | void | null>;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: X<T | void | null>;"`);
});

test('Union type', () => {
  const result = testTransform(`let a: string | number | boolean;`);
  const flow = `let a: string | number | boolean;`;
  expect(result.babel).toMatchInlineSnapshot(
    `"let a: string | number | boolean;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let a: string | number | boolean;"`
  );
});

test('Void literal', () => {
  const result = testTransform(`let a: void;`);
  const flow = `let a: void;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: void;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: void;"`);
});

test('Function type', () => {
  const result = testTransform(`function test(): string {
  return 'test';
}`);
  const flow = `function test(): string { return 'test'; }`;
  expect(result.babel).toMatchInlineSnapshot(`
    "function test(): string {
      return 'test';
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "function test(): string {
      return 'test';
    }"
  `);
});

test('Function type (param)', () => {
  const result = testTransform(`function test(arg: string): string {
  return arg;
}`);
  const flow = `function test(arg: string): string { return arg; }`;
  expect(result.babel).toMatchInlineSnapshot(`
    "function test(arg: string): string {
      return arg;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "function test(arg: string): string {
      return arg;
    }"
  `);
});

test('Function type (multi param)', () => {
  const result =
    testTransform(`function test(arg1: string, arg2: number): string {
  return arg1;
}`);
  const flow = `function test(arg1: string, arg2: number): string { return arg1; }`;
  expect(result.babel).toMatchInlineSnapshot(`
    "function test(arg1: string, arg2: number): string {
      return arg1;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "function test(arg1: string, arg2: number): string {
      return arg1;
    }"
  `);
});

test('Arrow Function type', () => {
  const result = testTransform(`let test: () => string; `);
  const flow = `let test: () => string;`;
  expect(result.babel).toMatchInlineSnapshot(`"let test: () => string;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let test: () => string;"`);
});

test('Arrow Function type (param)', () => {
  const result = testTransform(`let test: (a: number) => string;`);
  const flow = `let test: (a: number) => string;`;
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: (a: number) => string;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: (a: number) => string;"`
  );
});

test('Arrow Function type (multi params)', () => {
  const result = testTransform(`let test: (a: number, b: string) => string;`);
  const flow = `let test: (a: number, b: string) => string;`;
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: (a: number, b: string) => string;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: (a: number, b: string) => string;"`
  );
});

test('function type annotation with type parameters', () => {
  const result = testTransform(`let test: <T>(a: number) => T;`);
  const flow = `let test: <T>(a: number) => T;`;
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: <T>(a: number) => T;"`
  );
  expect(result.recast).toMatchInlineSnapshot(`"let test: (a: number) => T;"`);
});

test('maybe argument', () => {
  const result = testTransform(`let test: (a?: number | null) => T;`);
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: (a?: number | null) => T;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: (a?: number | null) => T;"`
  );
});

test('maybe argument with not null after it', () => {
  const result = testTransform(
    `let test: (a: number | undefined | null, b: number) => T;`
  );
  const flow = `let test: (a: ?number, b: number) => T;`;
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: (a: number | void | null, b: number) => T;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: (a: number | void | null, b: number) => T;"`
  );
});

test('function maybe argument', () => {
  const result = testTransform(
    `let test: (a?: ((a: number) => number) | null) => T;`
  );
  const flow = `let test: (a: ?(number=>number)) => T;`;
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: (a?: ((a: number) => number) | null) => T;"`
  );
  //todo: recast bug
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: (a?: : (a: number) => number | null) => T;"`
  );
});

test('maybe function type annotation', () => {
  const result = testTransform(
    `let test: ((a: number) => T) | undefined | null;`
  );
  const flow = `let test: ?(a: number) => T;`;
  expect(result.babel).toMatchInlineSnapshot(
    `"let test: ((a: number) => T) | void | null;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let test: : (a: number) => T | void | null;"`
  );
});

test('Generic Function type', () => {
  const result = testTransform(`function test<T>(value: T): T {
  return value;
}`);
  const flow = `function test<T>(value: T): T { return value; }`;
  expect(result.babel).toMatchInlineSnapshot(`
    "function test<T>(value: T): T {
      return value;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "function test<T>(value: T): T {
      return value;
    }"
  `);
});

test('Function type (rest param)', () => {
  const result =
    testTransform(`function test(value: number, ...arg2: Array<string>): number {
  return value;
}`);
  const flow = `function test(value: number, ...arg2: Array<string>): number { return value; }`;
  expect(result.babel).toMatchInlineSnapshot(`
    "function test(value: number, ...arg2: Array<string>): number {
      return value;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "function test(value: number, ...arg2: Array<string>): number {
      return value;
    }"
  `);
});

test('Arrow Function type (rest param)', () => {
  const result = testTransform(
    `let test: (value: number, ...args: Array<string>) => number;`
  );
  const flow = `let test: (value: number, ...args: Array<string>) => number;`;
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
    "import * as A from \\"a\\";
    type B = A.B.C;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "import * as A from \\"a\\";
    type B = A.B.C;"
  `);
});

test('Tuple type', () => {
  const result = testTransform(`let a: [number, string, Array<boolean>];`);
  const flow = `let a: [number, string, Array<boolean>];`;
  expect(result.babel).toMatchInlineSnapshot(
    `"let a: [number, string, Array<boolean>];"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let a: [number, string, Array<boolean>];"`
  );
});

test('Object type (alias to any)', () => {
  const result = testTransform(`let a: any;`);
  const flow = `let a: Object;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: any;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: any;"`);
});

test('preserves comments above imports', () => {
  const result = testTransform(`// not flow comment
import * as React from "react";
`);
  const flow = `// not flow comment
import * as React from "react";`;
  expect(result.babel).toMatchInlineSnapshot(`
    "// not flow comment
    import * as React from \\"react\\";"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "// not flow comment
    import * as React from \\"react\\";"
  `);
});

test('with empty type parameters', () => {
  const result = testTransform(`let a: A;`);
  const flow = `let a: A<>;`;
  expect(result.babel).toMatchInlineSnapshot(`"let a: A;"`);
  expect(result.recast).toMatchInlineSnapshot(`"let a: A;"`);
});
