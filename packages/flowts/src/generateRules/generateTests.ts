import {
  TypeParameterDeclaration,
  expressionStatement,
  callExpression,
  identifier,
  stringLiteral,
  arrowFunctionExpression,
  blockStatement,
  memberExpression,
  templateLiteral,
  templateElement,
} from '@babel/types';
import { NodePath } from '@babel/traverse';

interface TypeParamsConfig {
  paramsCount: number;
  requiredParamsCount: number;
}
function getParamsConfig(
  typeParameters: TypeParameterDeclaration | null
): TypeParamsConfig {
  let paramsCount = 0;
  let requiredParamsCount = 0;
  if (typeParameters) {
    paramsCount = typeParameters.params.length;
    requiredParamsCount = typeParameters.params.filter(p => !p.default).length;
  }
  return { paramsCount, requiredParamsCount };
}
const spaces = '                                                           ';
function createTest(name: string, content: string[], identation: number) {
  const lastIdent = spaces.substr(0, identation);
  const contentIdent = spaces.substr(0, identation + 2);
  return expressionStatement(
    callExpression(identifier('test'), [
      stringLiteral(name),
      arrowFunctionExpression(
        [],
        blockStatement([
          expressionStatement(
            callExpression(
              memberExpression(
                callExpression(identifier('expect'), [
                  callExpression(identifier('transform'), [
                    templateLiteral(
                      [
                        templateElement({
                          raw: [
                            '',
                            ...content.map(v => contentIdent + v),
                            lastIdent,
                          ].join('\n'),
                        }),
                      ],
                      []
                    ),
                  ]),
                ]),
                identifier('toMatchSnapshot')
              ),
              []
            )
          ),
        ])
      ),
    ])
  );
}

function getTypeParamName(paramsConfig: TypeParamsConfig) {
  if (paramsConfig.requiredParamsCount === paramsConfig.paramsCount) {
    if (paramsConfig.requiredParamsCount === 0) return '';
    return `typeParams(${paramsConfig.requiredParamsCount})`;
  } else {
    return `typeParams(${paramsConfig.requiredParamsCount} - ${paramsConfig.paramsCount})`;
  }
}

function generateClassTests(
  classes: Map<string, TypeParamsConfig>,
  baseTestName: string,
  reference: string,
  prepend: string[] = []
) {
  let testName = baseTestName;
  const tests = [];
  for (const [confName, paramsConfig] of classes) {
    let classNameIndex = 1;
    let varNameIndex = 1;
    if (confName) {
      testName += ` - ${confName}`;
    }
    const testBody = [];
    if (prepend.length) {
      testBody.push(...prepend, '');
    }
    // assuming params are inferred
    testBody.push(`new ${reference}();`, '');
    for (
      let paramsCount = paramsConfig.requiredParamsCount;
      paramsCount <= paramsConfig.paramsCount;
      paramsCount += 1
    ) {
      if (paramsCount > 0) {
        const params = new Array(paramsCount)
          .fill('')
          .map((_, index) => `P${index}`)
          .join(', ');
        testBody.push(
          `class A${classNameIndex} extends ${reference}<${params}> {}`,
          `let a${varNameIndex} = new ${reference}<${params}>();`,
          ''
        );
      } else {
        testBody.push(`class A${classNameIndex} extends ${reference} {};`);
      }

      classNameIndex += 1;
      varNameIndex += 1;
    }
    tests.push(createTest(testName, testBody, 10));
  }
  return tests;
}

function generateInterfaceTests(
  interfaces: Map<string, TypeParamsConfig>,
  baseTestName: string,
  reference: string,
  prepend: string[] = []
) {
  let testName = baseTestName;
  const tests = [];
  for (const [confName, paramsConfig] of interfaces) {
    let classNameIndex = 1;
    let interfaceNameCount = 1;
    if (confName) {
      testName += ` - ${confName}`;
    }
    const testBody = [];
    if (prepend.length) {
      testBody.push(...prepend, '');
    }
    for (
      let paramsCount = paramsConfig.requiredParamsCount;
      paramsCount <= paramsConfig.paramsCount;
      paramsCount += 1
    ) {
      if (paramsCount > 0) {
        const params = new Array(paramsCount)
          .fill('')
          .map((_, index) => `P${index}`)
          .join(', ');
        testBody.push(
          `class A${classNameIndex} implements ${reference}<${params}> {}`,
          `interface I${interfaceNameCount} extends ${reference}<${params}> {}`,
          ''
        );
      } else {
        testBody.push(`class A${classNameIndex} extends ${reference} {};`);
      }

      classNameIndex += 1;
      interfaceNameCount += 1;
    }
    tests.push(createTest(testName, testBody, 10));
  }
  return tests;
}

function generateCallableTests(
  functions: Map<string, TypeParamsConfig>,
  baseTestName: string,
  reference: string,
  prepend: string[] = []
) {
  let testName = baseTestName;
  const tests = [];
  for (const [confName, paramsConfig] of functions) {
    let varNameIndex = 1;
    if (confName) {
      testName += ` - ${confName}`;
    }
    const testBody = [];
    if (prepend.length) {
      testBody.push(...prepend, '');
    }
    // assuming params are inferred
    testBody.push(`${reference}();`, '');
    for (
      let paramsCount = paramsConfig.requiredParamsCount;
      paramsCount <= paramsConfig.paramsCount;
      paramsCount += 1
    ) {
      if (paramsCount > 0) {
        const params = new Array(paramsCount)
          .fill('')
          .map((_, index) => `P${index}`)
          .join(', ');
        testBody.push(`let a${varNameIndex} = ${reference}<${params}>();`);
      }

      varNameIndex += 1;
    }
    tests.push(createTest(testName, testBody, 10));
  }
  return tests;
}

