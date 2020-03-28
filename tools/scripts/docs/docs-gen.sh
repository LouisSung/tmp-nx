#!/usr/bin/env bash
# Usage: Documentation generation using Compodoc (should be called using yarn run)
# Edit Date: [LS] 2020-0321

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
RESTORE_DIR=$(pwd)
cd "$SCRIPT_DIR" || exit 1
# <<<<<<< Script Start

# check target
if [[ "$#" -eq 0 ]]; then
  echo 'Miss param (TARGET): [app/api]'
  exit 1
elif [[ "$1" == 'app' ]]; then
  TEST='louis:test:app'
  TITLE='APP'
  SRC_DIR=apps/louis/src
  TARGET_DIR=docs/louis
  TSCONFIG=apps/louis/tsconfig.json
  COVERAGE_DIR=coverage/apps/louis
elif [[ "$1" == 'api' ]]; then
  TEST='louis:test:api'
  TITLE='API'
  SRC_DIR=apps/api/src
  TARGET_DIR=docs/api
  TSCONFIG=apps/api/tsconfig.json
  COVERAGE_DIR=coverage/apps/api
else
  echo 'Invalid TARGET: [app/api]'
  exit 1
fi

cd ../../../  # move to project root
[ ! -d "$COVERAGE_DIR" ] && yon run $TEST
shift
compodoc "$SRC_DIR" -p "$TSCONFIG" -n "$TITLE" --hideGenerator -d "$TARGET_DIR" --unitTestCoverage "$COVERAGE_DIR/coverage-summary.json" "$@"

# >>>>>>> Script End
cd "$RESTORE_DIR" || exit 1
