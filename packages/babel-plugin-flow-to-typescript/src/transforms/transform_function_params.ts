import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import { convertFlowType } from '../converters/convert_flow_type';
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
  >
) {
  let hasRequiredAfter = false;
  for (let i = params.length - 1; i >= 0; i--) {
    const paramNode = params[i];
    if (paramNode.isPattern()) {
      if (
        paramNode.isAssignmentPattern() &&
        t.isIdentifier(paramNode.node.left)
      ) {
        // argument with default value can not be optional in typescript
        paramNode.node.left.optional = false;
      }
      if (!paramNode.isAssignmentPattern()) {
        hasRequiredAfter = true;
      }
      if (cleanupPattern(paramNode.node)) {
        console.warn('Ignoring types inside pattern argument');
      }
    }
    if (paramNode.isIdentifier()) {
      const param = paramNode.node;

      if (param.typeAnnotation && t.isTypeAnnotation(param.typeAnnotation)) {
        if (t.isNullableTypeAnnotation(param.typeAnnotation.typeAnnotation)) {
          param.optional = !hasRequiredAfter;
          if (param.optional) {
            let tsType = convertFlowType(
              param.typeAnnotation.typeAnnotation.typeAnnotation
            );
            if (t.isTSFunctionType(tsType)) {
              tsType = t.tsParenthesizedType(tsType);
            }
            const typeAnnotation = t.tsUnionType([tsType, t.tsNullKeyword()]);
            replaceWith(
              paramNode.get('typeAnnotation'),
              t.tsTypeAnnotation(typeAnnotation)
            );
          } else {
            hasRequiredAfter = true;
          }
        } else {
          if (param.optional && hasRequiredAfter) {
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
              paramNode.get('typeAnnotation'),
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
