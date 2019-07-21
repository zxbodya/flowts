import { detectOptions } from './detectOptions';

describe('detectOptions', () => {
  it('detects @flow comment', () => {
    expect(detectOptions(`// @flow`, 'flow.js')).toStrictEqual({
      isFlow: true,
      isJSX: false,
      isError: false,
    });
  });
  it('detects flow constructions in code', () => {
    expect(detectOptions(`let a: number = 1;`, 'test.js')).toStrictEqual({
      isFlow: true,
      isJSX: false,
      isError: false,
    });
  });
  it('detects JSX', () => {
    expect(detectOptions(`let a = <div/>;`, 'test.js')).toStrictEqual({
      isFlow: false,
      isJSX: true,
      isError: false,
    });
  });
  it('throws', () => {
    expect(() => detectOptions(`let a = /<div/>;`, 'test.js')).toThrow();
  });
});
