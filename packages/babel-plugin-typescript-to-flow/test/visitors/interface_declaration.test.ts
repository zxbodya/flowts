import { testTransform } from '../transform';

xtest('interface decl basic', () => {
  const result = testTransform(`interface Something {
  something: string;
}`);
  const flow = `interface Something {
  something: string;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('interface decl extend', () => {
  const result = testTransform(`interface Something extends Another {
  something: string;
}`);
  const flow = `interface Something extends Another {
  something: string;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('interface decl extend params', () => {
  const result = testTransform(`interface Something<A> extends Another<A, B> {
  something: string;
}`);
  const flow = `interface Something<A> extends Another<A, B> {
  something: string;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('interface decl implement', () => {
  const result = testTransform(`interface Something extends Another {
  something: string;
}`);
  const flow = `interface Something implements Another {
  something: string;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('interface decl implement params', () => {
  const result = testTransform(`interface Something<A> extends Another<A, B> {
  something: string;
}`);
  const flow = `interface Something<A> implements Another<A, B> {
  something: string;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('interface decl implement extend', () => {
  const result = testTransform(`interface Something extends What, Another {
  something: string;
}`);
  const flow = `interface Something extends What implements Another {
  something: string;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('interface decl implement extend params', () => {
  const result = testTransform(`interface Something<A> extends What<Yes>, Another<A, B> {
  something: string;
}`);
  const flow = `interface Something<A> extends What<Yes> implements Another<A, B> {
  something: string;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('interface decl method', () => {
  const result = testTransform(`interface Something<A> extends What<Yes>, Another<A, B> {
  something(): string;
}`);
  const flow = `interface Something<A> extends What<Yes> implements Another<A, B> {
  something(): string;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('interface with generic method', () => {
  const result = testTransform(`interface A {
  map<T>(fn: (node: this, index: number) => T): Array<T>;
}`);
  const flow = `interface A {
  map<T>(fn: (node: this, index: number) => T): Array<T>;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('iterable interface', () => {
  const result = testTransform(`interface A {
  [Symbol.iterator](): Iterator<string>;
}`);
  const flow = `interface A {
  @@iterator(): Iterator<string>;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('interface extending type specified by QualifiedTypeIdentifier', () => {
  const result = testTransform(`interface A extends A.B {}`);
  const flow = `interface A extends A.B {}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
