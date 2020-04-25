import { testTransform } from '../transform';

xtest('optional member expression', () => {
  const result = testTransform(`console.log(a?.b);`);
  const flow = `console.log(a?.b);`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('optional multi member expression', () => {
  const result = testTransform(`console.log(a?.b?.c);`);
  const flow = `console.log(a?.b?.c);`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('optional multi mixed member expression', () => {
  const result = testTransform(`console.log(a.b?.c);`);
  const flow = `console.log(a.b?.c);`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('Optional numeral literal access', () => {
  const result = testTransform(`console.log(a?.[0]?.c);`);
  const flow = `console.log(a?.[0]?.c);`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
