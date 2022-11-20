import { verify } from './verify';

describe('verify', () => {
  test('handles whitespace after types removal', () => {
    const flow = `
// @flow
import type { Element } from 'react';
import { Component } from 'react';

// hello
const Test = (): Element => {
  return <>test</>;
};
`;
    const ts = `
import type { ReactElement } from 'react';
import { Component } from 'react';

import type { ReactNode } from 'react';

// hello
const Test = (): ReactElement => {
  return <>test</>;
};
`;

    const result = verify(flow, ts, true, 'test.js', 'test.tsx', false);
    expect(result.isEqual).toBeTruthy();
  });
});
