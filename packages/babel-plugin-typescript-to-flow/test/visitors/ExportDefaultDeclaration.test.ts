import { testTransform, testTransformDts } from '../transform';

test('export default function', () => {
  const result = testTransformDts(`export default function A11y(props: {
    children: React.ReactNode;
}): JSX.Element;`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare export default function A11y(props: {
      children: React.ReactNode
    }): JSX.Element;"
  `);
  expect(result.recast).toMatchInlineSnapshot(
    `"declare export default function A11y(props: { children: React.ReactNode }): JSX.Element;"`
  );
});
