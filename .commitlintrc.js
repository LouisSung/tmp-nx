module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-empty': [2, 'never'], // @LS: use `N/A` as body if you really have nothing to say... (NOT recommended)
    'body-max-line-length': [2, 'always', 72], // both header and body length are limited to 72 chars
    'header-max-length': [2, 'always', 72],
    'subject-min-length': [2, 'always', 5], // start with imperative VERB and give INFORMATIVE info
    'type-enum': [2, 'always', ['feat', 'fix', 'refactor', 'chore', 'wip', 'revert', 'docs', 'test', 'merge']] // see .cz-config.js
  }
};
