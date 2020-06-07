import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { convertTypeParameterDeclaration } from '../converters/convertTypeParameterDeclaration';
import { transformFunctionParams } from '../transforms/transformFunctionParams';
import { replaceWith } from '../utils/replaceWith';
import { PluginPass } from '../types';

export function ArrowFunctionExpression(
  path: NodePath<t.ArrowFunctionExpression>,
  state: PluginPass
) {
  transformFunctionParams(path.get('params'));
  // @ts-expect-error todo: add babel types
  if (path.node.predicate) {
    // @ts-expect-error todo: add babel types
    delete path.node.predicate;
  }
  if (t.isTypeParameterDeclaration(path.node.typeParameters)) {
    const tsTypeParameterDeclaration = convertTypeParameterDeclaration(
      path.node.typeParameters
    );
    if (state.opts.isJSX) {
      // workaround for tsx files to differentiate type parameters from jsx
      tsTypeParameterDeclaration.params[0].constraint = t.tsAnyKeyword();
    }
    replaceWith(path.get('typeParameters'), tsTypeParameterDeclaration);
  }
}
