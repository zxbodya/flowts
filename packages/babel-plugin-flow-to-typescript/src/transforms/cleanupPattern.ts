import * as t from '@babel/types';

export function cleanupPattern(pattern: t.Pattern): false | t.Node[] {
  let result: false | t.Node[] = false;
  if (t.isAssignmentPattern(pattern)) {
    if (t.isPattern(pattern.left)) {
      result = result || cleanupPattern(pattern.left);
    }
  }
  if (t.isArrayPattern(pattern)) {
    for (const element of pattern.elements) {
      if (!element) continue;
      // @ts-expect-error
      if (element.typeAnnotation) {
        // @ts-expect-error
        element.typeAnnotation = t.noop();
        if (!result) result = [];
        result.push(element);
      }
      if (t.isPattern(element)) {
        result = cleanupPattern(element) || result;
      }
    }
  }
  if (t.isObjectPattern(pattern)) {
    for (const prop of pattern.properties) {
      if (t.isRestElement(prop)) {
        if (prop.typeAnnotation) {
          prop.typeAnnotation = t.noop();
          if (!result) result = [];
          result.push(prop);
        }
        if (t.isPattern(prop.argument)) {
          result = cleanupPattern(prop.argument) || result;
        }
      }
      if (t.isObjectProperty(prop)) {
        if (t.isPattern(prop.value)) {
          result = cleanupPattern(prop.value) || result;
        }
      }
    }
  }
  return result;
}