function generateTypeTests(
  types: Map<string, TypeParamsConfig>,
  baseTestName: string,
  reference: string,
  prepend: string[] = []
) {
  let testName = baseTestName;
  const tests = [];
  for (const [confName, paramsConfig] of types) {
    let varNameIndex = 1;
    if (confName) {
      testName += ` - ${confName}`;
    }
    const testBody = [];
    if (prepend.length) {
      testBody.push(...prepend, '');
    }
    for (
      let paramsCount = paramsConfig.requiredParamsCount;
      paramsCount <= paramsConfig.paramsCount;
      paramsCount += 1
    ) {
      if (paramsCount > 0) {
        const params = new Array(paramsCount)
          .fill('')
          .map((_, index) => `P${index}`)
          .join(', ');
        testBody.push(`let a${varNameIndex}: ${reference}<${params}>;`);
      }

      varNameIndex += 1;
    }
    tests.push(createTest(testName, testBody, 10));
  }
  return tests;
}

function collectPathsData(paths: NodePath[]) {
  let isVariable = false;
  const callable = new Map<string, TypeParamsConfig>();
  const classes = new Map<string, TypeParamsConfig>();
  const interfaceType = new Map<string, TypeParamsConfig>();
  const type = new Map<string, TypeParamsConfig>();
  for (const basePath of paths) {
    const path =
      basePath.node.type === 'DeclareExportDeclaration'
        ? (basePath.get('declaration') as NodePath)
        : basePath;

    if (path.isDeclareClass()) {
      const typeParameters = path.node.typeParameters;
      const paramsConfig = getParamsConfig(typeParameters);
      classes.set(getTypeParamName(paramsConfig), paramsConfig);
      isVariable = true;
    }

    if (path.isDeclareFunction()) {
      isVariable = true;
      const typeAnnotation = path.get('id').get('typeAnnotation');
      if (typeAnnotation.isTypeAnnotation()) {
        const fnTypeAnnotation = typeAnnotation.get('typeAnnotation');
        if (fnTypeAnnotation.isFunctionTypeAnnotation()) {
          const paramsConfig = getParamsConfig(
            fnTypeAnnotation.node.typeParameters
          );

          classes.set(getTypeParamName(paramsConfig), paramsConfig);
          callable.set(getTypeParamName(paramsConfig), paramsConfig);
        }
      }
    }
    if (path.isDeclareInterface()) {
      const paramsConfig = getParamsConfig(path.node.typeParameters);
      type.set(getTypeParamName(paramsConfig), paramsConfig);
      interfaceType.set(getTypeParamName(paramsConfig), paramsConfig);
    }
    if (path.isDeclareTypeAlias() || path.isTypeAlias()) {
      const paramsConfig = getParamsConfig(path.node.typeParameters);
      type.set(getTypeParamName(paramsConfig), paramsConfig);
    }
    if (path.type === 'DeclareOpaqueType') {
      const paramsConfig = getParamsConfig(null);
      type.set(getTypeParamName(paramsConfig), paramsConfig);
    }
    if (path.isDeclareVariable()) {
      isVariable = true;
      // todo: namespace
      // todo: function and arrow function
      // todo: class
    }
  }
  return { isVariable, callable, classes, type };
}

export function generateGlobalTests(name: string, paths: NodePath[]) {
  const { isVariable, callable, classes, type } = collectPathsData(paths);
  const tests = [];
  if (isVariable) {
    tests.push(createTest('variable', ['var a = ' + name + ';'], 10));
  }
  tests.push(...generateClassTests(classes, 'generated - class', name));
  tests.push(...generateCallableTests(callable, 'generated - callable', name));
  tests.push(...generateTypeTests(type, 'generated - type', name));
  tests.push(...generateInterfaceTests(type, 'generated - interface', name));
  return tests;
}

export function generateModuleTests(
  moduleName: string,
  name: string,
  paths: NodePath[]
) {
  const { isVariable, callable, classes, type } = collectPathsData(paths);

  const tests = [];
  if (isVariable) {
    tests.push(createTest('variable', ['var a = ' + name + ';'], 10));
  }
  const confs = [
    {
      prepend: [`import { ${name} } from "${moduleName}";`],
      importName: name,
      prefix: '',
    },
    {
      prepend: [`import * as M from "${moduleName}";`],
      importName: 'M.' + name,
      prefix: ' - import namespace',
    },
    {
      prepend: [`import { ${name} as t } from "${moduleName}";`],
      importName: 't',
      prefix: ' - import renamed',
    },
  ];
  for (const conf of confs) {
    tests.push(
      ...generateClassTests(
        classes,
        `generated - class${conf.prefix}`,
        conf.importName,
        conf.prepend
      )
    );
    tests.push(
      ...generateCallableTests(
        callable,
        `generated - callable${conf.prefix}`,
        conf.importName,
        conf.prepend
      )
    );
    tests.push(
      ...generateTypeTests(
        type,
        `generated - type${conf.prefix}`,
        conf.importName,
        conf.prepend
      )
    );
    tests.push(
      ...generateInterfaceTests(
        type,
        `generated - interface${conf.prefix}`,
        conf.importName,
        conf.prepend
      )
    );
  }
  return tests;
}
