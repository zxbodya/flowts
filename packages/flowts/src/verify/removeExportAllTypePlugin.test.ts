import plugin from './removeExportAllTypePlugin';
import { createTransform } from '../createTransform';

const transform = createTransform([plugin]);

describe('removeExportAllTypePlugin', () => {
  test('export all is removed', () => {
    expect(
      transform(`
import { Component } from 'react';
import R from 'react-dom';
import 'a.css';

class C extends Component {}
export type * from './somewhere';
`)
    ).toMatchInlineSnapshot(`
      "import { Component } from \\"react\\";
      import R from \\"react-dom\\";
      import \\"a.css\\";

      class C extends Component {}
      export * from \\"./somewhere\\";
      "
    `);
  });
});
