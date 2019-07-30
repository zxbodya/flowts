import template, { TemplateBuilderOptions } from '@babel/template';
import {
  stringLiteral,
  ExportDefaultDeclaration,
  ObjectExpression,
  CallExpression,
  BlockStatement,
  Expression,
  ObjectMethod,
  objectMethod,
  identifier,
  blockStatement,
  Statement,
  objectProperty,
  objectExpression,
  ObjectProperty,
  arrayExpression,
  ArrayExpression,
  File,
  ExpressionStatement,
} from '@babel/types';
import traverse, { NodePath } from '@babel/traverse';
import * as recast from '@zxbodya/recast';
import * as prettier from 'prettier';

let templateOpts: TemplateBuilderOptions = {
  plugins: ['typescript'],
  sourceType: 'module',
};
const buildRuleTemplate = template.program(
  `
import { RuleSet } from '../../ruleTypes';

export default {
  globals: {},

  modules: {},
} as RuleSet;
`,
  templateOpts
);

const buildTestTemplate = template.program(
  `
import plugin from '../../tsTypesPlugin';
import { createTransform } from '../../createTransform';

const transform = createTransform([plugin]);

describe(%%moduleName%%, () => {
  describe('globals', () => {
    test('has no globals', () => {});
  });
  describe('modules', () => {
    test('has no modules', () => {});
  });
});
`,
  templateOpts
);

function print(
  generatedAst: recast.types.ASTNode,
  prettierConfig: prettier.Options | undefined
) {
  const code = recast.print(generatedAst);
  return prettier.format(code.code, prettierConfig);
}

function ifJestCall(
  functionName: string,
  path: NodePath,
  fn: (name: string, body: NodePath<BlockStatement>) => void
) {
  if (path.isCallExpression()) {
    let callee = path.get('callee');
    if (callee.isIdentifier()) {
      if (callee.node.name === functionName) {
        let args = path.get('arguments');
        if (args.length === 2) {
          const testNameArg = args[0];
          const testFnArg = args[1];
          if (
            testNameArg.isStringLiteral() &&
            (testFnArg.isArrowFunctionExpression() ||
              testFnArg.isFunctionExpression())
          ) {
            const name = testNameArg.node.value;

            let body = testFnArg.get('body') as NodePath<
              BlockStatement | Expression
            >;
            if (!body || !body.isBlockStatement()) {
              throw body.buildCodeFrameError(
                'test body expected to be block statement'
              );
            }
            fn(name, body);
          }
        }
      }
    }
  }
}

function findJestCalls(
  functionName: string,
  globalsDescribeBody: NodePath<BlockStatement>
): Map<string, NodePath<BlockStatement>> {
  const tests = new Map();
  for (const path of globalsDescribeBody.get('body') as NodePath[]) {
    if (path.isExpressionStatement()) {
      ifJestCall(functionName, path.get('expression'), (name, body) => {
        tests.set(name, body);
      });
    }
  }
  return tests;
}

function getModuleDescr(moduleObj: NodePath<ObjectExpression>) {
  let libsPath: NodePath<ArrayExpression> | undefined;
  let exportsPath: NodePath<ObjectExpression> | undefined;
  for (const prop of moduleObj.get('properties')) {
    if (!prop.isObjectProperty()) {
      throw prop.buildCodeFrameError(
        'modules can be defined only as properties in "modules" object'
      );
    }
    const value = prop.get('value');
    let key = prop.get('key') as NodePath;
    const keyName = key.isIdentifier()
      ? key.node.name
      : key.isStringLiteral()
      ? key.node.value
      : undefined;
    if (keyName === 'libs') {
      if (!value.isArrayExpression()) {
        throw value.buildCodeFrameError(
          'only array expression is supported for "libs" property'
        );
      }
      libsPath = value;
    }
    if (keyName === 'exports') {
      if (!value.isObjectExpression()) {
        throw value.buildCodeFrameError(
          'only object expression is supported for "exports" property'
        );
      }
      exportsPath = value;
    }
  }

  if (!libsPath) {
    throw moduleObj.buildCodeFrameError('libs definition not found');
  }

  if (!exportsPath) {
    throw moduleObj.buildCodeFrameError('exports definition not found');
  }

  const moduleRules = new Map();
  for (const moduleRule of exportsPath.get('properties')) {
    if (!moduleRule.isObjectMethod()) {
      throw moduleRule.buildCodeFrameError(
        'rules can be defined only as methods on globals object'
      );
    }
    moduleRules.set(moduleRule.node.key, moduleRule);
  }

  return {
    libsPath: libsPath,
    exportsPath: exportsPath,
    exports: moduleRules,
  };
}

