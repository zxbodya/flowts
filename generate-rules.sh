#!/usr/bin/env bash

npm run build

node ./dist/generate-rules.js \
          ./flow-lib/bom.js \
          ./src/rules/lib/bom.ts \
          lib/bom.js
node ./dist/generate-rules.js \
          ./flow-lib/core.js \
          ./src/rules/lib/core.ts \
          lib/core.js
node ./dist/generate-rules.js \
          ./flow-lib/cssom.js \
          ./src/rules/lib/cssom.ts \
          lib/cssom.js
node ./dist/generate-rules.js \
          ./flow-lib/dom.js \
          ./src/rules/lib/dom.ts \
          lib/dom.js
node ./dist/generate-rules.js \
          ./flow-lib/indexeddb.js \
          ./src/rules/lib/indexeddb.ts \
          lib/indexeddb.js
node ./dist/generate-rules.js \
          ./flow-lib/intl.js \
          ./src/rules/lib/intl.ts \
          lib/intl.js
node ./dist/generate-rules.js \
          ./flow-lib/node.js \
          ./src/rules/lib/node.ts \
          lib/node.js
#node ./dist/generate-rules.js \
#          ./flow-lib/react.js \
#          ./src/rules/lib/react.ts \
#          lib/react.js
#node ./dist/generate-rules.js \
#          ./flow-lib/react-dom.js \
#          ./src/rules/lib/react-dom.ts \
#          lib/react-dom.js
node ./dist/generate-rules.js \
          ./flow-lib/serviceworkers.js \
          ./src/rules/lib/serviceworkers.ts \
          lib/serviceworkers.js
node ./dist/generate-rules.js \
          ./flow-lib/streams.js \
          ./src/rules/lib/streams.ts \
          lib/streams.js
node ./dist/generate-rules.js \
          ./flow-lib/webassembly.js \
          ./src/rules/lib/webassembly.ts \
          lib/webassembly.js
