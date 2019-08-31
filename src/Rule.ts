import template, { TemplateBuilderOptions } from '@babel/template';
import {
  stringLiteral,
  ExportDefaultDeclaration,
  ObjectExpression,
  BlockStatement,
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
} from '@babel/types';
import traverse, { NodePath } from '@babel/traverse';
import * as recast from '@zxbodya/recast';
import * as prettier from 'prettier';

const templateOpts: TemplateBuilderOptions = {
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

function print(
  generatedAst: recast.types.ASTNode,
  prettierConfig: prettier.Options | undefined
) {
  const code = recast.print(generatedAst);
  return prettier.format(code.code, prettierConfig);
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
    const key = prop.get('key') as NodePath;
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

export class Rule {
  private ruleAst: File;
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

  constructor(moduleName: string, ruleAst: File) {
    this.moduleName = moduleName;
    this.ruleAst = ruleAst;

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
            const value = rootProperty.get('value');

            const key = rootProperty.get('key') as NodePath;
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

      const moduleRulesDecr = getModuleDescr(moduleObj);
      modulesRules.set(moduleName, moduleRulesDecr);
    }

    let testDescribeBody: NodePath<BlockStatement> | undefined;

    this.globalRules = globalRules;
    this.moduleRules = modulesRules;
  }

  static create(moduleName: string) {
    const ruleAst = {
      type: 'File',
      program: buildRuleTemplate(),
    } as File;

    return new Rule(moduleName, ruleAst);
  }
  static parse(ruleSource: string): Rule {
    throw new Error('todo:');
  }

  print(prettierConfig: prettier.Options | undefined): string {
    return print(this.ruleAst, prettierConfig);
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
