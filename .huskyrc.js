// pre-commit
const requireSignedCommit = `{
if [ "$(git config --get commit.gpgsign)" = 'true' ]; then
  if test -z "$(git config --get user.signingkey)"; then
    echo -e "\\e[1;31m>>> GPG key is not set!! ($ git config user.signingkey XXX)\\e[0m" && exit 1
  fi
else
  echo -e "\\e[1;31m>>> Require GPG signed commit!! ($ git config commit.gpgsign true)\\e[0m" && exit 1
fi
}`;
const runLint = 'yon run ls:lint';
const runUnitTest = 'yon run ls:test';

// commit-msg
const runCommitLint = 'commitlint -E HUSKY_GIT_PARAMS --verbose';

// pre-push
const rejectWIPCommit = `{
if test -n "$(git log --oneline | grep -P '[0-9a-f]{7} wip: ')"; then
  echo -e "\\e[1;31m>>> Commit with type 'wip: ' should NOT push to remote!!\\e[0m"
  git log --oneline --grep 'wip:' --color=always && exit 1
fi
}`;
const runE2eTest = 'yon run ls:e2e';
const checkTestCoverage = 'yon run ls:test:app && yon run ls:test:api';
const genDocs = 'yon run ls:docs:check && yon run ls:docs:app && yon run ls:docs:api';
module.exports = {
  hooks: {
    'pre-commit': `${requireSignedCommit} && ${runLint} && ${runUnitTest}`,
    'commit-msg': `${runCommitLint}`,
    'pre-push': `${rejectWIPCommit} && ${runE2eTest} && ${checkTestCoverage} && ${genDocs}`
  }
};
