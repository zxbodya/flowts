import * as t from '@babel/types';
import { convertTSType } from './convertTSType';
import { baseNodeProps } from '../utils/baseNodeProps';

export function convertTSTypeParameter(
  node: t.TSTypeParameter
): t.TypeParameter {
  return {
    ...t.typeParameter(
      node.constraint &&
        t.typeAnnotation({
          ...baseNodeProps(node.constraint),
          ...convertTSType(node.constraint),
        }),
      node.default && {
        ...baseNodeProps(node.default),
        ...convertTSType(node.default),
      }
    ),
    name: node.name,
  };
}
