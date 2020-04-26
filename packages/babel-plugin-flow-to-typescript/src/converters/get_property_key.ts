import * as t from '@babel/types';
import { baseNodeProps } from '../utils/baseNodeProps';

export function getPropertyKey(property: t.ObjectTypeProperty) {
  let key: t.Expression = property.key;
  let isComputed = false;
  if (t.isIdentifier(property.key)) {
    if (property.key.name === '@@iterator') {
      isComputed = true;
      key = {
        ...t.memberExpression(t.identifier('Symbol'), t.identifier('iterator')),
        ...baseNodeProps(property.key),
      };
    }
    if (property.key.name === '@@asyncIterator') {
      isComputed = true;
      key = {
        ...t.memberExpression(
          t.identifier('Symbol'),
          t.identifier('asyncIterator')
        ),
        ...baseNodeProps(property.key),
      };
    }
  }
  return { key, isComputed };
}
