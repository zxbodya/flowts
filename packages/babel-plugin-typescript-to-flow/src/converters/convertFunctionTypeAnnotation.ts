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
  for (const param of originalParams) {
    if (t.isIdentifier(param)) {
      parameters.push(
        t.functionTypeParam(
          t.identifier(param.name),
          convertTSType(
            (param.typeAnnotation as t.TSTypeAnnotation).typeAnnotation
          )
        )
      );
    } else if (t.isRestElement(param)) {
      rest = t.functionTypeParam(
        // @ts-ignore todo:
        param.argument,
        convertTSType(
          (param.typeAnnotation as t.TSTypeAnnotation).typeAnnotation
        )
      );
    } else {
      throw new Error('todo:');
    }
  }
  return { typeParams, parameters, rest, returnType };
}
