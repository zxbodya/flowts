import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { replaceWith } from '../utils/replaceWith';
import { convertTSTypeAliasDeclaration } from '../converters/convertTSTypeAliasDeclaration';
import { transformClassDeclaration } from '../transforms/transformClassDeclaration';

export function Program(path: NodePath<t.Program>) {
  // todo: pass this in plugin options
  const isAmbientContext = true;

  for (const st of path.get('body')) {
    const node = st.node;
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
  }
}
