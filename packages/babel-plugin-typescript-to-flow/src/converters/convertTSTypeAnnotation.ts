import * as t from '@babel/types';
import { convertTSType } from './convertTSType';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertTSTypeAnnotation(
  node: t.TSTypeAnnotation
): t.TypeAnnotation {
  return t.typeAnnotation({
    ...convertTSType(node.typeAnnotation),
    ...baseNodeProps(node.typeAnnotation),
  });
}
