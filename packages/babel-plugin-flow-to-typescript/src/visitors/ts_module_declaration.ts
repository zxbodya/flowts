import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import { PluginPass } from '../types';

export default {
  enter(_path: NodePath<t.TSModuleDeclaration>, state: PluginPass) {
    state.set('isModuleDeclaration', true);
  },
  exit(_: NodePath<t.TSModuleDeclaration>, state: PluginPass) {
    state.set('isModuleDeclaration', false);
  },
};
