import { testTransform } from '../transform';

xit('should handle dynamic imports', () => {
  const ts = `
type A = import('react');
type B = import('react').ReactNode;
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare type A = $Exports<\\"react\\">;
declare type B = $PropertyType<$Exports<\\"react\\">, \\"ReactNode\\">;
"
`);
});
