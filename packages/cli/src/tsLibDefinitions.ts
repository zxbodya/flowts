import * as path from 'path';
import * as fs from 'fs';
import * as babel from '@babel/core';
import { sharedParserPlugins } from './sharedParserPlugins';
import traverse from '@babel/traverse';
import { NodePath } from '@babel/core';
import * as t from '@babel/types';

interface ParametrizedDeclaration<T extends t.Node> extends BaseDeclaration<T> {
  paramsCount: number;
  requiredParamsCount: number;
}

interface BaseDeclaration<T extends t.Node> {
  name: string;
  path: NodePath<T>;
}

interface ModuleDeclaration extends BaseDeclaration<t.TSModuleDeclaration> {
  declarations: Declarations;
}

class Declarations {
  classes: Map<string, ParametrizedDeclaration<t.ClassDeclaration>> = new Map();
  functions: Map<string, Array<ParametrizedDeclaration<t.TSDeclareFunction>>> =
    new Map();
  interfaces: Map<
    string,
    Array<ParametrizedDeclaration<t.TSInterfaceDeclaration>>
  > = new Map();
  modules: Map<string, ModuleDeclaration> = new Map();
  types: Map<string, ParametrizedDeclaration<t.TSTypeAliasDeclaration>> =
    new Map();
  variables: Map<string, Array<BaseDeclaration<t.VariableDeclarator>>> =
    new Map();

  allNames: Set<string> = new Set();
  update() {
    this.allNames = new Set<string>([
      ...this.classes.keys(),
      ...this.functions.keys(),
      ...this.interfaces.keys(),
      ...this.types.keys(),
      ...this.variables.keys(),
    ]);
  }
}

function paramsData(
  typeParameters:
    | babel.types.TypeParameterDeclaration
    | babel.types.TSTypeParameterDeclaration
    | babel.types.Noop
    | null
    | undefined
) {
  let tsTypeParameters: t.TSTypeParameter[] = [];
  if (typeParameters) {
    if (typeParameters.type === 'TSTypeParameterDeclaration') {
      tsTypeParameters = typeParameters.params;
    }
  }
  const paramsCount = tsTypeParameters.length;
  const requiredParamsCount = tsTypeParameters.filter(p => !p.default).length;

  return { paramsCount, requiredParamsCount };
}

class DState {
  declarations = new Declarations();
  private moduleStack: Declarations[] = [];
  enterClassDeclaration(path: NodePath<t.ClassDeclaration>) {
    if (!path.node.id) {
      throw path.buildCodeFrameError('class name is missing');
    }
    const name = path.node.id.name;
    const { paramsCount, requiredParamsCount } = paramsData(
      path.node.typeParameters
    );
    if (this.declarations.classes.has(name)) {
      throw path.buildCodeFrameError('duplicate class declaration');
    }
    this.declarations.classes.set(name, {
      name,
      path,
      paramsCount,
      requiredParamsCount,
    });
  }
  enterTSDeclareFunction(path: NodePath<t.TSDeclareFunction>) {
    if (!path.node.id) {
      throw path.buildCodeFrameError('function name is missing');
    }
    const name = path.node.id.name;
    const { paramsCount, requiredParamsCount } = paramsData(
      path.node.typeParameters
    );
    let functions = this.declarations.functions.get(name);
    if (!functions) {
      functions = [];
      this.declarations.functions.set(name, functions);
    }
    functions.push({
      name,
      path,
      paramsCount,
      requiredParamsCount,
    });
  }
  enterTSInterfaceDeclaration(path: NodePath<t.TSInterfaceDeclaration>) {
    if (!path.node.id) {
      throw path.buildCodeFrameError('interface name is missing');
    }
    const name = path.node.id.name;
    const { paramsCount, requiredParamsCount } = paramsData(
      path.node.typeParameters
    );
    let interfaces = this.declarations.interfaces.get(name);
    if (!interfaces) {
      interfaces = [];
      this.declarations.interfaces.set(name, interfaces);
    }
    interfaces.push({
      name,
      path,
      paramsCount,
      requiredParamsCount,
    });
  }
  enterTSModuleDeclaration(path: NodePath<t.TSModuleDeclaration>) {
    this.moduleStack.push(this.declarations);
    this.declarations = new Declarations();
  }
  exitTSModuleDeclaration(path: NodePath<t.TSModuleDeclaration>) {
    const name = t.isIdentifier(path.node.id)
      ? path.node.id.name
      : path.node.id.value;
    const module: ModuleDeclaration = {
      name,
      path,
      declarations: this.declarations,
    };
    this.declarations.update();
    this.declarations = this.moduleStack.pop()!;
    this.declarations.modules.set(name, module);
  }
  enterTSTypeAliasDeclaration(path: NodePath<t.TSTypeAliasDeclaration>) {
    const name = path.node.id.name;
    const { paramsCount, requiredParamsCount } = paramsData(
      path.node.typeParameters
    );
    if (this.declarations.types.has(name)) {
      throw path.buildCodeFrameError('duplicate type declaration');
    }
    this.declarations.types.set(name, {
      name,
      path,
      paramsCount,
      requiredParamsCount,
    });
  }
  enterVariableDeclaration(path: NodePath<t.VariableDeclaration>) {
    const variableDeclarators = path.get('declarations');
    for (const declPath of variableDeclarators) {
      const decl = declPath.node;
      if (!t.isIdentifier(decl.id)) {
        throw path.buildCodeFrameError('unexpected declaration');
      }
      const name = decl.id.name;
      // todo: add function/class declarations detection (not needed for ts libs, but might be useful for externals)
      // let typeAnnotation = decl.id.typeAnnotation;
      let variables = this.declarations.variables.get(name);
      if (!variables) {
        variables = [];
        this.declarations.variables.set(name, variables);
      }
      variables.push({
        name,
        path: declPath,
      });
    }
  }
}

