import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import helperTypes from '../helperTypes';
import { warnOnlyOnce } from '../utils/warnOnlyOnce';

const FLOW_PRAGMA_LINE_EXP = /^\s*\*?\s*@flow(?: strict| strict-local)?\s*$/;

const removeFlowHeader = (comments: t.Comment[]) => {
  const commentIndex = comments.findIndex(item =>
    FLOW_PRAGMA_LINE_EXP.test(item.value)
  );
  if (commentIndex !== -1) {
    comments.splice(commentIndex, 1);
  }

  comments
    .filter((item: t.Comment) => /@flow/.test(item.value))
    .forEach((comment: t.Comment) => {
      comment.value = comment.value
        .split('\n')
        .filter(value => !FLOW_PRAGMA_LINE_EXP.test(value))
        .join('\n');
    });
};
export const Program = {
  enter(path: NodePath<t.Program>) {
    const [firstNode] = path.node.body;
    if (
      firstNode &&
      firstNode.leadingComments &&
      firstNode.leadingComments.length
    ) {
      // @ts-expect-error recast support
      removeFlowHeader(firstNode.leadingComments);
    }
    // @ts-expect-error recast support
    if (firstNode && firstNode.comments && firstNode.comments.length) {
      // @ts-expect-error recast support
      removeFlowHeader(firstNode.comments);
    }
  },
  exit(path: NodePath<t.Program>) {
    path.traverse({
      /* istanbul ignore next */
      Flow(path: NodePath<any>) {
        if (
          path.node.type === 'ImportDeclaration' ||
          path.node.type === 'ExportNamedDeclaration'
        ) {
          return;
        }
        throw path.buildCodeFrameError(
          'not converted flow node: ' + path.node.type
        );
      },
    });

    const usedHelperTypes = new Set<keyof typeof helperTypes>();
    path.traverse({
      TSTypeReference(typeReferencePath: NodePath<t.TSTypeReference>) {
        const node = typeReferencePath.node;
        if (t.isIdentifier(node.typeName)) {
          const name = node.typeName.name;
          if (name === '$Call') {
            if (node.typeParameters) {
              if (node.typeParameters.params.length === 1) {
                node.typeName.name = 'ReturnType';
              } else if (node.typeParameters.params.length === 2) {
                node.typeName.name = '$Call1';
                usedHelperTypes.add('$Call1');
              } else if (node.typeParameters.params.length === 3) {
                node.typeName.name = '$Call2';
                usedHelperTypes.add('$Call2');
              } else if (node.typeParameters.params.length === 4) {
                node.typeName.name = '$Call3';
                usedHelperTypes.add('$Call3');
              } else if (node.typeParameters.params.length === 5) {
                node.typeName.name = '$Call4';
                usedHelperTypes.add('$Call4');
              } else if (node.typeParameters.params.length === 6) {
                node.typeName.name = '$Call5';
                usedHelperTypes.add('$Call5');
              } else {
                warnOnlyOnce(
                  '$Call utility type is used with more then 6 type parameters - this is crazy, do not want to fix'
                );
              }
            }
          } else {
            // @ts-expect-error
            if (helperTypes[name]) {
              usedHelperTypes.add(name as keyof typeof helperTypes);
            }
          }
        }
      },
    });

    const body = path.get('body') as NodePath[];
    const imports = body.filter(st => st.isImportDeclaration());
    let after: NodePath;
    if (imports.length > 0) {
      after = imports[imports.length - 1];
    }
    usedHelperTypes.forEach(helperName => {
      if (after) after.insertAfter(helperTypes[helperName]);
      else body[0].insertBefore(helperTypes[helperName]);
    });

    // function overrides
    const funcByName = new Map<
      string,
      {
        decl: Array<NodePath<t.TSDeclareFunction>>;
        impl: Array<NodePath<t.FunctionDeclaration>>;
        exp: Array<
          NodePath<t.ExportDefaultDeclaration | t.ExportNamedDeclaration>
        >;
      }
    >();

    function getFunc(name: string) {
      let func = funcByName.get(name);
      if (!func) {
        func = { decl: [], impl: [], exp: [] };
        funcByName.set(name, func);
      }
      return func;
    }

    function visitPossiblyFuncPath(st: NodePath) {
      const node = st.node;
      if (t.isTSDeclareFunction(node)) {
        if (node.id) {
          const func = getFunc(node.id.name);

          // @ts-expect-error todo: traverse types
          func.decl.push(st);
          return func;
        }
      }
      if (t.isFunctionDeclaration(node)) {
        if (node.id) {
          const func = getFunc(node.id.name);

          // @ts-expect-error todo: traverse types
          func.impl.push(st);
          return func;
        }
      }
      return false;
    }

    for (const st of body) {
      visitPossiblyFuncPath(st);
      if (
        (t.isExportDefaultDeclaration(st.node) ||
          t.isExportNamedDeclaration(st.node)) &&
        st.node.declaration
      ) {
        // @ts-expect-error todo: traverse types
        const maybeFunc = visitPossiblyFuncPath(st.get('declaration'));
        if (maybeFunc) {
          // @ts-expect-error todo: traverse types
          maybeFunc.exp.push(st);
        }
      }
    }

    for (const [, func] of funcByName) {
      // remove declare keywords if implementation is present
      if (func.impl.length && func.decl.length) {
        for (const decl of func.decl) {
          decl.node.declare = false;
        }
        // separate declaration from export if overrides are present, and not everything is exported
        if (
          func.exp.length > 0 &&
          func.exp.length !== func.impl.length + func.decl.length
        ) {
          // last export - to split it into declaration and export
          const exp = func.exp[func.exp.length - 1];
          // other declarations - to remove `export` keyword from them
          const expToRemove = func.exp.slice(0, func.exp.length - 1);
          if (t.isExportDefaultDeclaration(exp.node)) {
            exp.replaceWithMultiple([
              exp.node.declaration!,
              t.exportDefaultDeclaration(
                // @ts-expect-error
                t.identifier(exp.node.declaration.id.name)
              ),
            ]);
          }
          if (t.isExportNamedDeclaration(exp.node)) {
            const specifier = t.identifier(
              // todo: might be add more specific type info for `func` to avoid typecast
              (
                exp.node.declaration! as
                  | t.FunctionDeclaration
                  | t.TSDeclareFunction
              ).id!.name
            );
            exp.replaceWithMultiple([
              exp.node.declaration!,
              t.exportNamedDeclaration(null, [
                t.exportSpecifier(specifier, specifier),
              ]),
            ]);
          }
          for (const otherExp of expToRemove) {
            otherExp.replaceWith(otherExp.node.declaration!);
          }
        }
      }
    }
  },
};
