import { detectOptions } from './detectOptions';

describe('detectOptions', () => {
  it('collects module usage info', () => {
    expect(
      detectOptions(
        `
import React from 'react';
import * as N from 'n';
import {render} from 'react-dom';
import type { ComponentType } from 'react';

let a = React.createElement('a');
class A extends N.T {
}

let b: N.B;
`,
        'test.js'
      )
    ).toMatchSnapshot();
  });
});
