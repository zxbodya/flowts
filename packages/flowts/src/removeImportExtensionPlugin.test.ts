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
import './b.js.flow';

class C extends Component {}
`)
    ).toMatchInlineSnapshot(`
      "import { Component } from "react";
      import R from "react-dom";
      import "./a.css";
      import "./a";
      import "./b";

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
      "const a = import("./a");
      "
    `);
  });
  test('jest.mock', () => {
    expect(
      transform(`
jest.mock('./a.js');
jest.unmock('./a.js');
jest.doMock('./a.js');
jest.dontMock('./a.js');
jest.setMock('./a.js');
jest.requireActual('./a.js');
jest.requireMock('./a.js');
`)
    ).toMatchInlineSnapshot(`
      "jest.mock("./a");
      jest.unmock("./a");
      jest.doMock("./a");
      jest.dontMock("./a");
      jest.setMock("./a");
      jest.requireActual("./a");
      jest.requireMock("./a");
      "
    `);
  });
  test('require', () => {
    expect(
      transform(`
const a = require('./a.js');
`)
    ).toMatchInlineSnapshot(`
      "const a = require("./a");
      "
    `);
  });
});
