import { testTransform } from '../transform';

it('should handle exported types', () => {
  const ts = `
export declare type FactoryOrValue<T> = T | (() => T);
export type Maybe<T> = {type: 'just', value: T} | {type: 'nothing'}
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"export type FactoryOrValue<T> = T | (() => T);
export type Maybe<T> =
  | {
      type: \\"just\\",
      value: T,
      ...
    }
  | {
      type: \\"nothing\\",
      ...
    };
"
`);
});
