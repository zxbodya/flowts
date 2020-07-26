import * as t from '@babel/types';

export function convertMemberExpressionToQualifiedTypeIdentifier(
  id: t.Identifier | t.MemberExpression
): t.Identifier | t.QualifiedTypeIdentifier {
  if (t.isIdentifier(id)) return id;
  if (!t.isIdentifier(id.object) && !t.isMemberExpression(id.object)) {
    throw new Error('not implemented');
  }
  if (!t.isIdentifier(id.property)) {
    throw new Error('not implemented');
  }
  return t.qualifiedTypeIdentifier(
    id.property,
    convertMemberExpressionToQualifiedTypeIdentifier(id.object)
  );
}
