import * as t from '@babel/types';
import { generateFreeIdentifier } from '../util';
import { convertFlowType } from './convert_flow_type';
import { convertTypeParameterDeclaration } from './convert_type_parameter_declaration';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertFunctionTypeAnnotation(node: t.FunctionTypeAnnotation) {
  let typeParams = undefined;

  if (node.typeParameters !== null) {
    typeParams = {
      ...convertTypeParameterDeclaration(node.typeParameters),
      ...baseNodeProps(node.typeParameters),
    };
  }

  const parameters = [];
  let returnType = null;

  // Params
  if (node.params) {
    const paramNames = node.params
      .map(_ => _.name)
      .filter(<T>(_: null | T): _ is T => _ !== null)
      .map(_ => _.name);

    let hasRequiredAfter = false;
    for (let i = node.params.length - 1; i >= 0; i--) {
      const param = node.params[i];
      let name = param.name && param.name.name;

      // Generate param name? (Required in TS, optional in Flow)
      if (name == null) {
        name = generateFreeIdentifier(paramNames);
        paramNames.push(name);
      }

      const id = t.identifier(name);
      id.optional = param.optional;
      if (param.typeAnnotation) {
        let typeAnnotation: t.TSType;
        if (t.isNullableTypeAnnotation(param.typeAnnotation)) {
          if (!hasRequiredAfter) {
            id.optional = true;
          }
          if (id.optional) {
            let tsType = convertFlowType(param.typeAnnotation.typeAnnotation);
            if (t.isTSFunctionType(tsType)) {
              tsType = t.tsParenthesizedType(tsType);
            }
            typeAnnotation = t.tsUnionType([tsType, t.tsNullKeyword()]);
          } else {
            typeAnnotation = convertFlowType(param.typeAnnotation);
            hasRequiredAfter = true;
          }
        } else {
          typeAnnotation = convertFlowType(param.typeAnnotation);
          hasRequiredAfter = true;
        }
        id.typeAnnotation = {
          ...t.tsTypeAnnotation(typeAnnotation),
          ...baseNodeProps(param.typeAnnotation),
        };
      }

      parameters.unshift({ ...id, ...baseNodeProps(param) });
    }
  }

  // rest parameters
  if (node.rest) {
    if (node.rest.name) {
      const id = t.restElement(node.rest.name);
      id.typeAnnotation = t.tsTypeAnnotation(
        convertFlowType(node.rest.typeAnnotation)
      );
      parameters.push({ ...id, ...baseNodeProps(node.rest) });
    }
  }

  // Return type
  if (node.returnType) {
    returnType = t.tsTypeAnnotation({
      ...convertFlowType(node.returnType),
      ...baseNodeProps(node.returnType),
    });
  }
  return { typeParams, parameters, returnType };
}
