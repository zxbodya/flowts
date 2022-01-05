import plugin from './fixFlowPragmaPlugin';
import { createTransform } from './createTransform';

const transform = createTransform([plugin]);

describe('fixFlowPragmaPlugin', () => {
  test('flow', () => {
    expect(
      transform(`
// @flow
let a = 1;
export {a};
`)
    ).toMatchInlineSnapshot(`
      "// @ts-check
      let a = 1;
      export { a };
      "
    `);
  });
  test('noflow', () => {
    expect(
      transform(`
// @noflow
let a = 1;
export {a};
`)
    ).toMatchInlineSnapshot(`
      "// @ts-nocheck
      let a = 1;
      export { a };
      "
    `);
  });
  test('flow block comment', () => {
    expect(
      transform(`
/* @flow */
let a = 1;
export {a};
`)
    ).toMatchInlineSnapshot(`
      "/* @ts-check */
      let a = 1;
      export { a };
      "
    `);
  });
  test('noflow block comment', () => {
    expect(
      transform(`
/* @noflow */
let a = 1;
export {a};
`)
    ).toMatchInlineSnapshot(`
      "/* @ts-nocheck */
      let a = 1;
      export { a };
      "
    `);
  });
});
