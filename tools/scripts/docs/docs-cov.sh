#!/usr/bin/env bash
# Usage: Documentation coverage check
# Edit Date: [LS] 2020-0321

# check target
if [[ "$#" -eq 0 ]]; then
  echo 'Miss param (TARGET): [app/api]'
  exit 1
elif [[ "$1" == 'app' ]]; then
  SRC_DIR=apps/louis/src
  TSCONFIG=apps/louis/tsconfig.json
elif [[ "$1" == 'api' ]]; then
  SRC_DIR=apps/api/src
  TSCONFIG=apps/api/tsconfig.json
else
  echo 'Invalid TARGET: [app/api]'
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
RESTORE_DIR=$(pwd)

cd "$SCRIPT_DIR" || exit 1
cd ../../../  # move to project root
# <<<<<<< Script Start

shift
compodoc "$SRC_DIR" -p "$TSCONFIG" --coverageTest "$@" || exit 1

# >>>>>>> Script End
cd "$RESTORE_DIR" || exit 1
