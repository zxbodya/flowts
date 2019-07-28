import * as path from 'path';
import * as fs from 'fs';
import * as babel from '@babel/core';
import { sharedParserPlugins } from './sharedParserPlugins';
import traverse from '@babel/traverse';
import { Node, NodePath, Visitor } from '@babel/core';
import {
  File,
  ClassDeclaration,
  TSDeclareFunction,
  TSInterfaceDeclaration,
  TSModuleDeclaration,
  TSTypeAliasDeclaration,
  VariableDeclaration,
  isIdentifier,
  TSTypeParameter,
  VariableDeclarator,
} from '@babel/types';

interface ParametrizedDeclaration<T extends Node> extends BaseDeclaration<T> {
  paramsCount: number;
  requiredParamsCount: number;
}

interface BaseDeclaration<T extends Node> {
  name: string;
  path: NodePath<T>;
}

interface ModuleDeclaration extends BaseDeclaration<TSModuleDeclaration> {
  declarations: Declarations;
}

class Declarations {
  classes: Array<ParametrizedDeclaration<ClassDeclaration>> = [];
  functions: Array<ParametrizedDeclaration<TSDeclareFunction>> = [];
  interfaces: Array<ParametrizedDeclaration<TSInterfaceDeclaration>> = [];
  modules: ModuleDeclaration[] = [];
  types: Array<ParametrizedDeclaration<TSTypeAliasDeclaration>> = [];
  variables: Array<BaseDeclaration<VariableDeclarator>> = [];
}

function paramsData(
  typeParameters:
    | babel.types.TypeParameterDeclaration
    | babel.types.TSTypeParameterDeclaration
    | babel.types.Noop
    | null
) {
  let tsTypeParameters: TSTypeParameter[] = [];
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
  enterClassDeclaration(path: NodePath<ClassDeclaration>) {
    if (!path.node.id) {
      throw path.buildCodeFrameError('class name is missing');
    }
    let name = path.node.id.name;
    let { paramsCount, requiredParamsCount } = paramsData(
      path.node.typeParameters
    );
    this.declarations.classes.push({
      name,
      path,
      paramsCount,
      requiredParamsCount,
    });
  }
  enterTSDeclareFunction(path: NodePath<TSDeclareFunction>) {
    if (!path.node.id) {
      throw path.buildCodeFrameError('function name is missing');
    }
    let name = path.node.id.name;
    let { paramsCount, requiredParamsCount } = paramsData(
      path.node.typeParameters
    );
    this.declarations.functions.push({
      name,
      path,
      paramsCount,
      requiredParamsCount,
    });
  }
  enterTSInterfaceDeclaration(path: NodePath<TSInterfaceDeclaration>) {
    if (!path.node.id) {
      throw path.buildCodeFrameError('interface name is missing');
    }
    let name = path.node.id.name;
    let { paramsCount, requiredParamsCount } = paramsData(
      path.node.typeParameters
    );
    this.declarations.interfaces.push({
      name,
      path,
      paramsCount,
      requiredParamsCount,
    });
  }
  enterTSModuleDeclaration(path: NodePath<TSModuleDeclaration>) {
    this.moduleStack.push(this.declarations);
    this.declarations = new Declarations();
  }
  exitTSModuleDeclaration(path: NodePath<TSModuleDeclaration>) {
    const module: Declarations['modules'][0] = {
      name: isIdentifier(path.node.id) ? path.node.id.name : path.node.id.value,
      path,
      declarations: this.declarations,
    };
    this.declarations = this.moduleStack.pop()!;
    this.declarations.modules.push(module);
  }
  enterTSTypeAliasDeclaration(path: NodePath<TSTypeAliasDeclaration>) {
    let name = path.node.id.name;
    let { paramsCount, requiredParamsCount } = paramsData(
      path.node.typeParameters
    );
    this.declarations.types.push({
      name,
      path,
      paramsCount,
      requiredParamsCount,
    });
  }
  enterVariableDeclaration(path: NodePath<VariableDeclaration>) {
    let variableDeclarators = path.get('declarations');
    for (const declPath of variableDeclarators) {
      const decl = declPath.node;
      if (!isIdentifier(decl.id)) {
        throw path.buildCodeFrameError('unexpected declaration');
      }
      let name = decl.id.name;
      // todo: add function/class declarations detection (not needed for ts libs, but might be useful for externals)
      // let typeAnnotation = decl.id.typeAnnotation;

      this.declarations.variables.push({
        name,
        path: declPath,
      });
    }
  }
}

const extractDefinitionsVisitor = {
  ClassDeclaration(path: NodePath<ClassDeclaration>, state: DState) {
    state.enterClassDeclaration(path);
  },
  TSDeclareFunction(path: NodePath<TSDeclareFunction>, state: DState) {
    state.enterTSDeclareFunction(path);
  },
  TSInterfaceDeclaration(
    path: NodePath<TSInterfaceDeclaration>,
    state: DState
  ) {
    state.enterTSInterfaceDeclaration(path);
  },
  TSModuleDeclaration: {
    enter(path: NodePath<TSModuleDeclaration>, state: DState) {
      state.enterTSModuleDeclaration(path);
    },
    exit(path: NodePath<TSModuleDeclaration>, state: DState) {
      state.exitTSModuleDeclaration(path);
    },
  },
  TSTypeAliasDeclaration(
    path: NodePath<TSTypeAliasDeclaration>,
    state: DState
  ) {
    state.enterTSTypeAliasDeclaration(path);
  },
  VariableDeclaration(path: NodePath<VariableDeclaration>, state: DState) {
    state.enterVariableDeclaration(path);
  },
};

const tsLibRoot = path.join('node_modules', 'typescript', 'lib');

const libNames = [
  'dom',
  'dom.iterable',
  'es5',
  'es6',
  'es2015.collection',
  'es2015.core',
  'es2015',
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
  'es2018.asynciterable',
  'es2018',
  'es2018.full',
  'es2018.intl',
  'es2018.promise',
  'es2018.regexp',
  'es2019.array',
  'es2019',
  'es2019.full',
  'es2019.object',
  'es2019.string',
  'es2019.symbol',
  'es2020',
  'es2020.full',
  'es2020.string',
  'es2020.symbol.wellknown',
  'esnext.array',
  'esnext.asynciterable',
  'esnext.bigint',
  'esnext',
  'esnext.full',
  'esnext.intl',
  'esnext.symbol',
  'scripthost',
  'webworker',
  'webworker.importscripts',
];

const LIB_REFERENCE_REGEX = /^\/ <reference lib="([^"]+)" \/>/;

export const libs: Array<{
  name: string;
  declarations: Declarations;
  references: string[];
}> = [];

for (const libName of libNames) {
  const libPath = path.join(tsLibRoot, `lib.${libName}.d.ts`);
  const source = fs.readFileSync(libPath, { encoding: 'utf-8' });

  const ast = babel.parseSync(source, {
    babelrc: false,
    ast: true,
    parserOpts: {
      plugins: ['typescript', ...sharedParserPlugins],
      strictMode: false,
    },
    filename: libPath,
  }) as File;

  if (ast === null) {
    throw new Error(
      'babel.parseSync returned null - probably there is some configuration error'
    );
  }

  const references = [];

  if (ast.innerComments) {
    for (const comment of ast.comments) {
      const match = LIB_REFERENCE_REGEX.exec(comment.value);
      if (match !== null) {
        references.push(match[1]);
      }
    }
  }

  let state = new DState();
  traverse<DState>(ast, extractDefinitionsVisitor, undefined, state);
  libs.push({
    name: libName,
    declarations: state.declarations,
    references,
  });
}
