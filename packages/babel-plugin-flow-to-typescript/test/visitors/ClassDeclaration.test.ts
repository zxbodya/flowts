import { testTransform } from '../transform';

test('empty class', () => {
  const result = testTransform(`class C {}`);
  expect(result.babel).toMatchInlineSnapshot(`"class C {}"`);
  expect(result.recast).toMatchInlineSnapshot(`"class C {}"`);
});

test('Class constructors: void return type annotation', () => {
  const result = testTransform(`class C {
  constructor(): void {
  }
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "class C {
      constructor() {}

    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "class C {
      constructor() {
      }
    }"
  `);
});

test('Class constructors: No return type annotation', () => {
  const result = testTransform(`class C {
  constructor() {
  }
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "class C {
      constructor() {}

    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "class C {
      constructor() {
      }
    }"
  `);
});

test('Extending class declaration types are transformed', () => {
  const result = testTransform(
    `class C extends React.Component<?string, ?(string | boolean)> {}`
  );
  expect(result.babel).toMatchInlineSnapshot(
    `"class C extends React.Component<string | undefined | null, (string | boolean) | undefined | null> {}"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"class C extends React.Component<string | undefined | null, string | boolean | undefined | null> {}"`
  );
});

test('Class declaration types are transformed', () => {
  const result = testTransform(
    `class C implements Something<?string, ?(string | boolean)> {}`
  );
  expect(result.babel).toMatchInlineSnapshot(
    `"class C implements Something<string | undefined | null, (string | boolean) | undefined | null> {}"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"class C implements Something<string | undefined | null, string | boolean | undefined | null> {}"`
  );
});

test('Class typings declaration types are transformed', () => {
  const result = testTransform(
    `class C<X> implements Something<X, ?string, ?(string | boolean)> {}`
  );
  expect(result.babel).toMatchInlineSnapshot(
    `"class C<X> implements Something<X, string | undefined | null, (string | boolean) | undefined | null> {}"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"class C<X> implements Something<X, string | undefined | null, string | boolean | undefined | null> {}"`
  );
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
  expect(result.recast).toMatchInlineSnapshot(`
    "class Foo {
      bar(): this {
        return this;
      }

    }"
  `);
});

test('ClassExpression', () => {
  const result = testTransform(`let a = class extends Another<Type> {};`);
  expect(result.babel).toMatchInlineSnapshot(
    `"let a = class extends Another<Type> {};"`
  );
  expect(result.recast).toMatchInlineSnapshot(
    `"let a = class extends Another<Type> {};"`
  );
});

test('removes variance', () => {
  const result = testTransform(`
// @flow

export default class A implements B {
  +ctx: Context;
  hasLoaded: boolean;
  constructor() {}
}
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "export default class A implements B {
      readonly ctx: Context;
      hasLoaded: boolean;

      constructor() {}

    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "export default class A implements B {
      readonly ctx: Context;
      hasLoaded: boolean;
      constructor() {}
    }"
  `);
});

test('class method parameters', () => {
  const result = testTransform(`class A {
  constructor(): void{}
  method(a:number, b?:?number, c: number = 1): void{}
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "class A {
      constructor() {}

      method(a: number, b?: number | null, c: number = 1): void {}

    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "class A {
      constructor() {}
      method(a: number, b?: number | null, c: number = 1): void {}
    }"
  `);
});

test('class with declare field', () => {
  const result = testTransform(`class A {
  declare descriptor: string;
  constructor(): void{}
  method(a:number, b?:?number, c: number = 1): void{}
}`);
  expect(result.babel).toMatchInlineSnapshot(`
    "class A {
      declare descriptor: string;

      constructor() {}

      method(a: number, b?: number | null, c: number = 1): void {}

    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "class A {
      declare descriptor: string;
      constructor() {}
      method(a: number, b?: number | null, c: number = 1): void {}
    }"
  `);
});

test('getter/setter support in class declaration', () => {
  const result = testTransform(`
// @flow

export default class A {
  get a(): number { return 1; }
  set a(value: number) {}
  set b(value: number): number {}
  set c(value?: number) {}
}
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "export default class A {
      get a(): number {
        return 1;
      }

      set a(value: number) {}

      set b(value: number) {}

      set c(value: number | undefined | null) {}

    }"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "export default class A {
      get a(): number { return 1; }
      set a(value: number) {}
      set b(value: number) {}
      set c(value: number | undefined | null) {}
    }"
  `);
});

test('private properties and methods in class declaration', () => {
  const result = testTransform(`
// @flow

export default class A {
  get #a(): number {
    return 1;
  }
  set #a(value: number) {}
  set #b(value: number): number {}
  set #c(value?: number) {}
  #d: number;
  #s: ?string;
}
`);
  expect(result.babel).toMatchInlineSnapshot(`
"export default class A {
  get #a(): number {
    return 1;
  }

  set #a(value: number) {}

  set #b(value: number) {}

  set #c(value: number | undefined | null) {}

  #d: number;
  #s: string | undefined | null;
}"
`);
  expect(result.recast).toMatchInlineSnapshot(`
"export default class A {
  get #a(): number {
    return 1;
  }
  set #a(value: number) {}
  set #b(value: number) {}
  set #c(value: number | undefined | null) {}
  #d: number;
  #s: string | undefined | null;
}"
`);
});
