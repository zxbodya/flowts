import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import { transformFunctionParams } from './transformFunctionParams';

export function transformClassBody(path: NodePath<t.ClassBody>) {
  for (const elementPath of path.get('body')) {
    if (elementPath.isClassMethod()) {
      if (elementPath.node.kind === 'constructor') {
        elementPath.get('returnType').remove();
      }
      transformFunctionParams(elementPath.get('params'));
    }

    if (elementPath.isClassProperty()) {
      // @ts-expect-error todo: missing proppery in babel
      const variance = elementPath.node.variance;
      if (variance) {
        elementPath.node.readonly = variance && variance.kind === 'plus';
        // @ts-expect-error
        elementPath.node.variance = null;
      }
    }

    // todo: commented out because it is not yet in ts
    // todo: missing method in babel
    // if (isClassPrivateMethod(elementPath.node)) {
    // }

    // todo: missing method in babel
    // if (isClassPrivateProperty(elementPath.node)) {
    //   elementPath.node.variance = null;
    // }
  }
}
