import { testTransform } from '../transform';

xtest('Any type', () => {
  const result = testTransform(`let a: any;`);
  const flow = `let a: any;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Array type', () => {
  const result = testTransform(`let a: Array<any>;`);
  const flow = `let a: Array<any>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Array type with shorthand syntax', () => {
  const result = testTransform(`let a: any[];`);
  const flow = `let a: any[];`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Boolean keyword', () => {
  const result = testTransform(`let a: boolean;`);
  const flow = `let a: boolean;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Boolean literal', () => {
  const result = testTransform(`let a: true;`);
  const flow = `let a: true;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('numerical literal', () => {
  const result = testTransform(`let a: 42;`);
  const flow = `let a: 42;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('string literal', () => {
  const result = testTransform(`let a: "42";`);
  const flow = `let a: "42";`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Mixed type', () => {
  const result = testTransform(`let a: unknown;`);
  const flow = `let a: mixed;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Null literal', () => {
  const result = testTransform(`let a: null;`);
  const flow = `let a: null;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Empty type', () => {
  const result = testTransform(`let a: never;`);
  const flow = `let a: empty;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('typeof keyword', () => {
  const result = testTransform(`let a: typeof A;`);
  const flow = `let a: typeof A;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Generic type', () => {
  const result = testTransform(`let a: X<T>;`);
  const flow = `let a: X<T>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $Keys', () => {
  const result = testTransform(`let a: keyof X;`);
  const flow = `let a: $Keys<X>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $Keys with typeof', () => {
  const result = testTransform(`let a: keyof typeof X;`);
  const flow = `let a: $Keys<typeof X>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $Values', () => {
  const result = testTransform(`let a: X[keyof X];`);
  const flow = `let a: $Values<X>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $ReadOnly', () => {
  const result = testTransform(`let a: Readonly<X>;`);
  const flow = `let a: $ReadOnly<X>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $ReadOnlyArray', () => {
  const result = testTransform(`let a: ReadonlyArray<X>;`);
  const flow = `let a: $ReadOnlyArray<X>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $Exact', () => {
  const result = testTransform(`let a: X;`);
  const flow = `let a: $Exact<X>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $Diff', () => {
  const result = testTransform(`let a: Omit<X, keyof Y>;`);
  const flow = `let a: $Diff<X, Y>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $Diff when keys from type literal can be computed on compile time', () => {
  const result = testTransform(`let a: Omit<X, "a" | "b" | "c">;`);
  const flow = `let a: $Diff<X, {a:number, 'b':B, c():void }>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $Diff when keys from type literal can not be computed on compile time', () => {
  const result = testTransform(`let a: Omit<X, keyof {
  [k: string]: B;
}>;`);
  const flow = `let a: $Diff<X, {[k:string]:B}>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $PropertyType', () => {
  const result = testTransform(`let a: T[k];`);
  const flow = `let a: $PropertyType<T, k>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $ElementType', () => {
  const result = testTransform(`let a: T[k];`);
  const flow = `let a: $ElementType<T, k>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $Shape', () => {
  const result = testTransform(`let a: Partial<X>;`);
  const flow = `let a: $Shape<X>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $NonMaybeType', () => {
  const result = testTransform(`let a: NonNullable<X>;`);
  const flow = `let a: $NonMaybeType<X>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $Exports', () => {
  const result = testTransform(`type A = import("react");`);
  const flow = `type A = $Exports<"react">;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: $Exports inside of $PropertyType', () => {
  const result = testTransform(`type B = import("react").ReactNode;`);
  const flow = `type B = $PropertyType<$Exports<"react">, "ReactNode">`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Utility generics: Class', () => {
  const result = testTransform(`let a: {
  new (...args: any): X;
};`);
  const flow = `let a: Class<X>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Object type: exact=true', () => {
  const result = testTransform(`let a: {
  a: T;
};`);
  const flow = `let a: {| a: T |};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Intersection type', () => {
  const result = testTransform(`let a: {
  x: number;
} & {
  y: string;
};`);
  const flow = `let a: {x: number} & {y: string};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Type literal: indexer', () => {
  const result = testTransform(`let a: {
  [x: string]: number;
  [x: number]: boolean;
};`);
  const flow = `let a: {
  [x:string]: number,
  [x:number]: boolean
};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Type literal: indexer without key name', () => {
  const result = testTransform(`let a: {
  [x: string]: number;
  [x: number]: boolean;
};`);
  const flow = `let a: {
  [string]: number,
  [number]: boolean
};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Type literal: indexer to mapped type - skip indexer', () => {
  const result = testTransform(`let a: {
  [x: string]: number;
};`);
  const flow = `let a: {
  [x:string]: number;
};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Type literal: indexer to mapped type', () => {
  const result = testTransform(`let a: { [x in A]: number };`);
  const flow = `let a: {
  [x:A]: number;
};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Type literal: type literal with variance', () => {
  const result = testTransform(`let a: {
  readonly b: string;
  c: number;
};`);
  const flow = `let a: { +b: string, -c:number };`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Type literal: type literal with indexer with variance', () => {
  const result = testTransform(`let a: {
  readonly [x: string]: string;
};
let b: {
  [x: string]: string;
};`);
  const flow = `let a: { +[x:string]: string };
let b: { -[x:string]: string };`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Type literal: type literal with spread operator', () => {
  const result = testTransform(`let a: {
  b: string;
} & T;`);
  const flow = `let a: { b: string, ...T };`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Type literal: deep type literal with spread operator', () => {
  const result = testTransform(`let a: {
  b: {
    c: T;
  } & U;
};`);
  const flow = `let a: { b: { c: T, ...U} };`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Maybe type: variable declaration', () => {
  const result = testTransform(`let a: string | undefined | null;`);
  const flow = `let a: ?string;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Maybe type: type literal', () => {
  const result = testTransform(`let a: {
  x: string | undefined | null;
};`);
  const flow = `let a: { x: ?string };`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Maybe type: type literal with optional key', () => {
  const result = testTransform(`let a: {
  x?: string | null;
};`);
  const flow = `let a: { x?: ?string };`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Maybe type: required parameter in function declaration', () => {
  const result = testTransform(`function f(arg?: string | null) {}`);
  const flow = `function f(arg: ?string) {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Maybe type: generic type instantiation', () => {
  const result = testTransform(`let a: X<T | undefined | null>;`);
  const flow = `let a: X<?T>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Union type', () => {
  const result = testTransform(`let a: string | number | boolean;`);
  const flow = `let a: string | number | boolean;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Void literal', () => {
  const result = testTransform(`let a: void;`);
  const flow = `let a: void;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Function type', () => {
  const result = testTransform(`function test(): string {
  return 'test';
}`);
  const flow = `function test(): string { return 'test'; }`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Function type (param)', () => {
  const result = testTransform(`function test(arg: string): string {
  return arg;
}`);
  const flow = `function test(arg: string): string { return arg; }`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Function type (multi param)', () => {
  const result = testTransform(`function test(arg1: string, arg2: number): string {
  return arg1;
}`);
  const flow = `function test(arg1: string, arg2: number): string { return arg1; }`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Arrow Function type', () => {
  const result = testTransform(`let test: () => string; `);
  const flow = `let test: () => string;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Arrow Function type (param)', () => {
  const result = testTransform(`let test: (a: number) => string;`);
  const flow = `let test: (a: number) => string;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Arrow Function type (multi params)', () => {
  const result = testTransform(`let test: (a: number, b: string) => string;`);
  const flow = `let test: (a: number, b: string) => string;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('function type annotation with type parameters', () => {
  const result = testTransform(`let test: <T>(a: number) => T;`);
  const flow = `let test: <T>(a: number) => T;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('maybe argument', () => {
  const result = testTransform(`let test: (a?: number | null) => T;`);
  const flow = `let test: (a: ?number) => T;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('maybe argument with not null after it', () => {
  const result = testTransform(
    `let test: (a: number | undefined | null, b: number) => T;`
  );
  const flow = `let test: (a: ?number, b: number) => T;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('function maybe argument', () => {
  const result = testTransform(
    `let test: (a?: ((a: number) => number) | null) => T;`
  );
  const flow = `let test: (a: ?(number=>number)) => T;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('maybe function type annotation', () => {
  const result = testTransform(
    `let test: ((a: number) => T) | undefined | null;`
  );
  const flow = `let test: ?(a: number) => T;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Generic Function type', () => {
  const result = testTransform(`function test<T>(value: T): T {
  return value;
}`);
  const flow = `function test<T>(value: T): T { return value; }`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Function type (rest param)', () => {
  const result = testTransform(`function test(value: number, ...arg2: Array<string>): number {
  return value;
}`);
  const flow = `function test(value: number, ...arg2: Array<string>): number { return value; }`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Arrow Function type (rest param)', () => {
  const result = testTransform(
    `let test: (value: number, ...args: Array<string>) => number;`
  );
  const flow = `let test: (value: number, ...args: Array<string>) => number;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Qualified type', () => {
  const result = testTransform(`let a: A.B;`);
  const flow = `let a: A.B;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('recursively qualified type', () => {
  const result = testTransform(`import * as A from "a";
type B = A.A.A;`);
  const flow = `import * as A from "a";
type B = A.A.A;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Tuple type', () => {
  const result = testTransform(`let a: [number, string, Array<boolean>];`);
  const flow = `let a: [number, string, Array<boolean>];`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Object type (alias to any)', () => {
  const result = testTransform(`let a: any;`);
  const flow = `let a: Object;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('preserves comments above imports', () => {
  const result = testTransform(`// not flow comment
import * as React from "react";
`);
  const flow = `// not flow comment
import * as React from "react";`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('with empty type parameters', () => {
  const result = testTransform(`let a: A;`);
  const flow = `let a: A<>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
