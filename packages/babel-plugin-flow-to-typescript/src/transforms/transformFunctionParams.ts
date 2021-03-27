import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import { convertFlowType } from '../converters/convertFlowType';
import { replaceWith } from '../utils/replaceWith';

function cleanupPattern(pattern: t.Pattern): boolean {
  let removedType = false;
  if (t.isAssignmentPattern(pattern)) {
    if (t.isPattern(pattern.left)) {
      removedType = removedType || cleanupPattern(pattern.left);
    }
  }
  if (t.isArrayPattern(pattern)) {
    for (const element of pattern.elements) {
      if (!element) continue;
      if (element.typeAnnotation) {
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

export function transformFunctionParams(
  params: Array<
    NodePath<t.Identifier | t.Pattern | t.RestElement | t.TSParameterProperty>
  >,
  isSetter?: boolean
) {
  let hasRequiredAfter = false;
  for (let i = params.length - 1; i >= 0; i--) {
    const paramPath = params[i];
    if (paramPath.isPattern()) {
      if (
        paramPath.isAssignmentPattern() &&
        t.isIdentifier(paramPath.node.left)
      ) {
        // argument with default value can not be optional in typescript
        paramPath.node.left.optional = false;
      }
      if (!paramPath.isAssignmentPattern()) {
        hasRequiredAfter = true;
      }
      if (cleanupPattern(paramPath.node)) {
        console.warn('Ignoring types inside pattern argument');
      }
    }
    if (paramPath.isIdentifier()) {
      const param = paramPath.node;

      if (param.typeAnnotation && t.isTypeAnnotation(param.typeAnnotation)) {
        if (t.isNullableTypeAnnotation(param.typeAnnotation.typeAnnotation)) {
          param.optional = !hasRequiredAfter && !isSetter;
          if (param.optional) {
            let tsType = convertFlowType(
              param.typeAnnotation.typeAnnotation.typeAnnotation
            );
            if (t.isTSFunctionType(tsType)) {
              tsType = t.tsParenthesizedType(tsType);
            }
            const typeAnnotation = t.tsUnionType([tsType, t.tsNullKeyword()]);
            replaceWith(
              paramPath.get('typeAnnotation'),
              t.tsTypeAnnotation(typeAnnotation)
            );
          } else {
            hasRequiredAfter = true;
          }
        } else {
          // in typescript setter value can not be optional
          // also there can not be optional parameters before required
          if (param.optional && (hasRequiredAfter || isSetter)) {
            param.optional = false;
            let tsType = convertFlowType(param.typeAnnotation.typeAnnotation);
            if (t.isTSFunctionType(tsType)) {
              tsType = t.tsParenthesizedType(tsType);
            }
            const typeAnnotation = t.tsUnionType([
              tsType,
              t.tsUndefinedKeyword(),
              t.tsNullKeyword(),
            ]);
            replaceWith(
              paramPath.get('typeAnnotation'),
              t.tsTypeAnnotation(typeAnnotation)
            );
          }
          if (!param.optional) {
            hasRequiredAfter = true;
          }
        }
      }
    }
  }
}
