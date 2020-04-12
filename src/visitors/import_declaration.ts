import {
  identifier,
  importDeclaration,
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportNamespaceSpecifier,
  ImportSpecifier,
  tsImportType,
  tsTypeAliasDeclaration,
  tsTypeQuery,
} from '@babel/types';
import { NodePath } from '@babel/traverse';

export function ImportDeclaration(path: NodePath<ImportDeclaration>) {
  // "import type" in TypeScript does not allow mixing different imports (default, namespace and named)
  if (path.node.importKind === 'typeof') {
    const types = path.node.specifiers.map(specifier =>
      tsTypeAliasDeclaration(
        specifier.local,
        null,
        tsTypeQuery(
          tsImportType(
            path.node.source,
            specifier.type === 'ImportDefaultSpecifier'
              ? identifier('default')
              : specifier.type === 'ImportSpecifier'
              ? specifier.imported
              : null,
          ),
        ),
      ),
    );
    path.replaceWithMultiple(types);
    return;
  }
  if (path.node.importKind === 'type') {
    const importSpecifiers: ImportSpecifier[] = [];
    const importDefaultSpecifiers: ImportDefaultSpecifier[] = [];
    const importNamespaceSpecifiers: ImportNamespaceSpecifier[] = [];
    for (const specifier of path.node.specifiers) {
      if (specifier.type === 'ImportSpecifier') importSpecifiers.push(specifier);
      if (specifier.type === 'ImportDefaultSpecifier') importDefaultSpecifiers.push(specifier);
      if (specifier.type === 'ImportNamespaceSpecifier') importNamespaceSpecifiers.push(specifier);
    }
    const groups = [importNamespaceSpecifiers, importDefaultSpecifiers, importSpecifiers].filter(
      v => v.length > 0,
    );
    if (groups.length > 1) {
      path.node.specifiers = groups[0];
      path.insertAfter(
        groups.slice(1).map(group => {
          const separateImport = importDeclaration(group, path.node.source);
          separateImport.importKind = 'type';
          return separateImport;
        }),
      );
    }
  } else {
    // import with possibly mixed named specifiers (types and values)
    const keep = [];
    const moveType = [];
    const moveTypeof = [];
    for (const specifier of path.node.specifiers) {
      if (specifier.type === 'ImportSpecifier') {
        if (specifier.importKind === 'type') {
          moveType.push(specifier);
        } else if (specifier.importKind === 'typeof') {
          moveTypeof.push(specifier);
        } else {
          keep.push(specifier);
        }
      } else {
        keep.push(specifier);
      }
      if (specifier.type === 'ImportSpecifier') {
        delete specifier.importKind;
      }
    }
    const types = moveTypeof.map(specifier =>
      tsTypeAliasDeclaration(
        specifier.local,
        null,
        tsTypeQuery(tsImportType(path.node.source, specifier.imported)),
      ),
    );
    if (keep.length === 0) {
      if (moveType.length > 0) {
        // import {type A, type B} from 'mod';
        path.node.importKind = 'type';
        path.node.specifiers = moveType;
      }
      if (moveTypeof.length > 0) {
        if (moveType.length > 0) {
          path.insertAfter(types);
        } else {
          path.replaceWithMultiple(types);
        }
      }
    } else {
      path.node.specifiers = keep;
      if (moveType.length > 0) {
        // import {A, type B} from 'mod';
        // import C, {A, type B} from 'mod';
        path.node.specifiers = keep;
        const typesImport = importDeclaration(moveType, path.node.source);
        typesImport.importKind = 'type';
        path.insertAfter(typesImport);
      }
      if (moveTypeof.length > 0) {
        path.insertAfter(types);
      }
    }
  }
}
