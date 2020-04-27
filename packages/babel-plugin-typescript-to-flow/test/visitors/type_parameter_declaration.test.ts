import { testTransform } from '../transform';

test('no constraints', () => {
  const result = testTransform(`type A<T> = T;`);
  const flow = `type A<T> = T;`;
  expect(result.babel).toMatchInlineSnapshot(`"type A<T> = T;"`);
  expect(result.recast).toMatchInlineSnapshot(`"type A<T> = T;"`);
});

test('with constraints', () => {
  const result = testTransform(`type A<T extends number> = T;`);
  const flow = `type A<T: number> = T;`;
  expect(result.babel).toMatchInlineSnapshot(`"type A<T: number> = T;"`);
  expect(result.recast).toMatchInlineSnapshot(`"type A<T: number> = T;"`);
});

test('with constraints having default', () => {
  const result = testTransform(`type A<T extends {} = R> = T;`);
  const flow = `type A<T: {} = R> = T;`;
  expect(result.babel).toMatchInlineSnapshot(`"type A<T: {} = R> = T;"`);
  expect(result.recast).toMatchInlineSnapshot(`"type A<T: {}=R> = T;"`);
});
