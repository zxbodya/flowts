import { testTransform } from '../transform';

xtest('no constraints', () => {
  const result = testTransform(`type A<T> = T;`);
  const flow = `type A<T> = T;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('with constraints', () => {
  const result = testTransform(`type A<T extends number> = T;`);
  const flow = `type A<T: number> = T;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('with constraints having default', () => {
  const result = testTransform(`type A<T extends {} = R> = T;`);
  const flow = `type A<T: {} = R> = T;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('with comments', () => {
  const result = testTransform(`type A<
/* 1 */
T extends {} = R
/* 2 */
> = T;`);
  const flow = `type A<
/* 1 */
T: {} = R
/* 2 */
> = T;`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('with more comments', () => {
  const result = testTransform(`type A
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
= T;`);
  const flow = `type A/*0*/</* 1 */T/* 2 */=/* 3 */F/* 4 */>/*5*/= T`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
