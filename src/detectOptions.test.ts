import { detectOptions } from './detectOptions';

describe('detectOptions', () => {
  it('detects @flow comment', () => {
    expect(detectOptions(`// @flow`, 'flow.js')).toMatchSnapshot();
  });
  it('detects flow constructions in code', () => {
    expect(detectOptions(`let a: number = 1;`, 'test.js')).toMatchSnapshot();
  });
  it('detects JSX', () => {
    expect(detectOptions(`let a = <div/>;`, 'test.js')).toMatchSnapshot();
  });
  it('throws', () => {
    expect(() => detectOptions(`let a = /<div/>;`, 'test.js')).toThrow();
  });
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
  it('use file extension to detect jsx', () => {
    expect(detectOptions(`// @flow`, 'flow.jsx')).toMatchSnapshot();
  });
  it('use file extension to detect flow', () => {
    expect(detectOptions(`let a = 1;`, 'test.js.flow')).toMatchSnapshot();
  });
});
