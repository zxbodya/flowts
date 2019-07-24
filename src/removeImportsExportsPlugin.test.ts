import pluginTester from 'babel-plugin-tester';
import plugin from './removeImportsExportsPlugin';

pluginTester({
  plugin,
  tests: [
    {
      title: 'imports are removed',
      code: `import { Component } from 'react';
import R from 'react-dom';
import 'a.css';

class C extends Component {}
`,
      output: `
class C extends Component {}
`,
    },
  ],
});
