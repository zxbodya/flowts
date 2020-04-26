import * as t from '@babel/types';

// A.B.C -> A.B.C
export function convertFlowIdentifier(
  id: t.QualifiedTypeIdentifier | t.Identifier
): t.TSQualifiedName | t.Identifier {
  if (t.isIdentifier(id)) {
    return id;
  }
  return t.tsQualifiedName(convertFlowIdentifier(id.qualification), id.id);
}
