import { testTransform } from '../transform';

xtest('empty class', () => {
  const result = testTransform(`class C {}`);
  const flow = `class C {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Class constructors: void return type annotation', () => {
  const result = testTransform(`class C {
  constructor() {}

}`);
  const flow = `class C {
  constructor(): void {
  }
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Class constructors: No return type annotation', () => {
  const result = testTransform(`class C {
  constructor() {}

}`);
  const flow = `class C {
  constructor() {
  }
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Extending class declaration types are transformed', () => {
  const result = testTransform(
    `class C extends React.Component<string | undefined | null, (string | boolean) | undefined | null> {}`
  );
  const flow = `class C extends React.Component<?string, ?(string | boolean)> {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Class declaration types are transformed', () => {
  const result = testTransform(
    `class C implements Something<string | undefined | null, (string | boolean) | undefined | null> {}`
  );
  const flow = `class C implements Something<?string, ?(string | boolean)> {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Class typings declaration types are transformed', () => {
  const result = testTransform(
    `class C<X> implements Something<X, string | undefined | null, (string | boolean) | undefined | null> {}`
  );
  const flow = `class C<X> implements Something<X, ?string, ?(string | boolean)> {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('ThisTypeAnnotation', () => {
  const result = testTransform(`class Foo {
  bar(): this {
    return this;
  }

}`);
  const flow = `class Foo {
  bar(): this {
    return this;
  }

}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('ClassExpression', () => {
  const result = testTransform(`let a = class extends Another<Type> {};`);
  const flow = `let a = class extends Another<Type> {};`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('removes variance', () => {
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
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('class method parameters', () => {
  const result = testTransform(`class A {
  constructor() {}

  method(a: number, b?: number | null, c: number = 1): void {}

}`);
  const flow = `class A {
  constructor(): void{}
  method(a:number, b?:?number, c: number = 1): void{}
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
