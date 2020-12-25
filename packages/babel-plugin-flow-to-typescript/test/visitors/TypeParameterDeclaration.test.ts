import { testTransform } from '../transform';

test('no constraints', () => {
  const result = testTransform(`type A<T> = T;`);
  expect(result.babel).toMatchInlineSnapshot(`"type A<T> = T;"`);
  expect(result.recast).toMatchInlineSnapshot(`"type A<T> = T;"`);
});

test('with constraints', () => {
  const result = testTransform(`type A<T: number> = T;`);
  expect(result.babel).toMatchInlineSnapshot(`"type A<T extends number> = T;"`);
  expect(result.recast).toMatchInlineSnapshot(
    `"type A<T extends number> = T;"`
  );
});

test('with constraints having default', () => {
  const result = testTransform(`type A<T: {} = R> = T;`);
  expect(result.babel).toMatchInlineSnapshot(`"type A<T extends {} = R> = T;"`);
  expect(result.recast).toMatchInlineSnapshot(
    `"type A<T extends {} = R> = T;"`
  );
});

test('with comments', () => {
  const result = testTransform(`type A<
/* 1 */
T: {} = R
/* 2 */
> = T;`);
  expect(result.babel).toMatchInlineSnapshot(`
    "type A<
    /* 1 */
    T extends {} = R
    /* 2 */
    > = T;"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "type A</* 1 */
    T extends {} = R
    /* 2 */> = T;"
  `);
});

test('with more comments', () => {
  const result = testTransform(
    `type A/*0*/</* 1 */T/* 2 */=/* 3 */F/* 4 */>/*5*/= T`
  );
  expect(result.babel).toMatchInlineSnapshot(`
    "type A
    /*0*/
    <
    /* 1 */
    T =
    /* 2 */

    /* 3 */
    F
    /* 4 */
    >
    /*5*/
    = T;"
  `);
  expect(result.recast).toMatchInlineSnapshot(
    `"type A/*0*/</* 1 */T = /* 2 *//* 3 */F/* 4 */>/*5*/ = T;"`
  );
});
