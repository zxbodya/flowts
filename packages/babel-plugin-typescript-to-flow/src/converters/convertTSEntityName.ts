import * as t from '@babel/types';

// A.B.C -> A.B.C
export function convertTSEntityName(
  id: t.TSQualifiedName | t.Identifier
): t.QualifiedTypeIdentifier | t.Identifier {
  if (t.isIdentifier(id)) {
    return id;
  }
  return t.qualifiedTypeIdentifier(id.right, convertTSEntityName(id.left));
}
