import { testTransform } from '../transform';

test('declare interface', () => {
  const result = testTransform(`declare interface A {
  id: string;
  type: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface A {
      id: string;
      type: string;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare interface A {
      id: string;
      type: string;
    }"
  `);
});

test('declare interface with call property', () => {
  const result = testTransform(`declare interface A {
  (): void,
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface A {
      (): void;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare interface A {
      (): void;
    }"
  `);
});

test('declare interface with indexer property', () => {
  const result = testTransform(`declare interface A {
  [k: number]: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface A {
      [k: number]: string;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare interface A {
      [k: number]: string;
    }"
  `);
});

test('declare interface with internal slot', () => {
  // todo: "[[call]](): T;" crashes babel
  const result = testTransform(`declare interface C {
  [[call]]: T;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface C {
      [call]: T;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "declare interface C {
      [call]: T;
    }"
  `);
});

test('comments', () => {
  const result = testTransform(`/**
 * bla bla bla
 */
declare interface A {
  // fields
  props: Props;
  // state
  state: State;
}
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "/**
     * bla bla bla
     */
    declare interface A {
      // fields
      props: Props;
      // state
      state: State;
    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "/**
     * bla bla bla
     */
    declare interface A {
      // fields
      props: Props;
      // state
      state: State;
    }"
  `);
});
