import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import { baseNodeProps } from '../utils/baseNodeProps';
import { replaceWith } from '../utils/replaceWith';
import { PluginPass } from '../types';

export const DeclareModule = {
  enter(path: NodePath<t.DeclareModule>, state: PluginPass) {
    state.set('isModuleDeclaration', true);
    const node = path.node;

    const moduleBlock = {
      ...t.tsModuleBlock(node.body.body),
      ...baseNodeProps(node.body),
    };

    let id = node.id;
    if (t.isIdentifier(node.id)) {
      // it is not documented, but looking at lib/react.js in flow sources
      // it looks - "declare module react {}" should be identical to "declare module 'react' {}"
      id = t.stringLiteral(node.id.name);
    }
    const replacement = t.tsModuleDeclaration(id, moduleBlock);
    replacement.declare = true;
    replaceWith(path, replacement);
  },
  exit(_: NodePath<t.DeclareModule>, state: PluginPass) {
    state.set('isModuleDeclaration', false);
  },
};