interface RuleDescribe {
  path: NodePath<BlockStatement>;
  tests: Map<string, NodePath<BlockStatement>>;
}

interface RulesDescribe {
  path: NodePath<BlockStatement>;
  describes: Map<string, RuleDescribe>;
  tests: Map<string, NodePath<BlockStatement>>;
}

interface ModulesRulesDescribe {
  path: NodePath<BlockStatement>;
  describes: Map<string, RulesDescribe>;
  tests: Map<string, NodePath<BlockStatement>>;
}

const HAS_NO_MODULES_TEST_NAME = 'has no modules';
const HAS_NO_GLOBALS_TEST_NAME = 'has no globals';
const HAS_NO_TEST = 'has no test';
function getModuleRulesDescribe(
  target: ModulesRulesDescribe,
  moduleName: string,
  noDescribesTest: string,
  newDescribePlaceholderTest: string
): RulesDescribe {
  let moduleDescribe = target.describes.get(moduleName);
  if (!moduleDescribe) {
    const ruleDescribeNode = template.statement(templateOpts)(
      `describe(%%moduleName%%, () => {
          test(%%newDescribePlaceholderTest%%, () => {});
       });`
    )({
      moduleName: stringLiteral(moduleName),
      newDescribePlaceholderTest: stringLiteral(newDescribePlaceholderTest),
    });

    target.path.node.body.push(ruleDescribeNode);
    const body = target.path.get('body');
    const path = (body[body.length - 1] as NodePath<ExpressionStatement>).get(
      'expression.arguments.1.body'
    ) as NodePath<BlockStatement>;

    moduleDescribe = {
      path: path,
      describes: new Map(
        [...findJestCalls('describe', path)].map(([ruleName, path]) => [
          ruleName,
          {
            path,
            tests: findJestCalls('test', path),
          },
        ])
      ),
      tests: findJestCalls('test', path),
    };
    target.describes.set(moduleName, moduleDescribe);
  }

  const placeholderTest = target.tests.get(noDescribesTest);
  if (placeholderTest) {
    // arrow expression - expression statement
    placeholderTest.parentPath.parentPath.remove();
    target.tests.delete(noDescribesTest);
  }
  return moduleDescribe;
}

function getRulesDescribe(
  target: RulesDescribe,
  declarationName: string,
  noDescribesTest: string,
  newDescribePlaceholderTest: string
): RuleDescribe {
  let ruleTests = target.describes.get(declarationName);
  if (!ruleTests) {
    const ruleDescribeNode = template.statement(templateOpts)(
      `describe(%%declarationName%%, () => {
          test(%%newDescribePlaceholderTest%%, () => {});
       });`
    )({
      declarationName: stringLiteral(declarationName),
      newDescribePlaceholderTest: stringLiteral(newDescribePlaceholderTest),
    });

    target.path.node.body.push(ruleDescribeNode);
    const body = target.path.get('body');
    const path = (body[body.length - 1] as NodePath<ExpressionStatement>).get(
      'expression.arguments.1.body'
    ) as NodePath<BlockStatement>;

    ruleTests = {
      path,
      tests: findJestCalls('test', path),
    };
    target.describes.set(declarationName, ruleTests);
  }

  const placeholderTest = target.tests.get(noDescribesTest);
  if (placeholderTest) {
    // arrow expression - expression statement
    placeholderTest.parentPath.parentPath.remove();
    target.tests.delete(noDescribesTest);
  }
  return ruleTests;
}

function refreshTests(rulesDescribe: RuleDescribe) {
  rulesDescribe.tests = findJestCalls('test', rulesDescribe.path);
  const noTest = rulesDescribe.tests.get(HAS_NO_TEST);
  if (rulesDescribe.tests.size > 1 && noTest) {
    noTest.parentPath.parentPath.remove();
    rulesDescribe.tests.delete(HAS_NO_TEST);
  }
}

export class Rule {
  private ruleAst: File;
  private testAst: File;

  private moduleName: string;
  private globalsObjPath: NodePath<ObjectExpression>;
  private modulesObjPath: NodePath<ObjectExpression>;
  private globalRules: Map<string, NodePath<ObjectMethod>>;
  private moduleRules: Map<
    string,
    {
      libsPath: NodePath<ArrayExpression>;
      exportsPath: NodePath<ObjectExpression>;
      exports: Map<string, NodePath<ObjectMethod>>;
    }
  >;
  private globalRuleTests: RulesDescribe;
  private moduleRuleTests: ModulesRulesDescribe;

