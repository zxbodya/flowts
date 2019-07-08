type Source =
  | { globalName: string; type: 'global' }
  | { module: string; exportName: string; type: 'module' };

interface Target {
  module: string;
  exportName: string;
  type: 'module';
}

interface Fix {
  source: Source;
  target: Target;
}

export default [
  {
    source: { type: 'global', globalName: 'SyntheticEvent' },
    target: {
      type: 'module',
      module: 'react',
      exportName: 'SyntheticEvent',
    },
  },
  {
    source: { type: 'global', globalName: 'SyntheticInputEvent' },
    target: {
      type: 'module',
      module: 'react',
      exportName: 'ChangeEvent',
    },
  },
  {
    source: { type: 'global', globalName: 'SyntheticMouseEvent' },
    target: {
      type: 'module',
      module: 'react',
      exportName: 'MouseEvent',
    },
  },
  {
    source: { type: 'global', globalName: 'SyntheticKeyboardEvent' },
    target: {
      type: 'module',
      module: 'react',
      exportName: 'KeyboardEvent',
    },
  },
  {
    source: { type: 'global', globalName: 'SyntheticFocusEvent' },
    target: {
      type: 'module',
      module: 'react',
      exportName: 'FocusEvent',
    },
  },
  {
    source: { type: 'global', globalName: 'SyntheticDragEvent' },
    target: {
      type: 'module',
      module: 'react',
      exportName: 'DragEvent',
    },
  },
  {
    source: { type: 'global', globalName: 'React$Node' },
    target: {
      type: 'module',
      module: 'react',
      exportName: 'ReactNode',
    },
  },
  {
    source: { type: 'module', module: 'react', exportName: 'Node' },
    target: {
      type: 'module',
      module: 'react',
      exportName: 'ReactNode',
    },
  },
  {
    source: { type: 'module', module: 'react', exportName: 'Element' },
    target: {
      type: 'module',
      module: 'react',
      exportName: 'ReactElement',
    },
  },
  {
    source: {
      type: 'module',
      module: 'react',
      exportName: 'AbstractComponent',
    },
    target: {
      type: 'module',
      module: 'react',
      exportName: 'ComponentType',
    },
  },
  {
    source: { type: 'global', globalName: 'React$ElementRef' },
    target: {
      type: 'module',
      module: 'react',
      exportName: 'RefObject',
    },
  },
] as Fix[];
