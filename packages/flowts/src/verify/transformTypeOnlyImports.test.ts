import plugin from './transformTypeOnlyImports';
import { createTransform } from '../createTransform';

const transform = createTransform([plugin]);

describe('removeExportAllTypePlugin', () => {
  test('export all is removed', () => {
    expect(
      transform(`
import {type A} from 'a';
import {type B, b} from 'b';
`)
    ).toMatchInlineSnapshot(`
      "import type { A } from "a";
      import { type B, b } from "b";
      "
    `);
  });
});
