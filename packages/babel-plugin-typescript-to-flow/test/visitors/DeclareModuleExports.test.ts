import { testTransform } from '../transform';

xtest('declare empty named module', () => {
  const result = testTransform(`declare module 'react' {
  let __exports: A;
  export = __exports;
}`);
  const flow = `declare module 'react' {
  declare module.exports: A;
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('declare empty named module', () => {
  const result = testTransform(`declare module 'react' {
  let __exports: {
    a: number;
  };
  export = __exports;
}`);
  const flow = `declare module 'react' {
  declare module.exports: {
    a: number,
  };
}`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
