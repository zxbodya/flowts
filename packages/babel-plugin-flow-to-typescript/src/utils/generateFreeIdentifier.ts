// https://github.com/bcherny/flow-to-typescript/blob/f1dbe3d1f97b97d655ea6c5f1f5caaaa9f1e0c9f/src/utils.ts
const candidates = 'abcdefghijklmnopqrstuvwxyz'.split('');
export function generateFreeIdentifier(usedIdentifiers: string[]) {
  return candidates.find(_ => usedIdentifiers.indexOf(_) < 0)!;
}
