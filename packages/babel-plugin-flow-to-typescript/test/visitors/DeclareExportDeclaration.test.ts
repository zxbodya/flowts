import { testTransform } from '../transform';

test('declare module with a bit of everything', () => {
  const result = testTransform(`declare module 'react' {
  declare export var a: number;
  declare export function isValidElement(element: any): boolean;
  declare export type ComponentType<P> = React$ComponentType<P>;

  declare export default {|
    a: number
  |}
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare module 'react' {
      export var a: number;
      export function isValidElement(element: any): boolean;
      export type ComponentType<P> = React$ComponentType<P>;
      let __default: {
        a: number;
      };
      export default __default;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare module 'react' {
      export var a: number;
      export function isValidElement(element: any): boolean;
      export type ComponentType<P> = React$ComponentType<P>;

      let __default: {
        a: number
      };

      export default __default;
    }"
  `);
});

test('declare export in module', () => {
  const result = testTransform(`
  declare export default string;
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare let __default: string;
    export default __default;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare let __default: string;
    export default __default;"
  `);
});

test('export default', () => {
  const result = testTransform(`declare module 'react' {
  declare export default function isValidElement(element: any): boolean;
  declare export default class A {}
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare module 'react' {
      export default function isValidElement(element: any): boolean;
      export default class A {}
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare module 'react' {
      export default function isValidElement(element: any): boolean;
      export default class A {}
    }"
  `);
});

test('declare export class', () => {
  const result = testTransform(`declare module 'react' {
  declare export class ObservableQuery<T> extends Observable<ApolloQueryResult<T>> { }
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare module 'react' {
      export class ObservableQuery<T> extends Observable<ApolloQueryResult<T>> {}
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare module 'react' {
      export class ObservableQuery<T> extends Observable<ApolloQueryResult<T>> {}
    }"
  `);
});

test('declare export interface', () => {
  const result = testTransform(`declare module 'react' {
  declare export interface FetchMoreOptions {}
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare module 'react' {
      export interface FetchMoreOptions {}
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare module 'react' {
      export interface FetchMoreOptions {}
    }"
  `);
});

test('declare export outside of module', () => {
  const result = testTransform(`// @flow

declare export var init: Promise<void>;
declare export function hashString(s: string): string;
declare export function hashBuffer(b: Buffer): string;
declare export class Hash {
  writeString(s: string): void;
  writeBuffer(b: Buffer): void;
  finish(): string;
}
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "export declare var init: Promise<void>;
    export declare function hashString(s: string): string;
    export declare function hashBuffer(b: Buffer): string;
    export declare class Hash {
      writeString(s: string): void;
      writeBuffer(b: Buffer): void;
      finish(): string;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "export declare var init: Promise<void>;
    export declare function hashString(s: string): string;
    export declare function hashBuffer(b: Buffer): string;

    export declare class Hash {
      writeString(s: string): void;
      writeBuffer(b: Buffer): void;
      finish(): string;
    }"
  `);
});
