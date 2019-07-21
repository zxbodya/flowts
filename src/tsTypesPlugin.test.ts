import pluginTester from 'babel-plugin-tester';
import plugin from './tsTypesPlugin';

pluginTester({
  plugin,
  tests: [
    {
      title: 'simple case',
      code: `import React from 'react';
type A = React$Node;
type B = SyntheticInputEvent<HTMLInputElement>;
`,
      output: `import React, { ChangeEvent, ReactNode } from 'react';
type A = ReactNode;
type B = ChangeEvent<HTMLInputElement>;
`,
    },
    {
      title: 'rename imported',
      code: `import { Node } from 'react';
type A = Node;
`,
      output: `import { ReactNode } from 'react';
type A = ReactNode;
`,
    },
    {
      title: 'namespace and named imports can not be mixed',
      code: `import * as React from 'react';
type A = React$Node;
`,
      output: `import { ReactNode } from "react";
import * as React from 'react';
type A = ReactNode;
`,
    },
    {
      title: 'rename exports used from imported namespace',
      code: `import * as React from 'react';
type A = React.Node;
let a = 0;
`,
      output: `import * as React from 'react';
type A = React.ReactNode;
let a = 0;
`,
    },
    // todo:
    // bug: local variable got renamed from `Element` to `ReactElement`
    //
    // React.ElementRef<any>
    //
    // React.forwardRef<Config, Instance> => React.forwardRef<Instance, Config>
    //
    // HTMLCollection => HTMLCollectionOf
    //
    // type ChildrenT = React.ChildrenArray<React.ReactElement<any>>;
    //
    // TimeoutID => ReturnType<setTimeout>
    //
    //     {
    //       title: 'new imports should be added bellow first comment',
    //       code: `/* copyright comments */
    // type A = React$Node;
    // `,
    //       output: `/* copyright comments */
    // import { ReactNode } from 'react';
    // type A = ReactNode;
    // `,
    //     },
    //
    // use namespace imports instead of default imports for some modules (like react)
    // script to collect data from flow lib
    // flow utility types, $Diff in compiled code looks ugly
    // .editorconfig
    // lint rules
  ],
});
