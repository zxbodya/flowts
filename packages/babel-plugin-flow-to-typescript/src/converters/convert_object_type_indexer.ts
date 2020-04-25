import {
  identifier,
  ObjectTypeIndexer,
  tsIndexSignature,
  tsTypeAnnotation,
} from '@babel/types';

import { convertFlowType } from './convert_flow_type';

export function convertObjectTypeIndexer(indexer: ObjectTypeIndexer) {
  const tsIndex = indexer.id || identifier('x');
  tsIndex.typeAnnotation = tsTypeAnnotation(convertFlowType(indexer.key));
  const ret = tsIndexSignature(
    [tsIndex],
    tsTypeAnnotation(convertFlowType(indexer.value))
  );
  ret.readonly = indexer.variance && indexer.variance.kind === 'plus';
  return ret;
}
