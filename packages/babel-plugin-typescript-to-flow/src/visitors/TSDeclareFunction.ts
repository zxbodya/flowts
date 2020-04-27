import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

import { replaceWith } from '../utils/replaceWith';
import { PluginPass } from '../types';
import { convertFunctionTypeAnnotation } from '../converters/convertFunctionTypeAnnotation';

export function TSDeclareFunction(
  path: NodePath<t.TSDeclareFunction>,
  state: PluginPass
) {
  const {
    typeParams,
    parameters,
    rest,
    returnType,
  } = convertFunctionTypeAnnotation(path.node);

  if (path.node.declare) {
    const id = t.identifier(path.node.id!.name);
    id.typeAnnotation = t.typeAnnotation(
      t.functionTypeAnnotation(
        typeParams,
        parameters,
        rest,
        returnType ? returnType : t.anyTypeAnnotation()
      )
    );
    const replacement = t.declareFunction(id);
    replaceWith(path, replacement);
  } else {
    throw new Error('todo:');
  }
}
