/* tslint:disable:no-shadowed-variable */
import * as babel from '@babel/core';
import { NodePath } from '@babel/core';
import traverse from '@babel/traverse';

import {
  blockStatement,
  callExpression,
  CommentBlock,
  DeclareClass,
  DeclareExportAllDeclaration,
  DeclareExportDeclaration,
  DeclareFunction,
  DeclareInterface,
  DeclareModule,
  DeclareModuleExports,
  DeclareOpaqueType,
  DeclareTypeAlias,
  DeclareVariable,
  exportDefaultDeclaration,
  expressionStatement,
  identifier,
  importDeclaration,
  importSpecifier,
  isDeclareExportDeclaration,
  isIdentifier,
  isOpaqueType,
  memberExpression,
  objectExpression,
  objectMethod,
  objectProperty,
  OpaqueType,
  program,
  Statement,
  stringLiteral,
  tsAsExpression,
  tsTypeReference,
} from '@babel/types';
import * as recast from '@zxbodya/recast';
import * as fs from 'fs';
import * as prettier from 'prettier';
import recastPlugin from './recastPlugin';

import { tsLibDefinitions } from './tsLibDefinitions';

type Declaratios = Map<string, { paths: NodePath[]; fix: Statement[] }>;

function print(
  generatedAst: recast.types.ASTNode,
  prettierConfig: prettier.Options | undefined
) {
  const code = recast.print(generatedAst);

  return prettier.format(code.code, prettierConfig);
}

const libGlobalsIndex = new Map<string, string>(
  ([] as Array<[string, string]>).concat(
    ...tsLibDefinitions.map(tsLibDefinition =>
      [...tsLibDefinition.declarations.allNames.keys()].map(
        key => [key, tsLibDefinition.name] as [string, string]
      )
    )
  )
);

