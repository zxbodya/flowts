import { testTransform } from '../transform';

test('empty class', () => {
  const result = testTransform(`class C {}`);
  expect(result.babel).toMatchInlineSnapshot(`"class C {}"`);
  expect(result.recast).toMatchInlineSnapshot(`"class C {}"`);
});

test('Class constructors: void return type annotation', () => {
  const result = testTransform(`class C {
  constructor() {}

}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "class C {
      constructor() {}

    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "class C {
      constructor() {}

    }"
  `);
});

test('Extending class declaration types are transformed', () => {
  const result = testTransform(
    `class C extends React.Component<string | undefined | null, (string | boolean) | undefined | null> {}`
  );
  // todo: output can be smaller
  //  const flow = `class C extends React.Component<?string, ?(string | boolean)> {}`;
  expect(result.babel).toMatchInlineSnapshot(
    `"class C extends React.Component<string | void | null, (string | boolean) | void | null> {}"`
  );
  // expect(result.recast).toMatchInlineSnapshot();
});

test('Class declaration types are transformed', () => {
  const result = testTransform(
    `class C implements Something<string | undefined | null, (string | boolean) | undefined | null> {}`
  );
  // todo: output can be smaller
  //  const flow = `class C implements Something<?string, ?(string | boolean)> {}`;
  expect(result.babel).toMatchInlineSnapshot(
    `"class C implements Something<string | void | null, (string | boolean) | void | null> {}"`
  );
  // expect(result.recast).toMatchInlineSnapshot();
});

test('Class typings declaration types are transformed', () => {
  const result = testTransform(
    `class C<X> implements Something<X, string | undefined | null, (string | boolean) | undefined | null> {}`
  );
  // todo: output can be smaller
  //  const flow = `class C<X> implements Something<X, ?string, ?(string | boolean)> {}`;
  expect(result.babel).toMatchInlineSnapshot(
    `"class C<X> implements Something<X, string | void | null, (string | boolean) | void | null> {}"`
  );
  // expect(result.recast).toMatchInlineSnapshot();
});

test('ThisTypeAnnotation', () => {
  const result = testTransform(`class Foo {
  bar(): this {
    return this;
  }

}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "class Foo {
      bar(): this {
        return this;
      }

    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('ClassExpression', () => {
  const result = testTransform(`let a = class extends Another<Type> {};`);
  const flow = `let a = class extends Another<Type> {};`;
  expect(result.babel).toMatchInlineSnapshot(
    `"let a = class extends Another<Type> {};"`
  );
  // expect(result.recast).toMatchInlineSnapshot();
});

test('removes variance', () => {
  const result = testTransform(`export default class A implements B {
  readonly ctx: Context;
  hasLoaded: boolean;

  constructor() {}

}`);
  const flow = `
// @flow

export default class A implements B {
  +ctx: Context;
  hasLoaded: boolean;
  constructor() {}
}
`;
  expect(result.babel).toMatchInlineSnapshot(`
    "export default class A implements B {
      +ctx: Context;
      hasLoaded: boolean;

      constructor() {}

    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('class method parameters', () => {
  const result = testTransform(`class A {
  constructor() {}

  method(a: number, b?: number | null, c: number = 1): void {}

}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "class A {
      constructor() {}

      method(a: number, b?: number | null, c: number = 1): void {}

    }"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});
