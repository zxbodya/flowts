import * as t from '@babel/types';
import { convertFlowType } from './convertFlowType';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertDeclareVariable(node: t.DeclareVariable) {
  const id = node.id;
  if (t.isTypeAnnotation(id.typeAnnotation)) {
    id.typeAnnotation = {
      ...t.tsTypeAnnotation(convertFlowType(id.typeAnnotation.typeAnnotation)),
      ...baseNodeProps(id.typeAnnotation),
    };
  }
  return t.variableDeclaration('var', [t.variableDeclarator(id)]);
}
