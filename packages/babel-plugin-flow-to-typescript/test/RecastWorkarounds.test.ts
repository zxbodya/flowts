import { testTransform } from './transform';

test('preserve indentation in template strings 1', () => {
  const result = testTransform(`
// @flow

test<any>(
  \`1
  2
  3
4\`);
`);
  expect(result.babel).toMatchInlineSnapshot(`
    "test<any>(\`1
      2
      3
    4\`);"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "test<any>(\`1
      2
      3
    4\`);"
  `);
});

test('preserve indentation in template strings 2', () => {
  const result = testTransform(`
// @flow
export const StyledTableHeadCell = styled<StyledTableHeadCellPropsT>(
  'th',
  () => {
    return {
      '::after': {
        left: '0',
        backgroundImage: \`
        linear-gradient()
      \`,
      },
    };
  },
);

`);
  expect(result.babel).toMatchInlineSnapshot(`
    "export const StyledTableHeadCell = styled<StyledTableHeadCellPropsT>('th', () => {
      return {
        '::after': {
          left: '0',
          backgroundImage: \`
            linear-gradient()
          \`
        }
      };
    });"
  `);
  expect(result.recast).toMatchInlineSnapshot(`
    "export const StyledTableHeadCell = styled<StyledTableHeadCellPropsT>('th', () => {
      return {
        '::after': {
          left: '0',
          backgroundImage: \`
            linear-gradient()
          \`,
        },
      };
    });"
  `);
});
