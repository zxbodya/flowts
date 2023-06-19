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

  test('only type specifiers', () => {
    const flow = `
// @flow
import {type A} from 'a';
import {type B, b} from 'b';
import {} from 'c';
`;
    const ts = `
import {type A} from 'a';
import {type B, b} from 'b';
import {} from 'c';
`;

    const result = verify(flow, ts, true, 'test.js', 'test.tsx', false);
    expect(result.isEqual).toBeTruthy();
  });

  test('empty exports', () => {
    const flow = `
// @flow
export {};
`;
    const ts = `
export {};
`;

    const result = verify(flow, ts, true, 'test.js', 'test.tsx', false);
    expect(result.isEqual).toBeTruthy();
  });
});
