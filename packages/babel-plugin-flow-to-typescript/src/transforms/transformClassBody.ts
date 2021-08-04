import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import { transformFunctionParams } from './transformFunctionParams';
import { convertTypeAnnotation } from '../converters/convertTypeAnnotation';

export function transformClassBody(path: NodePath<t.ClassBody>) {
  for (const elementPath of path.get('body')) {
    const elementNode = elementPath.node;
    if (t.isClassMethod(elementNode) || t.isClassPrivateMethod(elementNode)) {
      if (elementNode.kind === 'constructor' || elementNode.kind === 'set') {
        elementNode.returnType = null;
      }
      transformFunctionParams(
        // @ts-expect-error already checked above to have correct type
        elementPath.get('params'),
        elementNode.kind === 'set'
      );
    }

    if (
      t.isClassProperty(elementNode) ||
      t.isClassPrivateProperty(elementNode)
    ) {
      const variance = elementNode.variance;
      if (variance) {
        elementNode.readonly = variance && variance.kind === 'plus';
        elementNode.variance = null;
      }
      if (t.isTypeAnnotation(elementNode.typeAnnotation)) {
        elementNode.typeAnnotation = convertTypeAnnotation(
          elementNode.typeAnnotation
        );
      }
    }
  }
}
