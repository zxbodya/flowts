import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import { convertFunctionTypeAnnotation } from '../converters/convertFunctionTypeAnnotation';

export function transformClassBody(path: NodePath<t.ClassBody>) {
  for (const elementPath of path.get('body')) {
    if (elementPath.isClassMethod()) {
      // todo:
      ///transformFunctionParams(elementPath.get('params'));
    }

    const node: t.Node = elementPath.node;
    if (t.isClassProperty(node)) {
      if (node.readonly) {
        // @ts-ignore todo: @babel/types
        node.variance = t.variance('plus');
        node.readonly = null;
      }
    }

    if (t.isTSDeclareMethod(node)) {
      // todo: might be not used
      const { typeParams, parameters, rest, returnType } =
        convertFunctionTypeAnnotation(node);
      let key: t.Identifier | t.StringLiteral;
      if (t.isIdentifier(node.key)) {
        key = t.identifier(node.key.name);
      } else if (t.isStringLiteral(node.key)) {
        key = node.key;
      } else {
        throw new Error('todo:');
      }
      const replacement = t.objectTypeProperty(
        key,
        t.functionTypeAnnotation(
          typeParams,
          parameters,
          rest,
          returnType ? returnType : t.anyTypeAnnotation()
        )
      );
      if (node.kind === 'get' || node.kind === 'set') {
        replacement.kind = node.kind;
      } else {
        replacement.kind = 'init';
      }
      // @ts-expect-error todo: @babel/types
      replacement.static = node.static;
      replacement.optional = !!node.optional;
      replacement.method = true;
      elementPath.replaceWith(replacement);
    }
  }
}
