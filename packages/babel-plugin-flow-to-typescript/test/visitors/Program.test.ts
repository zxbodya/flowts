import { testTransform } from '../transform';

test('program flow comment single line', () => {
  const result = testTransform(`// @flow
const a = 55;
export default a;`);
  expect(result.babel).toMatchInlineSnapshot(`
    "const a = 55;
    export default a;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "const a = 55;
    export default a;"
  `);
});

test('program flow strict comment single line', () => {
  const result = testTransform(`// @flow strict
const a = 55;
export default a;`);
  expect(result.babel).toMatchInlineSnapshot(`
    "const a = 55;
    export default a;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "const a = 55;
    export default a;"
  `);
});

test('program flow strict-local comment single line', () => {
  const result = testTransform(`// @flow strict-local
const a = 55;
export default a;`);
  expect(result.babel).toMatchInlineSnapshot(`
    "const a = 55;
    export default a;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "const a = 55;
    export default a;"
  `);
});

test('program flow comment block statement', () => {
  const result = testTransform(`/* @flow */
const a = 55;
export default a;`);
  expect(result.babel).toMatchInlineSnapshot(`
    "const a = 55;
    export default a;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "const a = 55;
    export default a;"
  `);
});

test('program flow strict comment block statement', () => {
  const result = testTransform(`/* @flow strict */
const a = 55;
export default a;`);
  expect(result.babel).toMatchInlineSnapshot(`
    "const a = 55;
    export default a;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "const a = 55;
    export default a;"
  `);
});

test('program flow strict-local comment block statement', () => {
  const result = testTransform(`/* @flow strict-local */
const a = 55;
export default a;`);
  expect(result.babel).toMatchInlineSnapshot(`
    "const a = 55;
    export default a;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "const a = 55;
    export default a;"
  `);
});

test('program flow multiline comment block statement', () => {
  const result = testTransform(`/*
  * Test
  * @flow
  */
const a = 55;
export default a;`);
  expect(result.babel).toMatchInlineSnapshot(`
"/*
   Test
  */
const a = 55;
export default a;"
`);
  expect(result.recast).toMatchInlineSnapshot(`
"/*
   Test
  */
const a = 55;
export default a;"
`);
});

test('program flow strict multiline comment block statement', () => {
  const result = testTransform(`/*
  * Test
  * @flow strict
  */
const a = 55;
export default a;`);
  expect(result.babel).toMatchInlineSnapshot(`
"/*
   Test
  */
const a = 55;
export default a;"
`);
  expect(result.recast).toMatchInlineSnapshot(`
"/*
   Test
  */
const a = 55;
export default a;"
`);
});

test('program flow strict-local multiline comment block statement', () => {
  const result = testTransform(`/*
  * Test
  * @flow strict-local
  */
const a = 55;
export default a;`);
  expect(result.babel).toMatchInlineSnapshot(`
"/*
   Test
  */
const a = 55;
export default a;"
`);
  expect(result.recast).toMatchInlineSnapshot(`
"/*
   Test
  */
const a = 55;
export default a;"
`);
});

test('program flow comment with license', () => {
  const result = testTransform(`// @license MIT
/* @flow */
const a = 55;
export default a;`);
  expect(result.babel).toMatchInlineSnapshot(`
    "// @license MIT
    const a = 55;
    export default a;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "// @license MIT
    const a = 55;
    export default a;"
  `);
});

test('helper types', () => {
  const result = testTransform(`
let a: $ObjMap<A,B>;
let b: $TupleMap<A,B>;
let c: $ObjMapi<A,B>;
let d: $Call<A>;
let e: $Call<A,B>;
let f: $Call<A,B,C>;
let g: $Call<A,B,C,D>;
let h: $Call<A,B,C,D,E>;
let i: $Call<A,B,C,D,E,F>;
let j: $Call<A,B,C,D,E,F,G>;
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "type $ObjMap<T extends {}, F extends (v: any) => any> = { [K in keyof T]: F extends (v: T[K]) => infer R ? R : never };
    type $TupleMap<T extends {}, F extends (v: any) => any> = { [K in keyof T]: F extends (v: T[K]) => infer R ? R : never };
    type $ObjMapi<T extends {}, F extends (k: any, v: any) => any> = { [K in keyof T]: F extends (k: K, v: T[K]) => infer R ? R : never };
    type $Call1<F extends (...args: any) => any, A> = F extends (a: A, ...args: any) => infer R ? R : never;
    type $Call2<F extends (...args: any) => any, A, B> = F extends (a: A, b: B, ...args: any) => infer R ? R : never;
    type $Call3<F extends (...args: any) => any, A, B, C> = F extends (a: A, b: B, c: C, ...args: any) => infer R ? R : never;
    type $Call4<F extends (...args: any) => any, A, B, C, D> = F extends (a: A, b: B, c: C, d: D, ...args: any) => infer R ? R : never;
    type $Call5<F extends (...args: any) => any, A, B, C, D, E> = F extends (a: A, b: B, c: C, d: D, d: E, ...args: any) => infer R ? R : never;
    let a: $ObjMap<A, B>;
    let b: $TupleMap<A, B>;
    let c: $ObjMapi<A, B>;
    let d: ReturnType<A>;
    let e: $Call1<A, B>;
    let f: $Call2<A, B, C>;
    let g: $Call3<A, B, C, D>;
    let h: $Call4<A, B, C, D, E>;
    let i: $Call5<A, B, C, D, E, F>;
    let j: $Call<A, B, C, D, E, F, G>;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "type $ObjMap<T extends {}, F extends (v: any) => any> = {
      [K in keyof T]: F extends (v: T[K]) => infer R ? R : never;
    };

    type $TupleMap<T extends {}, F extends (v: any) => any> = {
      [K in keyof T]: F extends (v: T[K]) => infer R ? R : never;
    };

    type $ObjMapi<T extends {}, F extends (k: any, v: any) => any> = {
      [K in keyof T]: F extends (k: K, v: T[K]) => infer R ? R : never;
    };

    type $Call1<F extends (...args: any) => any, A> = F extends (a: A, ...args: any) => infer R ? R : never;
    type $Call2<F extends (...args: any) => any, A, B> = F extends (a: A, b: B, ...args: any) => infer R ? R : never;
    type $Call3<F extends (...args: any) => any, A, B, C> = F extends (a: A, b: B, c: C, ...args: any) => infer R ? R : never;
    type $Call4<F extends (...args: any) => any, A, B, C, D> = F extends (a: A, b: B, c: C, d: D, ...args: any) => infer R ? R : never;
    type $Call5<F extends (...args: any) => any, A, B, C, D, E> = F extends (a: A, b: B, c: C, d: D, d: E, ...args: any) => infer R ? R : never;
    let a: $ObjMap<A, B>;
    let b: $TupleMap<A, B>;
    let c: $ObjMapi<A, B>;
    let d: ReturnType<A>;
    let e: $Call1<A, B>;
    let f: $Call2<A, B, C>;
    let g: $Call3<A, B, C, D>;
    let h: $Call4<A, B, C, D, E>;
    let i: $Call5<A, B, C, D, E, F>;
    let j: $Call<A, B, C, D, E, F, G>;"
  `);
});