  constructor(moduleName: string, ruleAst: File, testAst: File) {
    this.moduleName = moduleName;
    this.ruleAst = ruleAst;
    this.testAst = testAst;
    let globalsObjPath: NodePath<ObjectExpression>;
    let modulesObjPath: NodePath<ObjectExpression>;
    let hasDefaultExport = false;
    traverse(ruleAst, {
      ExportDefaultDeclaration: (path: NodePath<ExportDefaultDeclaration>) => {
        hasDefaultExport = true;
        const declaration = path.get('declaration');
        if (declaration.type !== 'TSAsExpression') {
          throw declaration.buildCodeFrameError(
            'type cast to RuleSet is missing'
          );
        }
        if (!declaration.isExpression()) {
          throw declaration.buildCodeFrameError(
            'declaration should be an expression'
          );
        }
        const expression = declaration.get('expression') as NodePath;
        if (!expression.isObjectExpression()) {
          throw declaration.buildCodeFrameError(
            'only object expression is supported'
          );
        }
        const rootProperties = expression.get('properties');

        for (const rootProperty of rootProperties) {
          if (rootProperty.isObjectProperty()) {
            let value = rootProperty.get('value');

            let key = rootProperty.get('key') as NodePath;
            const keyName = key.isIdentifier()
              ? key.node.name
              : key.isStringLiteral()
              ? key.node.value
              : undefined;
            if (keyName === 'globals') {
              if (!value.isObjectExpression()) {
                throw value.buildCodeFrameError(
                  'only object expression is supported for globals'
                );
              }
              globalsObjPath = value;
            }
            if (keyName === 'modules') {
              if (!value.isObjectExpression()) {
                throw value.buildCodeFrameError(
                  'only object expression is supported for modules'
                );
              }
              modulesObjPath = value;
            }
          }
        }

        if (!globalsObjPath) {
          throw expression.buildCodeFrameError('globals definition not found');
        }
        if (!modulesObjPath) {
          throw expression.buildCodeFrameError('modules definition not found');
        }
      },
    });

    if (!hasDefaultExport) {
      throw new Error('default export is missing');
    }

    this.globalsObjPath = globalsObjPath!;
    this.modulesObjPath = modulesObjPath!;

    const globalRules = new Map<string, NodePath<ObjectMethod>>();
    for (const globalRule of this.globalsObjPath.get('properties')) {
      if (!globalRule.isObjectMethod()) {
        throw globalRule.buildCodeFrameError(
          'rules can be defined only as methods on globals object'
        );
      }
      globalRules.set(globalRule.node.key, globalRule);
    }

    const modulesRules = new Map<
      string,
      {
        libsPath: NodePath<ArrayExpression>;
        exportsPath: NodePath<ObjectExpression>;
        exports: Map<string, NodePath<ObjectMethod>>;
      }
    >();
    for (const module of this.modulesObjPath.get('properties')) {
      if (!module.isObjectProperty()) {
        throw module.buildCodeFrameError(
          'modules can be defined only as properties in modules object'
        );
      }
      const moduleName = module.node.key;
      const moduleObj = module.get('value');
      if (!moduleObj.isObjectExpression()) {
        throw moduleObj.buildCodeFrameError(
          'only object expression is supported for module rules'
        );
      }

      let moduleRulesDecr = getModuleDescr(moduleObj);
      modulesRules.set(moduleName, moduleRulesDecr);
    }

    let testDescribeBody: NodePath<BlockStatement> | undefined;
    traverse(testAst, {
      CallExpression: (path: NodePath<CallExpression>) => {
        ifJestCall('describe', path, (name, body) => {
          if (name === this.moduleName) {
            testDescribeBody = body;
          }
        });
        path.skip();
      },
    });

    if (!testDescribeBody) {
      throw new Error(
        `can not find "describe('${this.moduleName}', () => { … })" in test file`
      );
    }
    const testRootDescribes = findJestCalls('describe', testDescribeBody);

    let globalsDescribeBody = testRootDescribes.get('globals');
    let modulesDescribeBody = testRootDescribes.get('modules');

    if (!globalsDescribeBody) {
      throw testDescribeBody.buildCodeFrameError(
        `can not find "describe('globals', () => { … })" in test file`
      );
    }
    if (!modulesDescribeBody) {
      throw testDescribeBody.buildCodeFrameError(
        `can not find "describe('modules', () => { … })" in test file`
      );
    }
    const globalRuleTests: RulesDescribe = {
      describes: new Map(
        [...findJestCalls('describe', globalsDescribeBody)].map(
          ([ruleName, path]) => [
            ruleName,
            {
              path,
              tests: findJestCalls('test', path),
            },
          ]
        )
      ),
      path: globalsDescribeBody,
      tests: findJestCalls('test', globalsDescribeBody),
    };

    const moduleRuleTests: ModulesRulesDescribe = {
      describes: new Map<string, RulesDescribe>(
        [...findJestCalls('describe', modulesDescribeBody)].map(
          ([moduleName, moduleTestBody]) => [
            moduleName,
            {
              describes: new Map(
                [...findJestCalls('describe', moduleTestBody)].map(
                  ([ruleName, path]) => [
                    ruleName,
                    {
                      path,
                      tests: findJestCalls('test', path),
                    },
                  ]
                )
              ),
              tests: findJestCalls('test', moduleTestBody),
              path: moduleTestBody,
            },
          ]
        )
      ),
      path: modulesDescribeBody,
      tests: findJestCalls('test', modulesDescribeBody),
    };

    this.globalRules = globalRules;
    this.moduleRules = modulesRules;
    this.globalRuleTests = globalRuleTests;
    this.moduleRuleTests = moduleRuleTests;
  }

