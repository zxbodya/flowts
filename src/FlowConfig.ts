/* eslint-disable @typescript-eslint/camelcase,@typescript-eslint/no-unused-vars */
const FLOW_COMMENT_LINE_REGEXP = /^\s*[#;💩]/u;
const FLOW_SECTION_REGEXP = /^\s*\[(declarations|include|ignore|untyped|ibs|lints|options|version)]\s*$/;
const FLOW_MAPPER_REGEXP = /\s*'([^']*)'\s*->\s*'([^']*)'/;

const enum FlowSection {
  none, // section is not selected
  declarations,
  include,
  ignore,
  untyped,
  libs,
  lints,
  options,
  version,
}

const sectionMap: { [k: string]: FlowSection } = {
  declarations: FlowSection.declarations,
  include: FlowSection.include,
  ignore: FlowSection.ignore,
  untyped: FlowSection.untyped,
  libs: FlowSection.libs,
  lints: FlowSection.lints,
  options: FlowSection.options,
  version: FlowSection.version,
};

interface FlowOptions {
  all: boolean;
  emoji: boolean;
  esproposal: {
    class_instance_fields: 'enable' | 'ignore' | 'warn';
    class_static_fields: 'enable' | 'ignore' | 'warn';
    decorators: 'ignore' | 'warn';
    export_star_as: 'enable' | 'ignore' | 'warn';
    optional_chaining: 'enable' | 'ignore' | 'warn';
    nullish_coalescing: 'enable' | 'ignore' | 'warn';
  };
  exact_by_default: boolean;
  experimental: {
    const_params: boolean;
  };
  include_warnings: boolean;
  lazy_mode: 'fs' | 'ide' | 'watchman' | 'none';
  log: {
    file: string;
  };
  max_header_tokens: number;
  module: {
    file_ext: string[];
    ignore_non_literal_requires: boolean;
    name_mapper: Array<{ regex: string; moduleName: string }>; // (regex -> string)
    name_mapper__extension: Array<{ extension: string; template: string }>; // (string -> string)
    system: 'node' | 'haste';
    system__node__resolve_dirname: string[];
    use_strict: boolean;
  };
  munge_underscores: boolean;
  no_flowlib: boolean;
  server: {
    max_workers?: number;
  };
  sharedmemory: {
    dirs: string[];
    minimum_available: number;
    dep_table_pow: number;
    hash_table_pow: number;
    heap_size: number;
    log_level: number;
  };
  strip_root: boolean;
  suppress_comment: string[];
  suppress_type: string[];
  temp_dir: string;
  traces?: number;
}

function flowEscapePath(rootPath: string) {
  // todo: not sure if this will match exact logic used by flow,
  // but for specifically for this project it does not matter
  return rootPath.replace('/', 'zS');
}

function getDefaultOptions(rootPath: string): FlowOptions {
  return {
    all: false,
    emoji: false,
    esproposal: {
      class_instance_fields: 'enable',
      class_static_fields: 'enable',
      decorators: 'warn',
      export_star_as: 'warn',
      optional_chaining: 'warn',
      nullish_coalescing: 'warn',
    },
    exact_by_default: false,
    experimental: {
      const_params: false,
    },
    include_warnings: false,
    lazy_mode: 'none',
    log: {
      file: '/tmp/flow/' + flowEscapePath(rootPath) + '.log', // todo:
    },
    max_header_tokens: 10,
    module: {
      file_ext: ['.js', '.jsx', '.mjs', '.json'],
      ignore_non_literal_requires: false,
      name_mapper: [], // (regex -> string)
      name_mapper__extension: [], // (regex -> string)
      system: 'node',
      system__node__resolve_dirname: ['node_modules'],
      use_strict: false,
    },
    munge_underscores: false,
    no_flowlib: false,
    server: {
      max_workers: undefined,
    },
    sharedmemory: {
      dirs: ['/dev/shm', '/tmp'],
      minimum_available: 536870912,
      dep_table_pow: 17,
      hash_table_pow: 19,
      heap_size: 26843545600,
      log_level: 0,
    },
    strip_root: false,
    // if empty - default  // suppress_comment= \\(.\\|\n\\)*\\$FlowFixMe  is used :/
    suppress_comment: [],
    suppress_type: [],
    temp_dir: '/tmp/flow',
    traces: undefined,
  };
}

function parseBoolean(value: string) {
  return /true/i.test(value);
}

function oneOf<T extends string>(value: T | string, options: T[]): T {
  // @ts-ignore
  if (!options.includes(value)) {
    throw new Error(`value ${value} is not one of [${options.join(',')}]`);
  }
  return value as T;
}

export class FlowConfig {
  declarations: string[] = [];
  include: string[] = [];
  ignore: string[] = [];
  untyped: string[] = [];
  libs: string[] = [];
  lints: string[] = [];
  options: FlowOptions; // todo: clone
  version?: string;

  constructor(rootPath: string) {
    this.options = getDefaultOptions(rootPath);
  }

  initDefaults() {}

  parseDeclarations(line: string, lineIndex: number) {
    this.declarations.push(line.trim());
  }
  parseInclude(line: string, lineIndex: number) {
    this.include.push(line.trim());
  }
  parseIgnore(line: string, lineIndex: number) {
    this.ignore.push(line.trim());
  }
  parseUntyped(line: string, lineIndex: number) {
    this.untyped.push(line.trim());
  }
  parseLibs(line: string, lineIndex: number) {
    this.libs.push(line.trim());
  }
  parseLints(line: string, lineIndex: number) {
    this.lints.push(line.trim());
  }
  parseOptions(line: string, lineIndex: number) {
    const trimmedLine = line.trim();
    if (!/=/.test(line)) {
      throw new Error(`line ${lineIndex} is not valid key=value`);
    }
    let [key, value] = trimmedLine.split('=');
    key = key.trim();
    value = value.trim();
    let match;
    switch (key) {
      case 'all':
        this.options.all = parseBoolean(value);
        break;
      case 'emoji':
        this.options.emoji = parseBoolean(value);
        break;
      case 'esproposal.class_instance_fields':
        this.options.esproposal.class_instance_fields = oneOf<
          FlowOptions['esproposal']['class_instance_fields']
        >(value, ['enable', 'ignore', 'warn']);
        break;
      case 'esproposal.class_static_fields':
        this.options.esproposal.class_static_fields = oneOf<
          FlowOptions['esproposal']['class_static_fields']
        >(value, ['enable', 'ignore', 'warn']);
        break;
      case 'esproposal.decorators':
        this.options.esproposal.decorators = oneOf<
          FlowOptions['esproposal']['decorators']
        >(value, ['ignore', 'warn']);
        break;
      case 'esproposal.export_star_as':
        this.options.esproposal.export_star_as = oneOf<
          FlowOptions['esproposal']['export_star_as']
        >(value, ['enable', 'ignore', 'warn']);
        break;
      case 'esproposal.optional_chaining':
        this.options.esproposal.optional_chaining = oneOf<
          FlowOptions['esproposal']['optional_chaining']
        >(value, ['enable', 'ignore', 'warn']);
        break;
      case 'esproposal.nullish_coalescing':
        this.options.esproposal.nullish_coalescing = oneOf<
          FlowOptions['esproposal']['nullish_coalescing']
        >(value, ['enable', 'ignore', 'warn']);
        break;

      case 'exact_by_default':
        this.options.exact_by_default = parseBoolean(value);
        break;

      case 'experimental.const_params':
        this.options.experimental.const_params = parseBoolean(value);
        break;

      case 'include_warnings':
        this.options.include_warnings = parseBoolean(value);
        break;
      case 'lazy_mode':
        this.options.lazy_mode = oneOf<FlowOptions['lazy_mode']>(value, [
          'fs',
          'ide',
          'watchman',
          'none',
        ]);
        break;

      case 'log.file':
        this.options.log.file = value;
        break;
      case 'max_header_tokens':
        this.options.max_header_tokens = parseInt(value);
        break;

      case 'module.file_ext':
        this.options.module.file_ext.push(value);
        break;
      case 'module.ignore_non_literal_requires':
        this.options.module.ignore_non_literal_requires = parseBoolean(value);
        break;
      case 'module.name_mapper':
        match = FLOW_MAPPER_REGEXP.exec(value);
        if (match === null) {
          throw new Error('invalid config at line ' + lineIndex);
        }
        this.options.module.name_mapper.push({
          regex: match[1],
          moduleName: match[2],
        });
        break; // (regex -> string)
      case 'module.name_mapper_extension':
        match = FLOW_MAPPER_REGEXP.exec(value);
        if (match === null) {
          throw new Error('invalid config at line ' + lineIndex);
        }
        this.options.module.name_mapper__extension.push({
          extension: match[1],
          template: match[2],
        });
        break; // (regex -> string)
      case 'module.system':
        this.options.module.system = oneOf<FlowOptions['module']['system']>(
          value,
          ['node', 'haste']
        );
        break;
      case 'module.system_node_resolve_dirname':
        this.options.module.system__node__resolve_dirname.push(value);
        break;
      case 'module.use_strict':
        this.options.module.use_strict = parseBoolean(value);
        break;

      case 'munge_underscores':
        this.options.munge_underscores = parseBoolean(value);
        break;
      case 'no_flowlib':
        this.options.no_flowlib = parseBoolean(value);
        break;
      case 'server.max_workers':
        this.options.server.max_workers = parseInt(value);
        break;

      case 'sharedmemory.dirs':
        this.options.sharedmemory.dirs.push(value);
        break;
      case 'sharedmemory.minimum_available':
        this.options.sharedmemory.minimum_available = parseInt(value);
        break;
      case 'sharedmemory.dep_table_pow':
        this.options.sharedmemory.dep_table_pow = parseInt(value);
        break;
      case 'sharedmemory.hash_table_pow':
        this.options.sharedmemory.hash_table_pow = parseInt(value);
        break;
      case 'sharedmemory.heap_size':
        this.options.sharedmemory.heap_size = parseInt(value);
        break;
      case 'sharedmemory.log_level':
        this.options.sharedmemory.log_level = parseInt(value);
        break;

      case 'strip_root':
        this.options.strip_root = parseBoolean(value);
        break;
      case 'suppress_comment':
        this.options.suppress_comment.push(value);
        break;
      case 'suppress_type':
        this.options.suppress_type.push(value);
        break;
      case 'temp_dir':
        this.options.temp_dir = value;
        break;

      case 'traces':
        this.options.traces = parseInt(value);
        break;

      default:
        throw new Error(`unknown key at line ${lineIndex}`);
    }
  }
  parseVersion(line: string, lineIndex: number) {
    if (this.version) {
      console.warn(`flow version redefined at line ${lineIndex}`);
    }
    this.version = line.trim();
  }
  parse(data: string) {
    const lines = data.split('\n');

    let currentSection = FlowSection.none;

    for (
      let lineIndex = 0, linesLenght = lines.length;
      lineIndex < linesLenght;
      lineIndex += 1
    ) {
      const line = lines[lineIndex];
      if (!FLOW_COMMENT_LINE_REGEXP.test(line)) {
        continue;
      }
      const sectionMatch = FLOW_SECTION_REGEXP.exec(line);
      if (sectionMatch === null) {
        if (line.trim() !== '') {
          switch (currentSection) {
            case FlowSection.none:
              throw new Error(
                `Error in .flowconfig at line ${lineIndex} - section is not set`
              );
            case FlowSection.declarations:
              this.parseDeclarations(line, lineIndex);
              break;
            case FlowSection.include:
              this.parseInclude(line, lineIndex);
              break;
            case FlowSection.ignore:
              this.parseIgnore(line, lineIndex);
              break;
            case FlowSection.untyped:
              this.parseUntyped(line, lineIndex);
              break;
            case FlowSection.libs:
              this.parseLibs(line, lineIndex);
              break;
            case FlowSection.lints:
              this.parseLints(line, lineIndex);
              break;
            case FlowSection.options:
              this.parseOptions(line, lineIndex);
              break;
            case FlowSection.version:
              this.parseVersion(line, lineIndex);
              break;
          }
        }
      } else {
        let section = sectionMap[sectionMatch[1]];
        currentSection = section ? section : FlowSection.none;
      }
    }
  }
}
