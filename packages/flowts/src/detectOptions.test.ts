import { detectOptions } from './detectOptions';

describe('detectOptions', () => {
  it('detects @flow comment', () => {
    expect(detectOptions(`// @flow`, 'flow.js')).toMatchInlineSnapshot(`
      Object {
        "isFlow": true,
        "isJSX": false,
      }
    `);
  });
  it('detects flow constructions in code', () => {
    expect(detectOptions(`let a: number = 1;`, 'test.js'))
      .toMatchInlineSnapshot(`
      Object {
        "isFlow": true,
        "isJSX": false,
      }
    `);
  });
  it('detects JSX', () => {
    expect(detectOptions(`let a = <div/>;`, 'test.js')).toMatchInlineSnapshot(`
      Object {
        "isFlow": false,
        "isJSX": true,
      }
    `);
  });
  it('throws', () => {
    expect(() => detectOptions(`let a = /<div/>;`, 'test.js')).toThrow();
  });
  it('use file extension to detect jsx', () => {
    expect(detectOptions(`// @flow`, 'flow.jsx')).toMatchInlineSnapshot(`
      Object {
        "isFlow": true,
        "isJSX": true,
      }
    `);
  });
  it('use file extension to detect flow', () => {
    expect(detectOptions(`let a = 1;`, 'test.js.flow')).toMatchInlineSnapshot(`
      Object {
        "isFlow": true,
        "isJSX": false,
      }
    `);
  });
});
