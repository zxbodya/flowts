import * as t from '@babel/types';
import { warnOnlyOnce } from '../utils/warnOnlyOnce';
import { convertFlowIdentifier } from './convertFlowIdentifier';
import { convertFunctionTypeAnnotation } from './convertFunctionTypeAnnotation';
import { baseNodeProps } from '../utils/baseNodeProps';
import { convertObjectTypeAnnotation } from './convertObjectTypeAnnotation';

export function convertFlowType(node: t.FlowType): t.TSType {
  if (t.isAnyTypeAnnotation(node)) {
    return t.tsAnyKeyword();
  }

  if (t.isArrayTypeAnnotation(node)) {
    const elementType = {
      ...convertFlowType(node.elementType),
      ...baseNodeProps(node.elementType),
    };
    return t.tsArrayType(
      t.isTSUnionType(elementType) || t.isTSIntersectionType(elementType)
        ? t.tsParenthesizedType(elementType)
        : elementType
    );
  }

  if (t.isBooleanTypeAnnotation(node)) {
    return t.tsBooleanKeyword();
  }

  if (t.isBooleanLiteralTypeAnnotation(node)) {
    return t.tsLiteralType(t.booleanLiteral(node.value));
  }

  if (t.isEmptyTypeAnnotation(node)) {
    return t.tsNeverKeyword();
  }

  if (t.isExistsTypeAnnotation(node)) {
    warnOnlyOnce(
      'Existential type (*) in Flow is converted to "any" in TypeScript, and this conversion loses some type information.'
    );
    return t.tsAnyKeyword();
  }

  if (t.isGenericTypeAnnotation(node)) {
    const typeParameters = node.typeParameters;
    let tsTypeParameters: t.TSTypeParameterInstantiation | null = null;
    if (typeParameters) {
      const tsParams = typeParameters.params.map(p => ({
        ...convertFlowType(p),
        ...baseNodeProps(p),
      }));
      tsTypeParameters = t.tsTypeParameterInstantiation(tsParams);
    }

    const id = node.id;
    if (t.isIdentifier(id) && id.name === '$Keys') {
      // $Keys -> keyof
      const ret = t.tsTypeOperator(tsTypeParameters!.params[0]);
      ret.operator = 'keyof';
      return ret;
    } else if (t.isIdentifier(id) && id.name === '$Values') {
      // $Values<X> -> X[keyof X]
      const tsType = tsTypeParameters!.params[0];
      const tsKey = t.tsTypeOperator(tsType);
      tsKey.operator = 'keyof';
      return t.tsIndexedAccessType(tsType, tsKey);
    } else if (t.isIdentifier(id) && id.name === '$ReadOnly') {
      // $ReadOnly<X> -> Readonly<X>
      return t.tsTypeReference(t.identifier('Readonly'), tsTypeParameters);
    } else if (t.isIdentifier(id) && id.name === '$ReadOnlyArray') {
      // $ReadOnlyArray<X> -> ReadonlyArray<X>
      return t.tsTypeReference(t.identifier('ReadonlyArray'), tsTypeParameters);
    } else if (t.isIdentifier(id) && id.name === '$Exact') {
      warnOnlyOnce(
        "Exact object type annotation in Flow is ignored. In TypeScript, it's always regarded as exact type"
      );
      return tsTypeParameters!.params[0];
    } else if (
      t.isIdentifier(id) &&
      (id.name === '$Diff' || id.name === '$Rest')
    ) {
      // type $Diff<X, Y> = Omit<X, keyof y>;
      const [tsX, tsY] = tsTypeParameters!.params;

      let tsKeyofY: t.TSTypeOperator | t.TSUnionType = t.tsTypeOperator(tsY);
      tsKeyofY.operator = 'keyof';
      if (t.isTSTypeLiteral(tsY)) {
        const keys: string[] = [];
        let doable = true;
        tsY.members.forEach(m => {
          if (t.isTSPropertySignature(m) || t.isTSMethodSignature(m)) {
            if (t.isIdentifier(m.key)) {
              keys.push(m.key.name);
            } else if (t.isStringLiteral(m.key)) {
              keys.push(m.key.value);
            } else {
              doable = false;
            }
          } else if (t.isTSIndexSignature(m)) {
            doable = false;
          }
        });
        if (doable) {
          tsKeyofY = t.tsUnionType(
            keys.map(p => t.tsLiteralType(t.stringLiteral(p)))
          );
        }
      }
      return t.tsTypeReference(
        t.identifier('Omit'),
        t.tsTypeParameterInstantiation([tsX, tsKeyofY])
      );
    } else if (t.isIdentifier(id) && id.name === '$PropertyType') {
      // $PropertyType<T, k> -> T[k]
      // TODO: $PropertyType<T, k> -> k extends string ? T[k] : never
      const [tsT, tsK] = tsTypeParameters!.params;
      if (
        t.isTSImportType(tsT) &&
        t.isTSLiteralType(tsK) &&
        t.isStringLiteral(tsK.literal)
      ) {
        tsT.qualifier = t.identifier(tsK.literal.value);
        return tsT;
      } else return t.tsIndexedAccessType(tsT, tsK);
    } else if (t.isIdentifier(id) && id.name === '$ElementType') {
      const [tsT, tsK] = tsTypeParameters!.params;
      return t.tsIndexedAccessType(tsT, tsK);
    } else if (t.isIdentifier(id) && id.name === '$Shape') {
      return t.tsTypeReference(t.identifier('Partial'), tsTypeParameters);
    } else if (t.isIdentifier(id) && id.name === '$NonMaybeType') {
      return t.tsTypeReference(t.identifier('NonNullable'), tsTypeParameters);
    } else if (t.isIdentifier(id) && id.name === '$ReadOnlySet') {
      return t.tsTypeReference(t.identifier('ReadonlySet'), tsTypeParameters);
    } else if (t.isIdentifier(id) && id.name === '$ReadOnlyMap') {
      return t.tsTypeReference(t.identifier('ReadonlyMap'), tsTypeParameters);
    } else if (t.isIdentifier(id) && id.name === '$Exports') {
      // $Exports<T> -> import(T)
      if (
        tsTypeParameters &&
        tsTypeParameters.params.length === 1 &&
        t.isTSLiteralType(tsTypeParameters.params[0]) &&
        t.isStringLiteral(tsTypeParameters.params[0].literal)
      ) {
        return t.tsImportType(tsTypeParameters.params[0].literal, null);
      } else {
        return t.tsTypeReference(
          convertFlowIdentifier(id),
          tsTypeParameters && tsTypeParameters.params.length
            ? tsTypeParameters
            : null
        );
      }
    } else if (t.isIdentifier(id) && id.name === 'Class') {
      // Class<T> -> { new(...args:any): T}
      return t.tsTypeLiteral([
        t.tsConstructSignatureDeclaration(
          null,
          [
            {
              ...t.restElement(t.identifier('args')),
              typeAnnotation: t.tsTypeAnnotation(t.tsAnyKeyword()),
            },
          ],
          tsTypeParameters !== null
            ? t.tsTypeAnnotation(tsTypeParameters!.params[0])
            : t.tsTypeAnnotation(t.tsAnyKeyword())
        ),
      ]);
    } else if (t.isIdentifier(id) && id.name === '$FlowFixMe') {
      return t.tsTypeReference(t.identifier('any'), tsTypeParameters);
    } else if (t.isIdentifier(id) && id.name === 'Object') {
      // "Object" in flow is just an alias for "any"
      return t.tsAnyKeyword();
    } else if (t.isQualifiedTypeIdentifier(id) || t.isIdentifier(id)) {
      return t.tsTypeReference(
        convertFlowIdentifier(id),
        tsTypeParameters && tsTypeParameters.params.length
          ? tsTypeParameters
          : null
      );
    }
    // for other utility types, helpers are added at top of file in Program visitor
  }

  if (t.isIntersectionTypeAnnotation(node)) {
    const flowTypes = node.types;
    return t.tsIntersectionType(
      flowTypes.map(v => {
        let tsType = convertFlowType(v);
        if (t.isTSFunctionType(tsType)) {
          tsType = t.tsParenthesizedType(tsType);
        }
        return { ...tsType, ...baseNodeProps(v) };
      })
    );
  }

  if (t.isMixedTypeAnnotation(node)) {
    return t.tsUnknownKeyword();
  }

  if (t.isNullableTypeAnnotation(node)) {
    let tsType = convertFlowType(node.typeAnnotation);
    if (t.isTSFunctionType(tsType)) {
      tsType = t.tsParenthesizedType(tsType);
    }
    // f(): ?T {} -> f(): T | null | undefined {}
    // var x: X<?T> -> var x: X<T | null | undefined>
    // var x:?T -> var x:T | null | undefined
    if (t.isTSAnyKeyword(tsType)) return tsType;
    return t.tsUnionType([tsType, t.tsUndefinedKeyword(), t.tsNullKeyword()]);
  }

  if (t.isNullLiteralTypeAnnotation(node)) {
    return t.tsNullKeyword();
  }

  if (t.isNumberLiteralTypeAnnotation(node)) {
    return t.tsLiteralType(t.numericLiteral(node.value));
  }

  if (t.isNumberTypeAnnotation(node)) {
    return t.tsNumberKeyword();
  }

  if (t.isObjectTypeAnnotation(node)) {
    return convertObjectTypeAnnotation(node);
  }

  if (t.isStringLiteralTypeAnnotation(node)) {
    return t.tsLiteralType(t.stringLiteral(node.value!));
  }

  if (t.isStringTypeAnnotation(node)) {
    return t.tsStringKeyword();
  }

  if (t.isThisTypeAnnotation(node)) {
    return t.tsThisType();
  }

  if (t.isTypeofTypeAnnotation(node)) {
    const typeOp = t.tsTypeOperator(convertFlowType(node.argument));
    typeOp.operator = 'typeof';
    return typeOp;
  }

  if (t.isUnionTypeAnnotation(node)) {
    const flowTypes = node.types;
    return t.tsUnionType(
      flowTypes.map(v => {
        let tsType = convertFlowType(v);
        if (t.isTSFunctionType(tsType)) {
          tsType = t.tsParenthesizedType(tsType);
        }
        return { ...tsType, ...baseNodeProps(v) };
      })
    );
  }

  if (t.isVoidTypeAnnotation(node)) {
    return t.tsVoidKeyword();
  }

  if (t.isFunctionTypeAnnotation(node)) {
    const { typeParams, parameters, returnType } =
      convertFunctionTypeAnnotation(node);
    return t.tsFunctionType(typeParams, parameters, returnType);
  }

  if (t.isTupleTypeAnnotation(node)) {
    const flowTypes = node.types;
    return t.tsTupleType(flowTypes.map(convertFlowType));
  }

  if (t.isSymbolTypeAnnotation(node)) {
    return t.tsSymbolKeyword();
  }

  throw new Error(`Unsupported flow type FlowType(type=${node.type})`);
}
