import * as t from '@babel/types';

export function convertKey(
  flowKey: t.Expression
): t.Identifier | t.StringLiteral {
  if (t.isIdentifier(flowKey) || t.isStringLiteral(flowKey)) {
    return flowKey;
  } else {
    if (
      t.isMemberExpression(flowKey) &&
      t.isIdentifier(flowKey.object) &&
      t.isIdentifier(flowKey.property)
    ) {
      if (
        flowKey.object.name === 'Symbol' &&
        flowKey.property.name === 'iterator'
      ) {
        return t.identifier('@@iterator');
      }

      if (
        flowKey.object.name === 'Symbol' &&
        flowKey.property.name === 'asyncIterator'
      ) {
        return t.identifier('@@asyncIterator');
      }
    }
  }
  if (t.isNumericLiteral(flowKey)) {
    return t.stringLiteral(flowKey.value + '');
  }
  throw new Error('not implemented');
}