test('call helper type', () => {
  const result = testTransform(`
type A = string | Class<React.Component<*, *>> | any;
type B = Class<{
  +scope: TagsType => void,
}>;
type C = Class<A>;
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "type A = string | {
      new (...args: any): React.Component<any, any>;
    } | any;
    type B = {
      new (...args: any): {
        readonly scope: (a: TagsType) => void;
      };
    };
    type C = {
      new (...args: any): A;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "type A = string | {
      new (...args: any): React.Component<any, any>
    } | any;

    type B = {
      new (...args: any): {
        readonly scope: (a: TagsType) => void
      }
    };

    type C = {
      new (...args: any): A
    };"
  `);
});

test('function overrides', () => {
  const result = testTransform(`
declare function didYouMean(suggestions: $ReadOnlyArray<string>): string;
declare function didYouMean(
  subMessage: string,
  suggestions: $ReadOnlyArray<string>,
): string;

function didYouMean(firstArg, secondArg?): string { }`);
  expect(result.babel).toMatchInlineSnapshot(`
    "function didYouMean(suggestions: ReadonlyArray<string>): string;
    function didYouMean(subMessage: string, suggestions: ReadonlyArray<string>): string;

    function didYouMean(firstArg, secondArg?): string {}"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "function didYouMean(suggestions: ReadonlyArray<string>): string
    function didYouMean(subMessage: string, suggestions: ReadonlyArray<string>): string

    function didYouMean(firstArg, secondArg?): string { }"
  `);
});

test('function overrides - default export', () => {
  const result = testTransform(`
declare function didYouMean(suggestions: $ReadOnlyArray<string>): string;
export default function didYouMean(firstArg, secondArg?): string { }`);
  expect(result.babel).toMatchInlineSnapshot(`
    "function didYouMean(suggestions: ReadonlyArray<string>): string;

    function didYouMean(firstArg, secondArg?): string {}

    export default didYouMean;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "function didYouMean(suggestions: ReadonlyArray<string>): string
    function didYouMean(firstArg, secondArg?): string { }
    export default didYouMean;"
  `);
});

test('function overrides - named export', () => {
  const result = testTransform(`
declare function didYouMean(suggestions: $ReadOnlyArray<string>): string;
export function didYouMean(firstArg, secondArg?): string { }`);
  expect(result.babel).toMatchInlineSnapshot(`
    "function didYouMean(suggestions: ReadonlyArray<string>): string;

    function didYouMean(firstArg, secondArg?): string {}

    export { didYouMean };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "function didYouMean(suggestions: ReadonlyArray<string>): string
    function didYouMean(firstArg, secondArg?): string { }
    export { didYouMean };"
  `);
});
test('function overrides - named export', () => {
  const result = testTransform(`
declare function didYouMean(suggestions: $ReadOnlyArray<string>): string;
export function didYouMean(firstArg, secondArg?): string { }`);
  expect(result.babel).toMatchInlineSnapshot(`
    "function didYouMean(suggestions: ReadonlyArray<string>): string;

    function didYouMean(firstArg, secondArg?): string {}

    export { didYouMean };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "function didYouMean(suggestions: ReadonlyArray<string>): string
    function didYouMean(firstArg, secondArg?): string { }
    export { didYouMean };"
  `);
});

test('function overrides - exports mix', () => {
  const result = testTransform(`
declare function didYouMean(suggestions: $ReadOnlyArray<string>): string;
declare export function didYouMean(
  subMessage: string,
  suggestions: $ReadOnlyArray<string>,
): string;

export function didYouMean(firstArg, secondArg?): string { }`);
  expect(result.babel).toMatchInlineSnapshot(`
    "function didYouMean(suggestions: ReadonlyArray<string>): string;
    function didYouMean(subMessage: string, suggestions: ReadonlyArray<string>): string;

    function didYouMean(firstArg, secondArg?): string {}

    export { didYouMean };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "function didYouMean(suggestions: ReadonlyArray<string>): string
    function didYouMean(subMessage: string, suggestions: ReadonlyArray<string>): string
    function didYouMean(firstArg, secondArg?): string { }
    export { didYouMean };"
  `);
});
