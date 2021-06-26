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

describe('whitespace', () => {
  test('preserve tabs mixes with spaces template strings', () => {
    const result = testTransform(`
// @flow
// @flow

const test = \`
    {
    	from: {
        	service: 'p',
          idlService: 'p',
      },\`;
`);
    expect(result.babel).toMatchInlineSnapshot(`
"//
const test = \`
    {
    	from: {
        	service: 'p',
          idlService: 'p',
      },\`;"
`);
    expect(result.recast).toMatchInlineSnapshot(`
"//

const test = \`
    {
    	from: {
        	service: 'p',
          idlService: 'p',
      },\`;"
`);
  });

  /* eslint-disable no-irregular-whitespace */
  test('preserve NBSP in template strings', () => {
    const result = testTransform(`
// @flow

expect(wrapper).toMatchInlineSnapshot(\`
  <Fragment>
     
  </Fragment>
\`);
`);
    expect(result.babel).toMatchInlineSnapshot(`
"expect(wrapper).toMatchInlineSnapshot(\`
  <Fragment>
     
  </Fragment>
\`);"
`);
    expect(result.recast).toMatchInlineSnapshot(`
"expect(wrapper).toMatchInlineSnapshot(\`
  <Fragment>
     
  </Fragment>
\`);"
`);
  });
});
