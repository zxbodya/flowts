import * as t from '@babel/types';
import { convertTSType } from './convertTSType';
import { convertTSTypeParameterDeclaration } from './convertTSTypeParameterDeclaration';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertFunctionTypeAnnotation(
  node:
    | t.TSFunctionType
    | t.TSMethodSignature
    | t.TSCallSignatureDeclaration
    | t.TSDeclareFunction
    | t.TSDeclareMethod
) {
  let typeParams = undefined;

  if (node.typeParameters && !t.isNoop(node.typeParameters)) {
    typeParams = {
      ...convertTSTypeParameterDeclaration(node.typeParameters),
      ...baseNodeProps(node.typeParameters),
    };
  }

  const parameters: t.FunctionTypeParam[] = [];
  let returnType: t.FlowType | null = null;

  if (t.isTSDeclareFunction(node) || t.isTSDeclareMethod(node)) {
    returnType =
      node.returnType && !t.isNoop(node.returnType)
        ? convertTSType(node.returnType.typeAnnotation)
        : null;
  } else {
    returnType = node.typeAnnotation
      ? convertTSType(node.typeAnnotation.typeAnnotation)
      : null;
  }
  let rest: t.FunctionTypeParam | null = null;
  const originalParams =
    t.isTSDeclareFunction(node) || t.isTSDeclareMethod(node)
      ? node.params
      : node.parameters;

  const isDeclaration =
    t.isTSDeclareFunction(node) || t.isTSDeclareMethod(node);
  let variableNumber = 0;

  for (const param of originalParams) {
    if (t.isIdentifier(param)) {
      if (param.name !== 'this') {
        parameters.push({
          ...t.functionTypeParam(
            t.identifier(param.name),
            convertTSType(
              (param.typeAnnotation as t.TSTypeAnnotation).typeAnnotation
            )
          ),
          optional: param.optional,
        });
      }
    } else if (t.isRestElement(param)) {
      rest = t.functionTypeParam(
        // @ts-expect-error todo:
        param.argument,
        convertTSType(
          (param.typeAnnotation as t.TSTypeAnnotation).typeAnnotation
        )
      );
    } else {
      // todo: sepearate declarations from implementations
      if (isDeclaration) {
        // @ts-ignore
        parameters.push(
          t.functionTypeParam(
            t.identifier(`v${variableNumber}`),
            // @ts-ignore
            param.typeAnnotation
              ? convertTSType(
                  // @ts-ignore
                  (param.typeAnnotation as t.TSTypeAnnotation).typeAnnotation
                )
              : t.anyTypeAnnotation()
          )
        );
        variableNumber += 1;
      } else {
        throw new Error('todo:');
      }
    }
  }
  return { typeParams, parameters, rest, returnType };
}
