import { testTransform } from '../transform';

xtest('program flow comment single line', () => {
  const result = testTransform(`const a = 55;
export default a;`);
  const flow = `// @flow
const a = 55;
export default a;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('program flow comment block statement', () => {
  const result = testTransform(`const a = 55;
export default a;`);
  const flow = `/* @flow */
const a = 55;
export default a;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('program flow comment with license', () => {
  const result = testTransform(`// @license MIT
const a = 55;
export default a;`);
  const flow = `// @license MIT
/* @flow */
const a = 55;
export default a;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('helper types', () => {
  const result = testTransform(`
type $ObjMap<T extends {}, F extends (v: any) => any> = { [K in keyof T]: F extends (v: T[K]) => infer R ? R : never };
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
let j: $Call<A, B, C, D, E, F, G>;
`);
  const flow = `
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
`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('call helper type', () => {
  const result = testTransform(`type A = string | {
  new (...args: any): React.Component<any, any>;
} | any;
type B = {
  new (...args: any): {
    readonly scope: (a: TagsType) => void;
  };
};
type C = {
  new (...args: any): A;
};`);
  const flow = `
type A = string | Class<React.Component<*, *>> | any;
type B = Class<{
  +scope: TagsType => void,
}>;
type C = Class<A>;
`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
