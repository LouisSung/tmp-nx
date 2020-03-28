#!/usr/bin/env bash
# Usage: Check coverage threshold and generate docs
# Edit Date: [LS] 2020-0322

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
RESTORE_DIR=$(pwd)
cd "$SCRIPT_DIR" || exit 1
# <<<<<<< Script Start

THRESHOLD_APP=${1:-0}
THRESHOLD_API=${2:-75}

COVERAGE=$(./docs-cov.sh app "$THRESHOLD_APP")
RESULT=$?
COVERAGE="$(echo "$COVERAGE" | grep threshold)"
if test $RESULT -eq 0; then
  echo -e "\e[1;32m>>> $COVERAGE\e[0m"
else
  echo -e "\e[1;31m>>> $COVERAGE\e[0m" && exit 1
fi

COVERAGE=$(./docs-cov.sh api "$THRESHOLD_API")
RESULT=$?
COVERAGE="$(echo "$COVERAGE" | grep threshold)"
if test $RESULT -eq 0; then
  echo -e "\e[1;32m>>> $COVERAGE\e[0m"
else
  echo -e "\e[1;31m>>> $COVERAGE\e[0m" && exit 1
fi

# >>>>>>> Script End
cd "$RESTORE_DIR" || exit 1