async function main(
  inputPath: string,
  outputPath: string,
  referenceName: string,
  isLib: boolean
) {
  console.log(`geenratign rules stub for ${inputPath}`);

  const sharedParserPlugins = [
    'jsx',
    'classProperties',
    'objectRestSpread',
    'optionalChaining',
    'dynamicImport',
  ] as const;

  const source = fs.readFileSync(inputPath, { encoding: 'utf8' });
  const flowAst = babel.parseSync(source, {
    ast: true,
    plugins: [recastPlugin],
    parserOpts: {
      plugins: ['flow', ...sharedParserPlugins],
    },
    filename: inputPath,
  });

  if (flowAst === null) {
    throw new Error('sourceAst === null');
  }
  const globals: Declaratios = new Map();
  let isModule = false;
  let moduleName: string;
  const modules: { [name: string]: Declaratios } = {};
  let module: Declaratios;
  let hasExports = false;
  const defaultModule: Declaratios = new Map();

  function register(target: Declaratios, name: string, path: NodePath) {
    let ent = target.get(name);
    if (ent === undefined) {
      ent = { paths: [], fix: [] };
      target.set(name, ent);
    }
    ent.paths.push(path);
  }

  const registerGlobal = (name: string, path: NodePath) =>
    register(globals, name, path);
  const registerModule = (name: string, path: NodePath) =>
    register(module, name, path);
  const registerDefaultModule = (name: string, path: NodePath) => {
    hasExports = true;
    register(defaultModule, name, path);
  };

  traverse(flowAst, {
    DeclareClass(path: NodePath<DeclareClass>) {
      if (!isModule) {
        registerGlobal(path.node.id.name, path);
      } else {
        if (!isDeclareExportDeclaration(path.parent)) {
          registerModule(path.node.id.name, path);
        }
      }
    },
    DeclareFunction(path: NodePath<DeclareFunction>) {
      if (!isModule) {
        registerGlobal(path.node.id.name, path);
      } else {
        if (!isDeclareExportDeclaration(path.parent)) {
          registerModule(path.node.id.name, path);
        }
      }
    },
    DeclareInterface(path: NodePath<DeclareInterface>) {
      if (!isModule) {
        registerGlobal(path.node.id.name, path);
      } else {
        if (!isDeclareExportDeclaration(path.parent)) {
          registerModule(path.node.id.name, path);
        }
      }
    },
    DeclareTypeAlias(path: NodePath<DeclareTypeAlias>) {
      if (!isModule) {
        registerGlobal(path.node.id.name, path);
      } else {
        if (!isDeclareExportDeclaration(path.parent)) {
          registerModule(path.node.id.name, path);
        }
      }
    },
    DeclareOpaqueType(path: NodePath<DeclareOpaqueType>) {
      if (!isModule) {
        registerGlobal(path.node.id.name, path);
      } else {
        if (!isDeclareExportDeclaration(path.parent)) {
          registerModule(path.node.id.name, path);
        }
      }
    },
    DeclareVariable(path: NodePath<DeclareVariable>) {
      if (!isModule) {
        registerGlobal(path.node.id.name, path);
      } else {
        if (!isDeclareExportDeclaration(path.parent)) {
          registerModule(path.node.id.name, path);
        }
      }
    },
    DeclareModule: {
      enter(path: NodePath<DeclareModule>) {
        isModule = true;
        moduleName = isIdentifier(path.node.id)
          ? path.node.id.name
          : path.node.id.value;
        module = new Map();
      },
      exit(path: NodePath<DeclareModule>) {
        isModule = false;
        modules[moduleName] = module;
      },
    },
    DeclareModuleExports(path: NodePath<DeclareModuleExports>) {
      console.log('module.exports are treated as default export');
      if (!isModule) {
        registerDefaultModule('default', path);
      } else {
        registerModule('default', path);
      }
    },
    DeclareExportDeclaration(path: NodePath<DeclareExportDeclaration>) {
      if (isModule) {
        const declaration = path.get('declaration') as NodePath;
        if (
          declaration.isDeclareClass() ||
          declaration.isDeclareFunction() ||
          declaration.isDeclareInterface() ||
          declaration.isTypeAlias() ||
          declaration.isDeclareVariable()
        ) {
          if (!isModule) {
            registerDefaultModule(declaration.node.id.name, path);
          } else {
            registerModule(declaration.node.id.name, path);
          }
        } else if (isOpaqueType(declaration.node)) {
          const decl = declaration as NodePath<OpaqueType>;
          // todo: improve @babel/types to include path.isOpaqueType()
          if (!isModule) {
            registerDefaultModule(decl.node.id.name, path);
          } else {
            registerModule(decl.node.id.name, path);
          }
        } else if (path.node.default) {
          if (!isModule) {
            registerDefaultModule('default', path);
          } else {
            registerModule('default', path);
          }
        } else {
          throw path.buildCodeFrameError('not implemented');
        }
      } else {
        throw path.buildCodeFrameError('not implemented');
      }
    },
    DeclareExportAllDeclaration(path: NodePath<DeclareExportAllDeclaration>) {
      throw path.buildCodeFrameError('not implemented');
    },
  });

  if (hasExports) {
    modules.exports = defaultModule;
  }

  for (const [globalName, state] of globals) {
    if (isLib) {
      const libName = libGlobalsIndex.get(globalName);
      if (libName) {
        state.fix.push(
          expressionStatement(
            callExpression(
              memberExpression(identifier('context'), identifier('lib'), false),
              [stringLiteral(libName)]
            )
          )
        );
      }
    }
    // console.log(globals, modules);
    // very often globals are re-exported as aliases in modules below
    const parts = globalName.split('$');
    if (parts.length === 2) {
      const moduleName = parts[0].toLowerCase();
      const exportName = parts[1];
      if (modules[moduleName] && modules[moduleName].has(exportName)) {
        state.fix.push(
          expressionStatement(
            callExpression(
              memberExpression(
                identifier('context'),
                identifier('importFlow'),
                false
              ),
              [stringLiteral(moduleName), stringLiteral(exportName)]
            )
          )
        );
      }
    }
    state.fix.push(
      expressionStatement(
        callExpression(
          memberExpression(
            identifier('context'),
            identifier('warnOnce'),
            false
          ),
          [stringLiteral(`Rule for global "${globalName}" is not verified`)]
        )
      )
    );
  }

  function getNodeComment(path: NodePath) {
    const blocks = [
      '',
      `${referenceName || inputPath}${
        path.node.loc
          ? `:${path.node.loc.start.line}:${path.node.loc.start.column}`
          : ''
      }`,
      '',
    ];

    blocks.push(path.getSource().replace(/(?:\/\*|\*\/)/g, ''));

    blocks.push('');
    return {
      type: 'CommentBlock',
      value: blocks.join('\n'),
    };
  }

  const generatedAst = program(
    [
      importDeclaration(
        [importSpecifier(identifier('RuleSet'), identifier('RuleSet'))],
        stringLiteral('../../ruleTypes')
      ),

      exportDefaultDeclaration(
        tsAsExpression(
          objectExpression([
            objectProperty(
              stringLiteral('globals'),
              objectExpression(
                [...globals.entries()].map(
                  ([declarationName, { paths, fix }]) => ({
                    ...objectMethod(
                      'method',
                      stringLiteral(declarationName),
                      [identifier('context')],
                      blockStatement(fix)
                    ),
                    comments: paths.map(path => {
                      return getNodeComment(path);
                    }),
                  })
                )
              )
            ),
            objectProperty(
              stringLiteral('modules'),
              objectExpression(
                Object.entries(modules).map(([name, declarations]) =>
                  objectProperty(
                    stringLiteral(name),
                    objectExpression([
                      objectProperty(
                        stringLiteral('exports'),
                        objectExpression(
                          [...declarations.entries()].map(
                            ([declarationName, { paths }]) => ({
                              ...objectMethod(
                                'method',
                                stringLiteral(declarationName),
                                [identifier('context')],
                                blockStatement([
                                  expressionStatement(
                                    callExpression(
                                      memberExpression(
                                        identifier('context'),
                                        identifier('warnOnce'),
                                        false
                                      ),
                                      [
                                        stringLiteral(
                                          `Rule for export "${declarationName}" in module "${name}" is not verified`
                                        ),
                                      ]
                                    )
                                  ),
                                ])
                              ),
                              comments: paths.map(path => {
                                return getNodeComment(path);
                              }),
                            })
                          )
                        )
                      ),
                    ])
                  )
                )
              )
            ),
          ]),
          tsTypeReference(identifier('RuleSet'))
        )
      ),
    ],
    undefined,
    'module'
  );

  const prettierConfig = (await prettier.resolveConfig('./')) || {};
  prettierConfig.parser = 'typescript';
  const result = print(generatedAst, prettierConfig);
  fs.writeFileSync(outputPath, result);
}

main(process.argv[2], process.argv[3], process.argv[4], true).then(
  () => {
    console.log('done');
  },
  e => {
    console.error(e);
  }
);
