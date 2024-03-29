import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import { convertFlowType } from '../converters/convertFlowType';
import { replaceWith } from '../utils/replaceWith';
import { cleanupPattern } from './cleanupPattern';
import { PluginPass } from '../types';

export function transformFunctionParams(
  params: Array<
    NodePath<t.Identifier | t.Pattern | t.RestElement | t.TSParameterProperty>
  >,
  isSetter: boolean | undefined,
  state: PluginPass
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
      const removed = cleanupPattern(paramPath.node);
      if (removed) {
        for (const r of removed) {
          state.get('logger').warn(r, 'Ignoring types inside a pattern');
        }
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
