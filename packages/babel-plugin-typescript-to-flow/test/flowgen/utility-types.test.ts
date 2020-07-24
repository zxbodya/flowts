import { testTransformDts } from '../transform';

it('should handle utility types', () => {
  const ts = `
type A = Readonly<{a: number}>
type B = Partial<{a: number}>
type C = NonNullable<string | null>
type D = ReadonlyArray<string>
type E = ReturnType<() => string>
type F = Record<string, number>
type G = ReadonlySet<number>
type H = ReadonlyMap<string, number>
type A2<T> = Readonly<T>
type B2<T> = Partial<T>
type C2<T> = NonNullable<T>
type D2<T> = ReadonlyArray<T>
type E2<T> = ReturnType<() => T>
type F2<T, U> = Record<T, U>
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare type A = $ReadOnly<{
  a: number
}>;
declare type B = $Shape<{
  a: number
}>;
declare type C = $NonMaybeType<string | null>;
declare type D = $ReadOnlyArray<string>;
declare type E = $Call<<R>((...args: any[]) => R) => R, () => string>;
declare type F = {
  [key: string]: number
};
declare type G = $ReadOnlySet<number>;
declare type H = $ReadOnlyMap<string, number>;
declare type A2<T> = $ReadOnly<T>;
declare type B2<T> = $Shape<T>;
declare type C2<T> = $NonMaybeType<T>;
declare type D2<T> = $ReadOnlyArray<T>;
declare type E2<T> = $Call<<R>((...args: any[]) => R) => R, () => T>;
declare type F2<T, U> = {
  [key: T]: U
};"
`);
});

// todo:
xit('should not replace utility types which are type parameters', () => {
  const ts = `
type A1<Readonly> = Readonly
type B1<Partial> = Partial
type C1<NonNullable> = NonNullable
type D1<ReadonlyArray> = ReadonlyArray
type E1<ReturnType> = ReturnType
type F1<Record> = Record
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare type A1<Readonly> = Readonly;
declare type B1<Partial> = Partial;
declare type C1<NonNullable> = NonNullable;
declare type D1<ReadonlyArray> = ReadonlyArray;
declare type E1<ReturnType> = ReturnType;
declare type F1<Record> = Record;"
`);
});
