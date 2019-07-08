import { PluginObj, Visitor } from '@babel/core';
import traverse, { Node, NodePath } from '@babel/traverse';
import {
  identifier,
  ImportDeclaration,
  importDeclaration,
  importSpecifier,
  isImportDeclaration,
  isImportNamespaceSpecifier,
  isTSQualifiedName,
  Program,
  stringLiteral,
} from '@babel/types';
import rules from "./rules";

const visitor: Visitor = {
  Program: {
    exit(programPath: NodePath<Program>) {
      const { scope } = programPath;

      for (const [key, binding] of Object.entries(scope.bindings)) {
        if (binding.kind === 'module') {
          if (
            isImportNamespaceSpecifier(binding.path.node) &&
            isImportDeclaration(binding.path.parent)
          ) {
            const moduleName = binding.path.parent.source.value;
            for (const rule of rules) {
              if (
                rule.source.type === 'module' &&
                rule.source.module === moduleName &&
                rule.target.type === 'module' &&
                rule.target.module === moduleName
              ) {
                for (const referencePath of binding.referencePaths) {
                  if (
                    isTSQualifiedName(referencePath.parentPath.node) &&
                    rule.source.exportName ===
                      referencePath.parentPath.node.right.name
                  ) {
                    referencePath.parentPath.node.right.name =
                      rule.target.exportName;
                  }
                }
              }
            }
          }
        }
      }
      // get references from internal modules to be changed
      // rename if needed
      // replace builtins by imports

      const newImports = new Map<string, Set<string>>();
      const renamedImports = new Map<string, Map<string, string>>();
      const renamedReference = new Map<string, string>();

      function addImport(module: string, name: string) {
        let moduleImports = newImports.get(module);
        if (!moduleImports) {
          moduleImports = new Set();
          newImports.set(module, moduleImports);
        }
        moduleImports.add(name);
      }

      function renameImport(module: string, from: string, to: string) {
        let renames = renamedImports.get(module);
        if (!renames) {
          renames = new Map();
          renamedImports.set(module, renames);
        }
        renames.set(from, to);
      }

      for (const { source, target } of rules) {
        if (source.type === 'global') {
          if (scope.hasGlobal(source.globalName)) {
            addImport(target.module, target.exportName);
            if (source.globalName !== target.exportName) {
              renamedReference.set(source.globalName, target.exportName);
            }
          }
        }
        if (source.type === 'module') {
          if (scope.hasReference(source.exportName)) {
            renameImport(target.module, source.exportName, target.exportName);
            renamedReference.set(source.exportName, target.exportName);
          }
        }
      }

      const imports = programPath
        .get('body')
        .filter(v => v.isImportDeclaration()) as Array<
        NodePath<ImportDeclaration>
      >;

      for (const imp of imports) {
        const names = newImports.get(imp.node.source.value);
        if (names) {
          const isNotNamespace = imp.node.specifiers.every(
            sp => !isImportNamespaceSpecifier(sp)
          );
          if (isNotNamespace) {
            imp.node.specifiers.push(
              ...[...names].map(name =>
                importSpecifier(identifier(name), identifier(name))
              )
            );
            newImports.delete(imp.node.source.value);
          }
        }
      }
      for (const [module, names] of newImports) {
        programPath.node.body.unshift(
          importDeclaration(
            [...names].map(name =>
              importSpecifier(identifier(name), identifier(name))
            ),
            stringLiteral(module)
          )
        );
      }
      // rename global variables

      traverse(programPath.parent, {
        Identifier(id) {
          const newName = renamedReference.get(id.node.name);
          if (newName) {
            id.node.name = newName;
          }
        },
      });
    },
  },
};

export default () =>
  ({
    name: 'ts-types-plugin',
    visitor,

    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push('typescript');
      parserOpts.plugins.push('jsx');
      parserOpts.plugins.push('classProperties');
      parserOpts.plugins.push('objectRestSpread');
      parserOpts.plugins.push('optionalChaining');
      parserOpts.plugins.push('dynamicImport');
    },
  } as PluginObj);
