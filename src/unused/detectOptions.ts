import * as babel from '@babel/core';
import traverse, { NodePath } from '@babel/traverse';
import { isIdentifier, Program } from '@babel/types';
import { sharedParserPlugins } from '../sharedParserPlugins';

function getReferenceExportName(ref: NodePath): string | undefined {
  let name;
  if (ref.parentPath.isMemberExpression()) {
    if (isIdentifier(ref.parentPath.node.property)) {
      name = ref.parentPath.node.property.name;
    } else {
      ref.parentPath.buildCodeFrameError(
        'unexpected property in member expression'
      );
    }
  } else if (ref.parentPath.isQualifiedTypeIdentifier()) {
    name = ref.parentPath.node.id.name;
  }
  return name;
}

export interface SourceOptions {
  imports: Map<
    string,
    {
      exports: Set<string>;
      default?: Set<string>;
    }
  >;
}

export function detectOptions(source: string, filename: string): SourceOptions {
  const flowAst = babel.parseSync(source, {
    babelrc: false,
    ast: true,
    parserOpts: {
      plugins: ['flow', 'jsx', ...sharedParserPlugins],
    },
    filename,
  });

  if (flowAst === null) {
    throw new Error(
      'babel.parseSync returned null - probably there is some configuration error'
    );
  }

  const imports = new Map<
    string,
    { exports: Set<string>; default?: Set<string> }
  >();

  traverse(flowAst, {
    Program(path: NodePath<Program>) {
      for (const [bindingName, binding] of Object.entries(
        path.scope.bindings
      )) {
        if (binding.kind === 'module') {
          let moduleName: string;
          if (binding.path.parentPath.isImportDeclaration()) {
            moduleName = binding.path.parentPath.node.source.value;
          } else {
            throw path.buildCodeFrameError(
              `Module binding "${bindingName}", expected to be part of import declaration`
            );
          }

          let module = imports.get(moduleName);
          if (!module) {
            module = { exports: new Set() };
            imports.set(moduleName, module);
          }

          if (binding.path.isImportDefaultSpecifier()) {
            const defaultUsages = new Set<string>();
            for (const ref of binding.referencePaths) {
              const name = getReferenceExportName(ref);
              if (name) {
                defaultUsages.add(name);
              }
            }
            module.default = defaultUsages;
          }

          if (binding.path.isImportNamespaceSpecifier()) {
            for (const ref of binding.referencePaths) {
              const name = getReferenceExportName(ref);
              if (name) {
                module.exports.add(name);
              }
            }
          }

          if (binding.path.isImportSpecifier()) {
            module.exports.add(bindingName);
          }
        }
      }
    },
  });
  return { imports };
}
