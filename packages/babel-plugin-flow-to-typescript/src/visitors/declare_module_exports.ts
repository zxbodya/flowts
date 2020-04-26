import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import { convertFlowType } from '../converters/convert_flow_type';
import { baseNodeProps } from '../utils/baseNodeProps';

export function DeclareModuleExports(path: NodePath<t.DeclareModuleExports>) {
  const node = path.node;

  const tsType = convertFlowType(node.typeAnnotation.typeAnnotation);

  const aliasId = t.identifier('__exports');

  path.replaceWithMultiple([
    t.variableDeclaration('let', [
      t.variableDeclarator({
        ...aliasId,
        typeAnnotation: {
          ...t.tsTypeAnnotation(tsType),
          ...baseNodeProps(node.typeAnnotation),
        },
      }),
    ]),
    t.tsExportAssignment(aliasId),
  ]);
}