const extractDefinitionsVisitor = {
  ClassDeclaration(path: NodePath<t.ClassDeclaration>, state: DState) {
    state.enterClassDeclaration(path);
  },
  TSDeclareFunction(path: NodePath<t.TSDeclareFunction>, state: DState) {
    state.enterTSDeclareFunction(path);
  },
  TSInterfaceDeclaration(
    path: NodePath<t.TSInterfaceDeclaration>,
    state: DState
  ) {
    state.enterTSInterfaceDeclaration(path);
  },
  TSModuleDeclaration: {
    enter(path: NodePath<t.TSModuleDeclaration>, state: DState) {
      state.enterTSModuleDeclaration(path);
    },
    exit(path: NodePath<t.TSModuleDeclaration>, state: DState) {
      state.exitTSModuleDeclaration(path);
    },
  },
  TSTypeAliasDeclaration(
    path: NodePath<t.TSTypeAliasDeclaration>,
    state: DState
  ) {
    state.enterTSTypeAliasDeclaration(path);
  },
  VariableDeclaration(path: NodePath<t.VariableDeclaration>, state: DState) {
    state.enterVariableDeclaration(path);
  },
};

const tsLibRoot = path.join('ts', 'node_modules', 'typescript', 'lib');

const libNames = [
  'dom',
  'dom.iterable',
  'es5',
  'es6',
  'es2015',
  'es2015.collection',
  'es2015.core',
  'es2015.generator',
  'es2015.iterable',
  'es2015.promise',
  'es2015.proxy',
  'es2015.reflect',
  'es2015.symbol',
  'es2015.symbol.wellknown',
  'es2016.array.include',
  'es2016',
  'es2016.full',
  'es2017',
  'es2017.full',
  'es2017.intl',
  'es2017.object',
  'es2017.sharedmemory',
  'es2017.string',
  'es2017.typedarrays',
  'es2018.asyncgenerator',
  'es2018.asynciterable',
  'es2018',
  'es2018.full',
  'es2018.intl',
  'es2018.promise',
  'es2018.regexp',
  'es2019',
  'es2019.array',
  'es2019.full',
  'es2019.object',
  'es2019.string',
  'es2019.symbol',
  'es2020',
  'es2020.bigint',
  'es2020.full',
  'es2020.intl',
  'es2020.promise',
  'es2020.sharedmemory',
  'es2020.string',
  'es2020.symbol.wellknown',
  'esnext',
  'esnext.full',
  'esnext.intl',
  'esnext.promise',
  'esnext.string',
  'esnext.weakref',
  'scripthost',
  'webworker',
  'webworker.importscripts',
  'webworker.iterable',
];

const LIB_REFERENCE_REGEX = /^\/ <reference lib="([^"]+)" \/>/;

export const tsLibDefinitions: Array<{
  name: string;
  declarations: Declarations;
  references: string[];
}> = [];

for (const libName of libNames) {
  const libPath = path.join(tsLibRoot, `lib.${libName}.d.ts`);
  const source = fs.readFileSync(libPath, { encoding: 'utf-8' });

  const ast = babel.parseSync(source, {
    babelrc: false,
    configFile: false,
    ast: true,
    parserOpts: {
      plugins: ['typescript', ...sharedParserPlugins],
      strictMode: false,
    },
    filename: libPath,
  }) as t.File;

  if (ast === null) {
    throw new Error(
      'babel.parseSync returned null - probably there is some configuration error'
    );
  }

  const references = [];

  if (ast.innerComments) {
    for (const comment of ast.comments || []) {
      const match = LIB_REFERENCE_REGEX.exec(comment.value);
      if (match !== null) {
        references.push(match[1]);
      }
    }
  }

  const state = new DState();
  traverse<DState>(ast, extractDefinitionsVisitor, undefined, state);
  state.declarations.update();
  tsLibDefinitions.push({
    name: libName,
    declarations: state.declarations,
    references,
  });
}
