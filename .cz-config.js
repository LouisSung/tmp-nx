module.exports = {
  types: [
    {
      value: 'feat',
      name: '* feat:        add new features\n' + '            >>>    Make sure the MINOR or MAJOR version of each file is updated!'
    },
    {
      value: 'refactor',
      name:
        '* refactor:    code change that are NOT fix or feat (e.g., optimize)\n' +
        '            >>>    NEVER EVER introduce any FEATURE change!!'
    },
    {value: 'fix', name: '* fix:         bugs fix ONLY'},
    {value: 'chore', name: '* chore:       NO production code change (e.g., config change) (rarely used!)'},
    {
      value: 'wip',
      name:
        '* WIP:         TMP commit (use as `git stash` alternative)\n' +
        '           >>>    NEVER EVER push WIP commit to remote!! (do `git reset`)'
    },
    {value: 'revert', name: '+ revert:      rollback to previous commit (rarely used)'},
    {value: 'docs', name: '+ docs:        docs change ONLY'},
    {value: 'test', name: '+ test:        test specs change ONLY'},
    {value: 'merge', name: "+ marge:       git merge (e.g., `merge (api): 'feature/202002/api/*'`)"}
  ],

  scopes: [{name: 'N/A', value: ''}],
  scopeOverrides: {
    feat: [{name: 'app'}, {name: 'api'}, {name: 'lib'}],
    merge: [{name: 'app'}, {name: 'api'}, {name: 'common'}, {name: 'core algo'}]
  },

  messages: {
    type: 'Select the commit TYPE:',
    scope: '\nDenote the SCOPE of commit (OPTIONAL):',
    customScope: 'Custom SCOPE:',
    subject: 'Write a SHORT, IMPERATIVE tense subject (REQUIRED):\n',
    body: 'Provide a LONGER and INFORMATIVE description (REQUIRED).\nUse "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (OPTIONAL):\n',
    footer: 'List any ISSUES CLOSED by this change (OPTIONAL). E.g.: #31, #34:\n',
    confirmCommit: 'USE "git commit" with "Vim" to ensure the line length (72) (RECOMMENDED)'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'merge'],
  skipQuestions: ['breaking', 'footer'],
  subjectLimit: 67 // 72 - 3(types) - 2(: )
};
