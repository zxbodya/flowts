import * as t from '@babel/types';

// A.B.C -> A.B.C
export function convertFlowIdentifierToExpression(
  id: t.QualifiedTypeIdentifier | t.Identifier
): t.MemberExpression | t.Identifier {
  if (t.isIdentifier(id)) {
    return id;
  }
  return t.memberExpression(
    convertFlowIdentifierToExpression(id.qualification),
    id.id
  );
}
