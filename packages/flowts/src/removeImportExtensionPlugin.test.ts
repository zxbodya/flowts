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
import './b.flow.js';
import './c.flow';
import './d.js.flow';

class C extends Component {}
`)
    ).toMatchSnapshot();
  });
});
