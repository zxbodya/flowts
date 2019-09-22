import bomRules from './lib/bom';
import coreRules from './lib/core';
import cssomRules from './lib/cssom';
import domRules from './lib/dom';
import indexeddbRules from './lib/indexeddb';
import intlRules from './lib/intl';
import nodeRules from './lib/node';
import reactRules from './lib/react';
import reactDomRules from './lib/react-dom';
import serviceworkersRules from './lib/serviceworkers';
import streamsRules from './lib/streams';
import webassemblyRules from './lib/webassembly';
import { RuleSet } from '../ruleTypes';

export default {
  globals: {
    ...bomRules.globals,
    ...coreRules.globals,
    ...cssomRules.globals,
    ...domRules.globals,
    ...indexeddbRules.globals,
    ...intlRules.globals,
    ...nodeRules.globals,
    ...reactRules.globals,
    ...reactDomRules.globals,
    ...serviceworkersRules.globals,
    ...streamsRules.globals,
    ...webassemblyRules.globals,
  },
  modules: {
    ...bomRules.modules,
    ...coreRules.modules,
    ...cssomRules.modules,
    ...domRules.modules,
    ...indexeddbRules.modules,
    ...intlRules.modules,
    ...nodeRules.modules,
    ...reactRules.modules,
    ...reactDomRules.modules,
    ...serviceworkersRules.modules,
    ...streamsRules.modules,
    ...webassemblyRules.modules,
  },
} as RuleSet;
