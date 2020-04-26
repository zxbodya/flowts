import * as t from '@babel/types';

import { convertFlowType } from './convert_flow_type';

export function convertObjectTypeIndexer(indexer: t.ObjectTypeIndexer) {
  const tsIndex = indexer.id || t.identifier('x');
  tsIndex.typeAnnotation = t.tsTypeAnnotation(convertFlowType(indexer.key));
  const ret = t.tsIndexSignature(
    [tsIndex],
    t.tsTypeAnnotation(convertFlowType(indexer.value))
  );
  ret.readonly = indexer.variance && indexer.variance.kind === 'plus';
  return ret;
}
