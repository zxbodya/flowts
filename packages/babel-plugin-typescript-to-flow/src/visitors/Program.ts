import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { replaceWith } from '../utils/replaceWith';
import { convertTSTypeAliasDeclaration } from '../converters/convertTSTypeAliasDeclaration';
import { transformClassDeclaration } from '../transforms/transformClassDeclaration';
import { convertTSInterfaceDeclaration } from '../converters/convertTSInterfaceDeclaration';
import { convertTSDeclareFunction } from '../converters/convertTSDeclareFunction';
import { PluginPass } from '../types';

export function Program(path: NodePath<t.Program>, state: PluginPass) {
  const isAmbientContext = state.opts.isAmbientContext;

  for (const st of path.get('body')) {
    const node = st.node;
    // todo: isTSTypeAliasDeclaration on NodePath
    if (t.isTSTypeAliasDeclaration(node)) {
      const replacement = convertTSTypeAliasDeclaration(node, isAmbientContext);
      replaceWith(st, replacement);
    }
    // todo: isClassDeclaration on NodePath
    if (t.isClassDeclaration(node)) {
      transformClassDeclaration(
        st as NodePath<t.ClassDeclaration>,
        isAmbientContext
      );
    }
    // todo: isTSInterfaceDeclaration on NodePath
    if (t.isTSInterfaceDeclaration(node)) {
      replaceWith(st, convertTSInterfaceDeclaration(node, isAmbientContext));
    }
    if (t.isTSDeclareFunction(node)) {
      if (!isAmbientContext && !node.declare) {
        throw path.buildCodeFrameError('unexpected TSDeclareFunction');
      }
      const replacement = convertTSDeclareFunction(node);
      replaceWith(st, replacement);
    }
  }
}
