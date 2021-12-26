import plugin from './removeImportExtensionPlugin';
import { createTransform } from './createTransform';

const transform = createTransform([plugin]);

describe('removeImportExtensionPlugin', () => {
  test('imports are removed', () => {
    expect(
      transform(`
import { Component } from 'react';
import R from 'react-dom';
import './a.css';
import './a.js';

class C extends Component {}
`)
    ).toMatchInlineSnapshot(`
      "import { Component } from \\"react\\";
      import R from \\"react-dom\\";
      import \\"./a.css\\";
      import \\"./a\\";

      class C extends Component {}
      "
    `);
  });
  test('dynamic imports', () => {
    expect(
      transform(`
const a = import('./a.js');
`)
    ).toMatchInlineSnapshot(`
      "const a = import(\\"./a\\");
      "
    `);
  });
});
