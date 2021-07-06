import plugin from './removeEmptyExportPlugin';
import { createTransform } from '../createTransform';

const transform = createTransform([plugin]);

describe('removeExportAllTypePlugin', () => {
  test('export with specifier is not removed', () => {
    expect(
      transform(`
        const a = 1;
        export { a };
    `)
    ).toMatchInlineSnapshot(`
      "const a = 1;
      export { a };
      "
    `);
  });
  test('export const is not removed', () => {
    expect(transform(`export const a = 1;`)).toMatchInlineSnapshot(`
"export const a = 1;
"
`);
  });
  test('export all is removed', () => {
    expect(transform(`export {};`)).toMatchInlineSnapshot(`""`);
  });
});
