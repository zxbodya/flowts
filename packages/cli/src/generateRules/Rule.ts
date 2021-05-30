import template, { TemplateBuilderOptions } from '@babel/template';
import * as t from '@babel/types';
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

function getModuleDescr(moduleObj: NodePath<t.ObjectExpression>) {
  let libsPath: NodePath<t.ArrayExpression> | undefined;
  let exportsPath: NodePath<t.ObjectExpression> | undefined;
  for (const prop of moduleObj.get('properties')) {
    if (!prop.isObjectProperty()) {
      throw prop.buildCodeFrameError(
        'modules can be defined only as properties in "modules" object'
      );
    }
    // todo: babel-types
    const value = prop.get('value') as NodePath;
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
  private readonly ruleAst: t.File;
  private moduleName: string;
  private globalsObjPath: NodePath<t.ObjectExpression>;
  private modulesObjPath: NodePath<t.ObjectExpression>;
  private globalRules: Map<string, NodePath<t.ObjectMethod>>;
  private moduleRules: Map<
    string,
    {
      libsPath: NodePath<t.ArrayExpression>;
      exportsPath: NodePath<t.ObjectExpression>;
      exports: Map<string, NodePath<t.ObjectMethod>>;
    }
  >;

  constructor(moduleName: string, ruleAst: t.File) {
    this.moduleName = moduleName;
    this.ruleAst = ruleAst;

    let globalsObjPath: NodePath<t.ObjectExpression>;
    let modulesObjPath: NodePath<t.ObjectExpression>;
    let hasDefaultExport = false;
    traverse(ruleAst, {
      ExportDefaultDeclaration: (
        path: NodePath<t.ExportDefaultDeclaration>
      ) => {
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
        // todo: babel-types
        const rootProperties = expression.get('properties') as NodePath[];

        for (const rootProperty of rootProperties) {
          if (rootProperty.isObjectProperty()) {
            // todo: babel-types
            const value = rootProperty.get('value') as NodePath;
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

    const globalRules = new Map<string, NodePath<t.ObjectMethod>>();
    for (const globalRule of this.globalsObjPath.get('properties')) {
      if (!globalRule.isObjectMethod()) {
        throw globalRule.buildCodeFrameError(
          'rules can be defined only as methods on globals object'
        );
      }
      // todo: change this to be string
      const globalName: any = globalRule.node.key;
      globalRules.set(globalName, globalRule);
    }

    const modulesRules = new Map<
      string,
      {
        libsPath: NodePath<t.ArrayExpression>;
        exportsPath: NodePath<t.ObjectExpression>;
        exports: Map<string, NodePath<t.ObjectMethod>>;
      }
    >();
    for (const module of this.modulesObjPath.get('properties')) {
      if (!module.isObjectProperty()) {
        throw module.buildCodeFrameError(
          'modules can be defined only as properties in modules object'
        );
      }
      // todo: change this to be string
      const moduleName: any = module.node.key;
      // todo: babel-types
      const moduleObj = module.get('value') as NodePath;
      if (!moduleObj.isObjectExpression()) {
        throw moduleObj.buildCodeFrameError(
          'only object expression is supported for module rules'
        );
      }

      const moduleRulesDecr = getModuleDescr(moduleObj);
      modulesRules.set(moduleName, moduleRulesDecr);
    }

    let testDescribeBody: NodePath<t.BlockStatement> | undefined;

    this.globalRules = globalRules;
    this.moduleRules = modulesRules;
  }

  static create(moduleName: string) {
    const ruleAst = {
      type: 'File',
      program: buildRuleTemplate(),
    } as t.File;

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
    fix: t.Statement[],
    comments: Array<{ type: string; value: string }>
  ) {
    const method = {
      ...t.objectMethod(
        'method',
        t.stringLiteral(declarationName),
        [t.identifier('context')],
        t.blockStatement(fix)
      ),
      comments,
    };
    this.globalsObjPath.node.properties.push(method);
    const methodPath = this.globalsObjPath.get('properties')[
      this.globalsObjPath.node.properties.length - 1
    ] as NodePath<t.ObjectMethod>;
    this.globalRules.set(declarationName, methodPath);
  }

  setModuleRule(
    moduleName: string,
    declarationName: string,
    fix: t.Statement[],
    comments: Array<{ type: string; value: string }>
  ) {
    let moduleRules = this.moduleRules.get(moduleName);
    if (!moduleRules) {
      const moduleNode = t.objectProperty(
        t.stringLiteral(moduleName),
        t.objectExpression([
          t.objectProperty(t.stringLiteral('libs'), t.arrayExpression([])),
          t.objectProperty(t.stringLiteral('exports'), t.objectExpression([])),
        ])
      );

      this.modulesObjPath.node.properties.push(moduleNode);
      const moduleObj = (
        this.modulesObjPath.get('properties')[
          this.modulesObjPath.node.properties.length - 1
        ] as NodePath<t.ObjectProperty>
      ).get('value') as NodePath<t.ObjectExpression>;

      moduleRules = getModuleDescr(moduleObj);
      this.moduleRules.set(moduleName, moduleRules);
    }
    const method = {
      ...t.objectMethod(
        'method',
        t.stringLiteral(declarationName),
        [t.identifier('context')],
        t.blockStatement(fix)
      ),
      comments,
    };

    moduleRules.exportsPath.node.properties.push(method);
    const methodPath = moduleRules.exportsPath.get('properties')[
      moduleRules.exportsPath.node.properties.length - 1
    ] as NodePath<t.ObjectMethod>;
    moduleRules.exports.set(declarationName, methodPath);
  }
}
