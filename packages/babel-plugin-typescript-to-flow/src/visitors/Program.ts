import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { replaceWith } from '../utils/replaceWith';
import { convertTSTypeAliasDeclaration } from '../converters/convertTSTypeAliasDeclaration';

export function Program(path: NodePath<t.Program>) {
  // todo: pass this in plugin options
  const isAmbientContext = true;

  for (const st of path.get('body')) {
    const node = st.node;
    if (t.isTSTypeAliasDeclaration(node)) {
      const replacement = convertTSTypeAliasDeclaration(node, isAmbientContext);
      replaceWith(st, replacement);
    }
  }
}
