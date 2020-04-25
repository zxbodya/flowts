import { testTransform } from '../transform';

test('Object type alias: exact=true', () => {
  const result = testTransform(`type a = {| a: T |};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "type a = {
      a: T;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "type a = {
      a: T
    };"
  `);
});

test('maybe function type', () => {
  const result = testTransform(`type a = {
  a: ?()=>void
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "type a = {
      a: (() => void) | undefined | null;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "type a = {
      a: (() => void) | undefined | null
    };"
  `);
});

test('preserves comments within typedefs', () => {
  const result = testTransform(`type Props = {
  children?: React.Node,
  // The vertical alignment of the content before it starts to scroll
  verticalAlignWithoutScroll?: "top" | "center"
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "type Props = {
      children?: React.Node;
      // The vertical alignment of the content before it starts to scroll
      verticalAlignWithoutScroll?: \\"top\\" | \\"center\\";
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "type Props = {
      children?: React.Node,
      // The vertical alignment of the content before it starts to scroll
      verticalAlignWithoutScroll?: \\"top\\" | \\"center\\"
    };"
  `);
});

test('preserves generics above imports', () => {
  const result = testTransform(
    `export type UIOverlayType = React.Element<typeof Foo>;`
  );
  expect(result.babel).toMatchInlineSnapshot(
    `"export type UIOverlayType = React.Element<typeof Foo>;"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"export type UIOverlayType = React.Element<typeof Foo>;"`
  );
});

test('ObjectTypeCallProperty simple case', () => {
  const result = testTransform(`
type T = {
  (string, string): string
};
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "type T = {
      (b: string, a: string): string;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "type T = {
      (b: string, a: string): string
    };"
  `);
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
  get(key: string): Promise<mixed>
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "export type Cache = {
      get(key: string): Promise<unknown>;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "export type Cache = {
      get(key: string): Promise<unknown>
    };"
  `);
});

test('methods in object type', () => {
  const result = testTransform(`export type Cache = {
  a: ((args: string[]) => null | false | string) & (() => string)
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "export type Cache = {
      a: ((args: string[]) => null | false | string) & (() => string);
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "export type Cache = {
      a: ((args: string[]) => null | false | string) & (() => string)
    };"
  `);
});

test('iterable object type', () => {
  const result = testTransform(`type A = {
  @@iterator(): Iterator<string>
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "type A = {
      [Symbol.iterator](): Iterator<string>;
    };"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "type A = {
      [Symbol.iterator](): Iterator<string>
    };"
  `);
});

test('alias to array of unions', () => {
  const result = testTransform(`type t = ("a" | "b")[];`);
  expect(result.babel).toMatchInlineSnapshot(
    `"type t = (\\"a\\" | \\"b\\")[];"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"type t = (\\"a\\" | \\"b\\")[];"`
  );
});

test('alias to array of unions', () => {
  const result = testTransform(`type t = ("a" & "b")[];`);
  expect(result.babel).toMatchInlineSnapshot(
    `"type t = (\\"a\\" & \\"b\\")[];"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"type t = (\\"a\\" & \\"b\\")[];"`
  );
});
