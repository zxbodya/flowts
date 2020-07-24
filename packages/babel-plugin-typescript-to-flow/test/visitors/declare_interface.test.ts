import { testTransform } from '../transform';

test('declare interface', () => {
  const result = testTransform(`declare interface A {
  id: string;
  type: string;
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface A {
      id: string,
      type: string,
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('declare interface with call property', () => {
  const result = testTransform(`declare interface A {
  (): void;
}`);
  const flow = `declare interface A {
  (): void,
}`;
  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface A {
      (): void
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('declare interface with indexer property', () => {
  const result = testTransform(`declare interface A {
  [k: number]: string;
}`);
  const flow = `declare interface A {
  [k: number]: string;
}`;
  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface A {
      [k: number]: string
    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('declare interface with internal slot', () => {
  const result = testTransform(`declare interface C {
  [foo]: T;
  [bar](): T;
}`);
  const flow = `declare interface C {
  [[foo]]: T;
  [[bar]](): T;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('comments', () => {
  const result = testTransform(`/**
 * bla bla bla
 */
declare interface A {
  // fields
  props: Props;
  // state
  state: State;
}`);
  const flow = `/**
 * bla bla bla
 */
declare interface A {
  // fields
  props: Props;
  // state
  state: State;
}
`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