  static create(moduleName: string) {
    const ruleAst = {
      type: 'File',
      program: buildRuleTemplate(),
    } as File;
    const testAst = {
      type: 'File',
      program: buildTestTemplate({
        moduleName: stringLiteral(moduleName),
      }),
    } as File;

    return new Rule(moduleName, ruleAst, testAst);
  }
  static parse(ruleSource: string, testSource: string): Rule {
    throw new Error('todo:');
  }

  print(
    prettierConfig: prettier.Options | undefined
  ): { ruleCode: string; testCode: string } {
    const ruleCode = print(this.ruleAst, prettierConfig);
    const testCode = print(this.testAst, prettierConfig);
    return { ruleCode, testCode };
  }

  setGlobalRuleTests(declarationName: string, tests: Statement[]) {
    const rulesDescribe = getRulesDescribe(
      this.globalRuleTests,
      declarationName,
      HAS_NO_GLOBALS_TEST_NAME,
      'has no test'
    );

    rulesDescribe.path.node.body.push(...tests);
    refreshTests(rulesDescribe);
  }
  setGlobalRule(
    declarationName: string,
    fix: Statement[],
    comments: Array<{ type: string; value: string }>
  ) {
    const method = {
      ...objectMethod(
        'method',
        stringLiteral(declarationName),
        [identifier('context')],
        blockStatement(fix)
      ),
      comments,
    };
    this.globalsObjPath.node.properties.push(method);
    const methodPath = this.globalsObjPath.get('properties')[
      this.globalsObjPath.node.properties.length - 1
    ] as NodePath<ObjectMethod>;
    this.globalRules.set(declarationName, methodPath);
  }
  setModuleRuleTests(
    moduleName: string,
    declarationName: string,
    tests: Statement[]
  ) {
    const moduleRulesDescribe = getModuleRulesDescribe(
      this.moduleRuleTests,
      moduleName,
      HAS_NO_MODULES_TEST_NAME,
      'has no test'
    );

    const rulesDescribe = getRulesDescribe(
      moduleRulesDescribe,
      declarationName,
      'has no test',
      'has no test'
    );
    rulesDescribe.path.node.body.push(...tests);
    refreshTests(rulesDescribe);
  }
  setModuleRule(
    moduleName: string,
    declarationName: string,
    fix: Statement[],
    comments: Array<{ type: string; value: string }>
  ) {
    let moduleRules = this.moduleRules.get(moduleName);
    if (!moduleRules) {
      const moduleNode = objectProperty(
        stringLiteral(moduleName),
        objectExpression([
          objectProperty(stringLiteral('libs'), arrayExpression([])),
          objectProperty(stringLiteral('exports'), objectExpression([])),
        ])
      );

      this.modulesObjPath.node.properties.push(moduleNode);
      const moduleObj = (this.modulesObjPath.get('properties')[
        this.modulesObjPath.node.properties.length - 1
      ] as NodePath<ObjectProperty>).get('value') as NodePath<ObjectExpression>;

      moduleRules = getModuleDescr(moduleObj);
      this.moduleRules.set(moduleName, moduleRules);
    }
    const method = {
      ...objectMethod(
        'method',
        stringLiteral(declarationName),
        [identifier('context')],
        blockStatement(fix)
      ),
      comments,
    };

    moduleRules.exportsPath.node.properties.push(method);
    const methodPath = moduleRules.exportsPath.get('properties')[
      moduleRules.exportsPath.node.properties.length - 1
    ] as NodePath<ObjectMethod>;
    moduleRules.exports.set(declarationName, methodPath);
  }
}
