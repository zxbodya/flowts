import * as t from '@babel/types';
import { convertTSEntityName } from './convertTSEntityName';
import { convertFunctionTypeAnnotation } from './convertFunctionTypeAnnotation';
import { baseNodeProps } from '../utils/baseNodeProps';
import { convertTSTypeLiteral } from './convertTSTypeLiteral';

export function convertTSType(node: t.TSType): t.FlowType {
  if (t.isTSAnyKeyword(node)) {
    return t.anyTypeAnnotation();
  }

  if (t.isTSParenthesizedType(node)) {
    return convertTSType(node.typeAnnotation);
  }
  if (t.isTSArrayType(node)) {
    const elementType = {
      ...convertTSType(node.elementType),
      ...baseNodeProps(node.elementType),
    };
    return t.arrayTypeAnnotation(
      // t.isUnionTypeAnnotation(elementType) || t.isIntersectionTypeAnnotation(elementType)
      //   ? t.parenthesizedType(elementType)
      //   :
      elementType
    );
  }

  if (t.isTSUndefinedKeyword(node)) {
    return t.voidTypeAnnotation();
  }
  if (t.isTSBooleanKeyword(node)) {
    return t.booleanTypeAnnotation();
  }

  if (t.isTSLiteralType(node)) {
    if (t.isBooleanLiteral(node.literal)) {
      return t.booleanLiteralTypeAnnotation(node.literal.value);
    } else if (t.isNumericLiteral(node.literal)) {
      return t.numberLiteralTypeAnnotation(node.literal.value);
    } else if (t.isStringLiteral(node.literal)) {
      return t.stringLiteralTypeAnnotation(node.literal.value);
    } else if (t.isUnaryExpression(node.literal)) {
      // todo: @babel/types node.literal is not suposed to be a unray expression
      const exp = node.literal as t.UnaryExpression;
      if (t.isNumericLiteral(exp.argument) && exp.operator === '-') {
        return t.numberLiteralTypeAnnotation(-exp.argument.value);
      } else {
        throw new Error('not implemented');
      }
    } else {
      throw new Error('not implemented');
    }
  }

  if (t.isTSNeverKeyword(node)) {
    return t.emptyTypeAnnotation();
  }

  if (t.isTSTypeReference(node)) {
    const typeName = convertTSEntityName(node.typeName);
    let flowTypeParameters = null;
    if (node.typeParameters) {
      const flowParams = node.typeParameters.params.map(p => ({
        ...convertTSType(p),
        ...baseNodeProps(p),
      }));
      flowTypeParameters = t.typeParameterInstantiation(flowParams);
    }

    if (t.isIdentifier(typeName) && typeName.name === 'Readonly') {
      return t.genericTypeAnnotation(
        t.identifier('$ReadOnly'),
        flowTypeParameters
      );
    } else if (t.isIdentifier(typeName) && typeName.name === 'ReadonlyArray') {
      return t.genericTypeAnnotation(
        t.identifier('$ReadOnlyArray'),
        flowTypeParameters
      );
    } else if (t.isIdentifier(typeName) && typeName.name === 'Partial') {
      return t.genericTypeAnnotation(
        t.identifier('$Shape'),
        flowTypeParameters
      );
    } else if (t.isIdentifier(typeName) && typeName.name === 'NonNullable') {
      return t.genericTypeAnnotation(
        t.identifier('$NonMaybeType'),
        flowTypeParameters
      );
    } else if (t.isIdentifier(typeName) && typeName.name === 'ReadonlySet') {
      return t.genericTypeAnnotation(
        t.identifier('$ReadOnlySet'),
        flowTypeParameters
      );
    } else if (t.isIdentifier(typeName) && typeName.name === 'ReadonlyMap') {
      return t.genericTypeAnnotation(
        t.identifier('$ReadOnlyMap'),
        flowTypeParameters
      );
    } else if (t.isIdentifier(typeName) && typeName.name === 'ReturnType') {
      const params =
        flowTypeParameters === null
          ? [t.anyTypeAnnotation()]
          : flowTypeParameters.params;
      return t.genericTypeAnnotation(
        t.identifier('$Call'),
        t.typeParameterInstantiation([
          //<R>((...args: any[]) => R) => R,
          t.functionTypeAnnotation(
            t.typeParameterDeclaration([
              {
                ...t.typeParameter(),
                name: 'R',
              },
            ]),
            [
              t.functionTypeParam(
                null,
                t.functionTypeAnnotation(
                  null,
                  [],
                  t.functionTypeParam(
                    t.identifier('args'),
                    t.arrayTypeAnnotation(t.anyTypeAnnotation())
                  ),
                  t.genericTypeAnnotation(t.identifier('R'))
                )
              ),
            ],
            null,
            t.genericTypeAnnotation(t.identifier('R'))
          ),
          ...params,
        ])
      );
    } else if (t.isIdentifier(typeName) && typeName.name === 'Record') {
      if (
        flowTypeParameters === null ||
        flowTypeParameters.params.length !== 2
      ) {
        // todo: warn
        return t.genericTypeAnnotation(
          t.identifier('Record'),
          flowTypeParameters
        );
      }
      return t.objectTypeAnnotation(
        [],
        [
          t.objectTypeIndexer(
            t.identifier('key'),
            flowTypeParameters.params[0],
            flowTypeParameters.params[1]
          ),
        ],
        [],
        []
      );
    } else {
      return t.genericTypeAnnotation(typeName, flowTypeParameters);
    }
  }
  if (t.isTSIndexedAccessType(node)) {
    if (
      t.isTSLiteralType(node.indexType) &&
      t.isStringLiteral(node.indexType.literal)
    ) {
      node.indexType;
      return t.genericTypeAnnotation(
        t.identifier('$PropertyType'),
        t.typeParameterInstantiation([
          convertTSType(node.objectType),
          convertTSType(node.indexType),
        ])
      );
    } else {
      return t.genericTypeAnnotation(
        t.identifier('$ElementType'),
        t.typeParameterInstantiation([
          convertTSType(node.objectType),
          convertTSType(node.indexType),
        ])
      );
    }
  }

  if (t.isTSIntersectionType(node)) {
    const tsTypes = node.types;
    return t.intersectionTypeAnnotation(
      tsTypes.map(v => {
        const flowType = convertTSType(v);
        // if (t.isTSFunctionType(flowType)) {
        //   flowType = t.tsParenthesizedType(flowType);
        // }
        return { ...flowType, ...baseNodeProps(v) };
      })
    );
  }

  if (t.isTSUnknownKeyword(node)) {
    return t.mixedTypeAnnotation();
  }

  if (t.isTSNullKeyword(node)) {
    return t.nullLiteralTypeAnnotation();
  }

  if (t.isTSNumberKeyword(node)) {
    return t.numberTypeAnnotation();
  }

  if (t.isTSMappedType(node)) {
    return t.objectTypeAnnotation(
      [],
      [
        t.objectTypeIndexer(
          t.identifier(node.typeParameter.name),
          node.typeParameter.constraint
            ? convertTSType(node.typeParameter.constraint)
            : t.anyTypeAnnotation(),
          node.typeAnnotation
            ? convertTSType(node.typeAnnotation)
            : t.anyTypeAnnotation(),
          node.readonly ? t.variance('plus') : null
        ),
      ],
      [],
      []
    );
  }
  if (t.isTSTypeLiteral(node)) {
    return convertTSTypeLiteral(node);
  }

  if (t.isTSStringKeyword(node)) {
    return t.stringTypeAnnotation();
  }

  if (t.isTSThisType(node)) {
    return t.thisTypeAnnotation();
  }

  if (t.isTSImportType(node)) {
    const exports = t.genericTypeAnnotation(
      t.identifier('$Exports'),
      t.typeParameterInstantiation([
        t.stringLiteralTypeAnnotation(node.argument.value),
      ])
    );
    if (node.qualifier) {
      if (t.isTSQualifiedName(node.qualifier)) {
        throw new Error('todo:');
      }
      const exportName = t.stringLiteralTypeAnnotation(node.qualifier.name);
      return t.genericTypeAnnotation(
        t.identifier('$PropertyType'),
        t.typeParameterInstantiation([exports, exportName])
      );
    }
    return exports;
  }
  if (t.isTSTypeQuery(node)) {
    if (t.isTSEntityName(node.exprName)) {
      return t.typeofTypeAnnotation(
        t.genericTypeAnnotation(convertTSEntityName(node.exprName))
      );
    }
    if (t.isTSImportType(node.exprName)) {
      return t.genericTypeAnnotation(
        t.identifier('$Exports'),
        t.typeParameterInstantiation([
          t.stringLiteralTypeAnnotation(node.exprName.argument.value),
        ])
      );
    }
  }
  if (t.isTSTypeOperator(node)) {
    if (node.operator === 'typeof') {
      return t.typeofTypeAnnotation(convertTSType(node.typeAnnotation));
    } else if (node.operator === 'keyof') {
      return t.genericTypeAnnotation(
        t.identifier('$Keys'),
        t.typeParameterInstantiation([convertTSType(node.typeAnnotation)])
      );
    } else if (
      node.operator === 'unique' &&
      t.isTSSymbolKeyword(node.typeAnnotation)
    ) {
      return t.genericTypeAnnotation(t.identifier('Symbol'));
    } else if (
      node.operator === 'readonly' &&
      t.isTSTupleType(node.typeAnnotation)
    ) {
      return convertTSType(node.typeAnnotation);
    } else if (
      node.operator === 'readonly' &&
      t.isTSArrayType(node.typeAnnotation)
    ) {
      return t.genericTypeAnnotation(
        t.identifier('$ReadOnlyArray'),
        t.typeParameterInstantiation([
          convertTSType(node.typeAnnotation.elementType),
        ])
      );
    } else {
      throw new Error('todo: not implemented');
    }
  }

  if (t.isTSUnionType(node)) {
    const tsTypes = node.types;
    return t.unionTypeAnnotation(
      tsTypes.map(v => {
        const tsType = convertTSType(v);
        // if (t.isFunctionTypeAnnotation(tsType)) {
        //   //tsParenthesizedType
        //   tsType = tsType;
        // }
        return { ...tsType, ...baseNodeProps(v) };
      })
    );
  }

  if (t.isTSVoidKeyword(node)) {
    return t.voidTypeAnnotation();
  }

  if (t.isTSFunctionType(node)) {
    const {
      typeParams,
      parameters,
      rest,
      returnType,
    } = convertFunctionTypeAnnotation(node);

    return t.functionTypeAnnotation(
      typeParams,
      parameters,
      rest,
      returnType ? returnType : t.anyTypeAnnotation()
    );
  }

  if (t.isTSTupleType(node)) {
    const elementTypes = node.elementTypes;
    return t.tupleTypeAnnotation(elementTypes.map(convertTSType));
  }

  if (t.isTSObjectKeyword(node)) {
    return t.objectTypeAnnotation([], [], [], []);
  }

  if (t.isTSSymbolKeyword(node)) {
    return t.genericTypeAnnotation(t.identifier('Symbol'));
  }
  if (t.isTSOptionalType(node)) {
    return t.unionTypeAnnotation([
      convertTSType(node.typeAnnotation),
      t.voidTypeAnnotation(),
    ]);
  }
  if (t.isTSConditionalType(node)) {
    //todo: warn
    return t.anyTypeAnnotation();
  }
  throw new Error(`Unsupported flow type TSType(type=${node.type})`);
}
