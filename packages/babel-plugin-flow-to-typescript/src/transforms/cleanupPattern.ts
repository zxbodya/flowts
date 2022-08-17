import * as t from '@babel/types';

export function cleanupPattern(pattern: t.Pattern): boolean {
  let removedType = false;
  if (t.isAssignmentPattern(pattern)) {
    if (t.isPattern(pattern.left)) {
      removedType = removedType || cleanupPattern(pattern.left);
    }
  }
  if (t.isArrayPattern(pattern)) {
    for (const element of pattern.elements) {
      if (!element) continue;
      // @ts-expect-error
      if (element.typeAnnotation) {
        // @ts-expect-error
        element.typeAnnotation = t.noop();
        removedType = true;
      }
      if (t.isPattern(element)) {
        removedType = cleanupPattern(element) || removedType;
      }
    }
  }
  if (t.isObjectPattern(pattern)) {
    for (const prop of pattern.properties) {
      if (t.isRestElement(prop)) {
        if (prop.typeAnnotation) {
          prop.typeAnnotation = t.noop();
          removedType = true;
        }
        if (t.isPattern(prop.argument)) {
          removedType = cleanupPattern(prop.argument) || removedType;
        }
      }
      if (t.isObjectProperty(prop)) {
        if (t.isPattern(prop.value)) {
          removedType = cleanupPattern(prop.value) || removedType;
        }
      }
    }
  }
  return removedType;
}
