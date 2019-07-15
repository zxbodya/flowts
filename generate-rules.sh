#!/usr/bin/env bash

npm run build

node ./dist/generate-rules.js \
          ./flow-0.102.0/lib/bom.js \
          ./src/lib-rules/bom.ts \
          lib/bom.js
node ./dist/generate-rules.js \
          ./flow-0.102.0/lib/core.js \
          ./src/lib-rules/core.ts \
          lib/core.js
node ./dist/generate-rules.js \
          ./flow-0.102.0/lib/cssom.js \
          ./src/lib-rules/cssom.ts \
          lib/cssom.js
node ./dist/generate-rules.js \
          ./flow-0.102.0/lib/dom.js \
          ./src/lib-rules/dom.ts \
          lib/dom.js
node ./dist/generate-rules.js \
          ./flow-0.102.0/lib/indexeddb.js \
          ./src/lib-rules/indexeddb.ts \
          lib/indexeddb.js
node ./dist/generate-rules.js \
          ./flow-0.102.0/lib/intl.js \
          ./src/lib-rules/intl.ts \
          lib/intl.js
node ./dist/generate-rules.js \
          ./flow-0.102.0/lib/node.js \
          ./src/lib-rules/node.ts \
          lib/node.js
node ./dist/generate-rules.js \
          ./flow-0.102.0/lib/react.js \
          ./src/lib-rules/react.ts \
          lib/react.js
node ./dist/generate-rules.js \
          ./flow-0.102.0/lib/react-dom.js \
          ./src/lib-rules/react-dom.ts \
          lib/react-dom.js
node ./dist/generate-rules.js \
          ./flow-0.102.0/lib/serviceworkers.js \
          ./src/lib-rules/serviceworkers.ts \
          lib/serviceworkers.js
node ./dist/generate-rules.js \
          ./flow-0.102.0/lib/streams.js \
          ./src/lib-rules/streams.ts \
          lib/streams.js
node ./dist/generate-rules.js \
          ./flow-0.102.0/lib/webassembly.js \
          ./src/lib-rules/webassembly.ts \
          lib/webassembly.js
