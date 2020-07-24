import { testTransform } from '../transform';

test('maybe function type', () => {
  const result = testTransform(`type a = {
  a: (() => void) | undefined | null;
};`);
  //todo: output might be smaller
  //   const flow = `type a = {
  //   a: ?()=>void
  // };`;
  expect(result.babel).toMatchInlineSnapshot(`
    "type a = {
      a: (() => void) | void | null
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('preserves comments within typedefs', () => {
  const result = testTransform(`type Props = {
  children?: React.Node;
  // The vertical alignment of the content before it starts to scroll
  verticalAlignWithoutScroll?: "top" | "center";
};
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "type Props = {
      children?: React.Node,
      verticalAlignWithoutScroll?: \\"top\\" | \\"center\\",
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('preserves generics above imports', () => {
  const result = testTransform(
    `export type UIOverlayType = React.Element<typeof Foo>;`
  );
  expect(result.babel).toMatchInlineSnapshot(
    `"export type UIOverlayType = React.Element<typeof Foo>;"`
  );
  // expect(result.recast).toMatchInlineSnapshot();
});

test('ObjectTypeCallProperty simple case', () => {
  const result = testTransform(`
type T = {
  (b: string, a: string): string;
};
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "type T = {
      (b: string, a: string): string
    };"
  `);
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

test('methods in object type', () => {
  const result = testTransform(`export type Cache = {
  get(key: string): Promise<unknown>;
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "export type Cache = {
      get(key: string): Promise<mixed>
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('methods in object type', () => {
  const result = testTransform(`export type Cache = {
  a: ((args: string[]) => null | false | string) & (() => string);
};`);
  const flow = `export type Cache = {
  a: ((args: string[]) => null | false | string) & (() => string)
};`;
  expect(result.babel).toMatchInlineSnapshot(`
    "export type Cache = {
      a: ((args: string[]) => null | false | string) & (() => string)
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('iterable object type', () => {
  const result = testTransform(`type A = {
  [Symbol.iterator](): Iterator<string>;
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "type A = {
      @@iterator(): Iterator<string>
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('alias to array of unions', () => {
  const result = testTransform(`type t = ("a" | "b")[];`);
  expect(result.babel).toMatchInlineSnapshot(
    `"type t = (\\"a\\" | \\"b\\")[];"`
  );
  // expect(result.recast).toMatchInlineSnapshot();
});

test('alias to array of intersections', () => {
  const result = testTransform(`type t = ("a" & "b")[];`);
  const flow = `type t = ("a" & "b")[];`;
  expect(result.babel).toMatchInlineSnapshot(
    `"type t = (\\"a\\" & \\"b\\")[];"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"type t = \\"a\\" & \\"b\\"[];"`
  );
});

test('alias to object', () => {
  const result = testTransform(`type t = object`);
  expect(result.babel).toMatchInlineSnapshot(`"type t = {};"`);
  expect(result.recast).toMatchInlineSnapshot(`"type t = {};"`);
});
