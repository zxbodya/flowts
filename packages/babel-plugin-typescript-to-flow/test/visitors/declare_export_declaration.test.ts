import { testTransform } from '../transform';

xtest('declare module with a bit of everything', () => {
  const result = testTransform(`declare module 'react' {
  export var a: number;
  export function isValidElement(element: any): boolean;
  export type ComponentType<P> = React$ComponentType<P>;
  let __default: {
    a: number;
  };
  export default __default;
}`);
  const flow = `declare module 'react' {
  declare export var a: number;
  declare export function isValidElement(element: any): boolean;
  declare export type ComponentType<P> = React$ComponentType<P>;

  declare export default {|
    a: number
  |}
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('export default', () => {
  const result = testTransform(`declare module 'react' {
  export default function isValidElement(element: any): boolean;
  export default class A {}
}`);
  const flow = `declare module 'react' {
  declare export default function isValidElement(element: any): boolean;
  declare export default class A {}
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('declare export class', () => {
  const result = testTransform(`declare module 'react' {
  export class ObservableQuery<T> extends Observable<ApolloQueryResult<T>> {}
}`);
  const flow = `declare module 'react' {
  declare export class ObservableQuery<T> extends Observable<ApolloQueryResult<T>> { }
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('declare export interface', () => {
  const result = testTransform(`declare module 'react' {
  export interface FetchMoreOptions {}
}`);
  const flow = `declare module 'react' {
  declare export interface FetchMoreOptions {}
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
