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
  test('jest.mock', () => {
    expect(
      transform(`
const a = jest.mock('./a.js');
`)
    ).toMatchInlineSnapshot(`
      "const a = jest.mock(\\"./a\\");
      "
    `);
  });
  test('require', () => {
    expect(
      transform(`
const a = require('./a.js');
`)
    ).toMatchInlineSnapshot(`
      "const a = require(\\"./a\\");
      "
    `);
  });
});
