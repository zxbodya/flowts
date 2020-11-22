#!/usr/bin/env bash

npm run build

flowLib=../../../flow/lib

node ./dist/generateRules/generateRules.js \
          $flowLib/bom.js \
          ./src/rules/lib/bom.ts \
          lib/bom.js
node ./dist/generateRules/generateRules.js \
          $flowLib/core.js \
          ./src/rules/lib/core.ts \
          lib/core.js
node ./dist/generateRules/generateRules.js \
          $flowLib/cssom.js \
          ./src/rules/lib/cssom.ts \
          lib/cssom.js
node ./dist/generateRules/generateRules.js \
          $flowLib/dom.js \
          ./src/rules/lib/dom.ts \
          lib/dom.js
node ./dist/generateRules/generateRules.js \
          $flowLib/indexeddb.js \
          ./src/rules/lib/indexeddb.ts \
          lib/indexeddb.js
node ./dist/generateRules/generateRules.js \
          $flowLib/intl.js \
          ./src/rules/lib/intl.ts \
          lib/intl.js
node ./dist/generateRules/generateRules.js \
          $flowLib/node.js \
          ./src/rules/lib/node.ts \
          lib/node.js
node ./dist/generateRules/generateRules.js \
          $flowLib/react.js \
          ./src/rules/lib/react.ts \
          lib/react.js
node ./dist/generateRules/generateRules.js \
          $flowLib/react-dom.js \
          ./src/rules/lib/react-dom.ts \
          lib/react-dom.js
node ./dist/generateRules/generateRules.js \
          $flowLib/serviceworkers.js \
          ./src/rules/lib/serviceworkers.ts \
          lib/serviceworkers.js
node ./dist/generateRules/generateRules.js \
          $flowLib/streams.js \
          ./src/rules/lib/streams.ts \
          lib/streams.js
node ./dist/generateRules/generateRules.js \
          $flowLib/webassembly.js \
          ./src/rules/lib/webassembly.ts \
          lib/webassembly.js
