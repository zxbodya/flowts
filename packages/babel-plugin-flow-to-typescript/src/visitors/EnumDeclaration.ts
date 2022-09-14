import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { replaceWith } from '../utils/replaceWith';

function convertEnumDeclaration(node: t.EnumDeclaration) {
  const members: t.TSEnumMember[] = node.body.members.map(m => {
    if (
      t.isEnumBooleanMember(m) ||
      t.isEnumNumberMember(m) ||
      t.isEnumStringMember(m)
    ) {
      return t.tsEnumMember(m.id, m.init);
    }
    return t.tsEnumMember(m.id);
  });
  return t.tsEnumDeclaration(node.id, members);
}

export function EnumDeclaration(path: NodePath<t.EnumDeclaration>) {
  replaceWith(path, convertEnumDeclaration(path.node));
}
