import { testTransform } from '../transform';

test('optional member expression', () => {
  const result = testTransform(`console.log(a?.b);`);
  expect(result.babel).toMatchInlineSnapshot(`"console.log(a?.b);"`);
  expect(result.recast).toMatchInlineSnapshot(`"console.log(a?.b);"`);
});

test('optional multi member expression', () => {
  const result = testTransform(`console.log(a?.b?.c);`);
  expect(result.babel).toMatchInlineSnapshot(`"console.log(a?.b?.c);"`);
  expect(result.recast).toMatchInlineSnapshot(`"console.log(a?.b?.c);"`);
});

test('optional multi mixed member expression', () => {
  const result = testTransform(`console.log(a.b?.c);`);
  expect(result.babel).toMatchInlineSnapshot(`"console.log(a.b?.c);"`);
  expect(result.recast).toMatchInlineSnapshot(`"console.log(a.b?.c);"`);
});

test('Optional numeral literal access', () => {
  const result = testTransform(`console.log(a?.[0]?.c);`);
  expect(result.babel).toMatchInlineSnapshot(`"console.log(a?.[0]?.c);"`);
  expect(result.recast).toMatchInlineSnapshot(`"console.log(a?.[0]?.c);"`);
});
