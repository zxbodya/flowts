import { testTransform } from '../transform';

xtest('Object type alias: exact=true', () => {
  const result = testTransform(`type a = {
  a: T;
};`);
  const flow = `type a = {| a: T |};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('maybe function type', () => {
  const result = testTransform(`type a = {
  a: (() => void) | undefined | null;
};`);
  const flow = `type a = {
  a: ?()=>void
};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('preserves comments within typedefs', () => {
  const result = testTransform(`type Props = {
  children?: React.Node;
  // The vertical alignment of the content before it starts to scroll
  verticalAlignWithoutScroll?: "top" | "center";
};
`);
  const flow = `type Props = {
  children?: React.Node,
  // The vertical alignment of the content before it starts to scroll
  verticalAlignWithoutScroll?: "top" | "center"
};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('preserves generics above imports', () => {
  const result = testTransform(
    `export type UIOverlayType = React.Element<typeof Foo>;`
  );
  const flow = `export type UIOverlayType = React.Element<typeof Foo>;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('ObjectTypeCallProperty simple case', () => {
  const result = testTransform(`
type T = {
  (b: string, a: string): string;
};
`);
  const flow = `
type T = {
  (string, string): string
};
`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

test('Comment above type alias', () => {
  const result = testTransform(`
// comment
type T = A;
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "// comment
    type T = A;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "// comment
    type T = A;"
  `);
});

xtest('methods in object type', () => {
  const result = testTransform(`export type Cache = {
  get(key: string): Promise<unknown>;
};`);
  const flow = `export type Cache = {
  get(key: string): Promise<mixed>
};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('methods in object type', () => {
  const result = testTransform(`export type Cache = {
  a: ((args: string[]) => null | false | string) & (() => string);
};`);
  const flow = `export type Cache = {
  a: ((args: string[]) => null | false | string) & (() => string)
};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('iterable object type', () => {
  const result = testTransform(`type A = {
  [Symbol.iterator](): Iterator<string>;
};`);
  const flow = `type A = {
  @@iterator(): Iterator<string>
};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('alias to array of unions', () => {
  const result = testTransform(`type t = ("a" | "b")[];`);
  const flow = `type t = ("a" | "b")[];`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('alias to array of unions', () => {
  const result = testTransform(`type t = ("a" & "b")[];`);
  const flow = `type t = ("a" & "b")[];`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
