import { testTransform } from '../transform';

xtest('declare function', () => {
  const result = testTransform(`declare function something(): boolean;
declare function something(something: boolean): string;
declare function something(a: string): null;`);
  const flow = `declare function something(): boolean
declare function something(something: boolean): string
declare function something(string): null`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('tsParenthesizedType for function types in unions', () => {
  const result = testTransform(
    `declare function A(create: {} | (() => void)): void;`
  );
  const flow = `declare function A(create: {} | () => void): void`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('predicate function declaration', () => {
  const result = testTransform(`declare function foo(x: unknown): boolean;`);
  const flow = `declare function foo(x: mixed): boolean %checks(x !== null)`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
