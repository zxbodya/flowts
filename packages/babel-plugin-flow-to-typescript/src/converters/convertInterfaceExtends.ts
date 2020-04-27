import * as t from '@babel/types';

import { convertFlowType } from './convertFlowType';
import { baseNodeProps } from '../utils/baseNodeProps';
import { convertFlowIdentifier } from './convertFlowIdentifier';

export function convertInterfaceExtends(
  node: t.InterfaceExtends | t.ClassImplements
) {
  const typeParameters = node.typeParameters;
  const typeParameterParams = typeParameters ? typeParameters.params : [];
  const parameters = t.tsTypeParameterInstantiation(
    typeParameterParams.map(item => ({
      ...convertFlowType(item),
      ...baseNodeProps(item),
    }))
  );

  return t.tsExpressionWithTypeArguments(
    convertFlowIdentifier(node.id),
    typeParameterParams.length ? parameters : null
  );
}
