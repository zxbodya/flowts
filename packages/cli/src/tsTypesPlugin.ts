/* tslint:disable:max-classes-per-file */
import { PluginObj, Visitor } from '@babel/core';
import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';

import rules from './rules';

import { GlobalFixContext, NamedFixContext } from './ruleTypes';

const visitor: Visitor = {
  Program: {
    exit(programPath: NodePath<t.Program>) {
      const { scope } = programPath;

      interface BaseImport {
        local: string;
        referencePaths: NodePath[];
      }

      interface NamedImport extends BaseImport {
        importSpecifier?: t.ImportSpecifier;
        imported: string;
      }
      interface DefaultImport extends BaseImport {
        importDefaultSpecifier?: t.ImportDefaultSpecifier;
      }
      interface NamespaceImport extends BaseImport {
        importNamespaceSpecifier?: t.ImportNamespaceSpecifier;
      }

      interface ModuleState {
        default: DefaultImport[];
        named: NamedImport[];
        namespace: NamespaceImport[];
        importDeclarations: Set<t.ImportDeclaration>;
        namespaceImportDeclarations: Set<t.ImportDeclaration>;
      }
      const importState = new Map<string, ModuleState>();

      for (const [key, binding] of Object.entries(scope.bindings)) {
        if (binding.kind === 'module') {
          if (t.isImportDeclaration(binding.path.parent)) {
            const moduleName = binding.path.parent.source.value;

            let moduleState = importState.get(moduleName);
            if (!moduleState) {
              moduleState = {
                importDeclarations: new Set(),
                namespaceImportDeclarations: new Set(),
                default: [],
                named: [],
                namespace: [],
              } as ModuleState;
              importState.set(moduleName, moduleState);
            }
            if (t.isImportDefaultSpecifier(binding.path.node)) {
              moduleState.importDeclarations.add(binding.path.parent);
              moduleState.default.push({
                local: binding.path.node.local.name,
                referencePaths: binding.referencePaths,
                importDefaultSpecifier: binding.path.node,
              });
            }
            if (t.isImportSpecifier(binding.path.node)) {
              moduleState.importDeclarations.add(binding.path.parent);
              moduleState.named.push({
                local: binding.path.node.local.name,
                imported: binding.path.node.imported.name,
                referencePaths: binding.referencePaths,
                importSpecifier: binding.path.node,
              });
            }
            if (t.isImportNamespaceSpecifier(binding.path.node)) {
              moduleState.namespaceImportDeclarations.add(binding.path.parent);
              moduleState.namespace.push({
                local: binding.path.node.local.name,
                referencePaths: binding.referencePaths,
                importNamespaceSpecifier: binding.path.node,
              });
            }
          }
        }
      }

      abstract class BaseContext {
        public referencePaths: NodePath<any>[];
        constructor(references: NodePath<any>[]) {
          this.referencePaths = references;
        }
      }

      class GlobalContext extends BaseContext implements GlobalFixContext {
        public import(moduleName: string, exportName: string): void {
          let moduleState = importState.get(moduleName);
          if (!moduleState) {
            moduleState = {
              importDeclarations: new Set(),
              namespaceImportDeclarations: new Set(),
              default: [],
              named: [],
              namespace: [],
            };
            importState.set(moduleName, moduleState);
          }
          moduleState.named.push({
            imported: exportName,
            local: exportName,
            referencePaths: this.referencePaths,
          });

          for (const path of this.referencePaths) {
            if (path.isIdentifier()) {
              path.node.name = exportName;
            } else {
              throw new Error('Unexpected reference of type' + path.node.type);
            }
          }
        }
        public importFlow(moduleName: string, exportName: string): void {
          this.import(moduleName, exportName);
        }

        lib(...libs: string[]): void {}
      }

      for (const [globalName, globalFix] of Object.entries(rules.globals)) {
        if (scope.hasGlobal(globalName)) {
          // tslint:disable-next-line:prefer-const

          const references: Array<NodePath<t.Identifier>> = [];
          programPath.traverse({
            // todo: ensure only global references added
            Identifier(path: NodePath<t.Identifier>) {
              if (path.node.name === globalName) {
                references.push(path);
              }
            },

            Scopable(path) {
              if (path.scope.hasOwnBinding(globalName)) {
                path.skip();
              }
            },
          });

          const context = new GlobalContext(references);
          globalFix(context);
        }
      }

      class NamedImportContext extends BaseContext implements NamedFixContext {
        public moduleName: string;
        public oldName: string;

        constructor(
          moduleName: string,
          oldName: string,
          references: NodePath[]
        ) {
          super(references);
          this.oldName = oldName;
          this.moduleName = moduleName;
        }

        public renameExport(newExportName: string): void {
          const moduleState = importState.get(this.moduleName)!;
          for (const n of moduleState.named) {
            if (n.imported === this.oldName) {
              n.imported = newExportName;
              // todo: theoretically conflicts are possible
              n.local = newExportName;
              if (n.importSpecifier) {
                n.importSpecifier.imported.name = newExportName;
                n.importSpecifier.local.name = newExportName;
              }
            }
          }

          for (const path of this.referencePaths) {
            if (path.isIdentifier()) {
              path.node.name = newExportName;
            } else {
              throw new Error('Unexpected reference of type' + path.node.type);
            }
          }
        }
      }

      class NamespaceImportContext extends BaseContext
        implements NamedFixContext {
        public moduleName: string;
        private oldName: string;
        constructor(
          moduleName: string,
          oldName: string,
          references: NodePath[]
        ) {
          super(references);
          this.oldName = oldName;
          this.moduleName = moduleName;
        }

        public renameExport(newExportName: string): void {
          for (const path of this.referencePaths) {
            const node = path.node;
            if (t.isTSQualifiedName(node)) {
              node.right.name = newExportName;
            } else if (t.isMemberExpression(node)) {
              node.property.name = newExportName;
            } else {
              throw new Error('Unexpected reference of type' + path.node.type);
            }
          }
        }
      }

      for (const [moduleName, moduleRules] of Object.entries(rules.modules)) {
        const moduleState = importState.get(moduleName);
        if (moduleState) {
          for (const namedImport of moduleState.named) {
            const rule = moduleRules.exports[namedImport.imported];
            if (rule) {
              rule(
                new NamedImportContext(
                  moduleName,
                  namedImport.imported,
                  namedImport.referencePaths
                )
              );
            }
          }

          for (const namedImport of moduleState.namespace) {
            for (const path of namedImport.referencePaths) {
              if (t.isTSQualifiedName(path.parent)) {
                const rule = moduleRules.exports[path.parent.right.name];
                if (rule) {
                  rule(
                    new NamespaceImportContext(
                      moduleName,
                      path.parent.right.name,
                      [path.parentPath]
                    )
                  );
                }
              }
              if (t.isMemberExpression(path.parent)) {
                const rule = moduleRules.exports[path.parent.property.name];
                if (rule) {
                  rule(
                    new NamespaceImportContext(
                      moduleName,
                      path.parent.property.name,
                      [path.parentPath]
                    )
                  );
                }
              }
            }
          }
        }
      }

      const body = programPath.get('body') as NodePath[];
      const imports = body.filter(st => st.isImportDeclaration()) as Array<
        NodePath<t.ImportDeclaration>
      >;
      let after: NodePath<any>;
      if (imports.length > 0) {
        after = imports[imports.length - 1];
      }

      function insertImport(im: t.Node | t.Node[]) {
        if (after) {
          after.insertAfter(im);
        } else {
          body[0].insertBefore(im);
        }
      }

      for (const [moduleName, moduleState] of importState) {
        for (const ni of moduleState.namespace) {
          if (!ni.importNamespaceSpecifier) {
            const namespaceSpecifier = t.importNamespaceSpecifier(
              t.identifier(ni.local)
            );
            const newImport = t.importDeclaration(
              [namespaceSpecifier],
              t.stringLiteral(moduleName)
            );
            ni.importNamespaceSpecifier = namespaceSpecifier;
            moduleState.importDeclarations.add(newImport);
            insertImport(newImport);
          }
        }

        const newNamedSpecifiers = [];
        for (const n of moduleState.named) {
          if (!n.importSpecifier) {
            const specifier = t.importSpecifier(
              t.identifier(n.local),
              t.identifier(n.imported)
            );

            n.importSpecifier = specifier;
            newNamedSpecifiers.push(specifier);
          }
        }

        if (newNamedSpecifiers.length) {
          let added = false;
          for (const id of moduleState.importDeclarations) {
            if (
              !t.isImportNamespaceSpecifier(id.specifiers[0]) &&
              id.importKind === 'type'
            ) {
              id.specifiers.push(...newNamedSpecifiers);
              added = true;
              break;
            }
          }
          if (!added) {
            const newImport = t.importDeclaration(
              newNamedSpecifiers,
              t.stringLiteral(moduleName)
            );
            newImport.importKind = 'type';
            moduleState.importDeclarations.add(newImport);
            insertImport(newImport);
          }
        }

        const newDefaultSpecifiers = [];
        for (const n of moduleState.default) {
          if (!n.importDefaultSpecifier) {
            const specifier = t.importDefaultSpecifier(t.identifier(n.local));

            n.importDefaultSpecifier = specifier;
            newDefaultSpecifiers.push(specifier);
          }
        }

        if (newDefaultSpecifiers.length) {
          for (const id of moduleState.importDeclarations) {
            if (
              !t.isImportNamespaceSpecifier(id.specifiers[0]) &&
              id.specifiers.every(sp => !t.isImportDefaultSpecifier(sp))
            ) {
              id.specifiers.push(newDefaultSpecifiers[0]);
              newDefaultSpecifiers.splice(0, 1);
              if (newDefaultSpecifiers.length === 0) {
                break;
              }
            }
          }
          for (const ds of newDefaultSpecifiers) {
            const newImport = t.importDeclaration(
              [ds],
              t.stringLiteral(moduleName)
            );
            moduleState.importDeclarations.add(newImport);
            insertImport(newImport);
          }
        }
      }
    },
  },
};

export default (babel: any, opts: any) => {
  if (typeof opts.isJSX === 'undefined') {
    opts.isJSX = true;
  }
  return {
    name: 'ts-types-plugin',
    visitor,

    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push('typescript');
      if (opts.isJSX) {
        parserOpts.plugins.push('jsx');
      }
      parserOpts.plugins.push('classProperties');
      parserOpts.plugins.push('objectRestSpread');
      parserOpts.plugins.push('optionalChaining');
      parserOpts.plugins.push('dynamicImport');
    },
  } as PluginObj;
};
