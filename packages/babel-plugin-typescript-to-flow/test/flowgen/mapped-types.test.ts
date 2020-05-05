import { testTransform } from '../transform';

// todo:
xit('should handle mapped types', () => {
  const ts = `
type Ref<T> = {current: T | null}
type SourceUnion = 'a' | 'b' | 'c'
type SourceObject = {
  a: number,
  d: string
}
type MappedUnion = {
  [K in SourceUnion]: Ref<number>
}
type MappedObj = {
  [K in keyof SourceObject]: Ref<SourceObject[K]>
}
type ConstantKey = MappedObj["a"]
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare type Ref<T> = {
  current: T | null
};
declare type SourceUnion = \\"a\\" | \\"b\\" | \\"c\\";
declare type SourceObject = {
  a: number,
  d: string,
};
declare type MappedUnion = $ObjMapi<
  { [k: SourceUnion]: any },
  <K>(K) => Ref<number>
>;
declare type MappedObj = $ObjMapi<
  SourceObject,
  <K>(K) => Ref<$ElementType<SourceObject, K>>
>;
declare type ConstantKey = $PropertyType<MappedObj, \\"a\\">;
"
`);
});
