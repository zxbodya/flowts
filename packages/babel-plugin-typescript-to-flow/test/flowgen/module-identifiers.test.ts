import { testTransformDts } from '../transform';

xit('should handle react types', () => {
  const ts = `
import {ReactNode} from 'react'
import * as React from 'react'
declare function s(node: ReactNode): void;
declare function s(node: React.ReactNode): void;
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"import { Node } from \\"react\\";
import * as React from \\"react\\";
declare function s(node: Node): void;
declare function s(node: React.Node): void;
"
`);
});

xdescribe('should handle global types', () => {
  test('jsx', () => {
    const ts = `
import * as React from 'react'
declare function s(node: JSX.Element): void;

type Props = {children: JSX.Element}

declare class Component extends React.Component<Props> {
  render(): JSX.Element
}
`;
    const result = testTransformDts(ts);
    expect(result.babel).toMatchInlineSnapshot(`
"import * as React from \\"react\\";
declare function s(node: React$Node): void;
declare type Props = {
  children: React$Node,
  ...
};
declare class Component mixins React.Component<Props> {
  render(): React$Node;
}
"
`);
  });
});
