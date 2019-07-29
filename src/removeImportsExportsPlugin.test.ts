import plugin from './removeImportsExportsPlugin';
import { createTransform } from './createTransform';

const transform = createTransform([plugin]);

describe('removeImportsExportsPlugin', () => {
  test('imports are removed', () => {
    expect(
      transform(`
import { Component } from 'react';
import R from 'react-dom';
import 'a.css';

class C extends Component {}
`)
    ).toMatchSnapshot();
  });
});
