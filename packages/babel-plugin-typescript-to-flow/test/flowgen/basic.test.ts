import { testTransformDts } from '../transform';

it('should handle basic keywords', () => {
  const ts = `type A = {
    a: void,
    b: string,
    c: any,
    d: number,
    e: boolean,
    f: null,
    g: undefined,
    h: object,
    i: 1,
    j: 2,
    k: true,
    l: false,
    m: 'foo',
    n: 'bar',
    o: never,
    p: unknown,
    r: -1,
    s: -2,
    t: symbol,
    u: unique symbol,
    v: readonly [1, 2, 3],
    w: readonly string[],
  }`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare type A = {
      a: void,
      b: string,
      c: any,
      d: number,
      e: boolean,
      f: null,
      g: void,
      h: {},
      i: 1,
      j: 2,
      k: true,
      l: false,
      m: "foo",
      n: "bar",
      o: empty,
      p: mixed,
      r: -1,
      s: -2,
      t: Symbol,
      u: Symbol,
      v: [1, 2, 3],
      w: $ReadOnlyArray<string>,
    };"
  `);
});
