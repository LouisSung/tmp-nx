module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.js', '*.ts'],
      env: {node: true},
      extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
      parserOptions: {
        ecmaVersion: 2020,
        impliedStrict: true,
        sourceType: 'module'
      },
      rules: {
        // js (as of eslint@6.8.0)
        'arrow-body-style': ['warn', 'always'],
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': ['error', {before: true, after: true}],
        'block-spacing': ['error', 'always'],
        'brace-style': 'off', // ts
        'comma-dangle': ['error', 'never'],
        'comma-spacing': 'off', // ts
        'comma-style': ['error', 'last'],
        complexity: ['warn', 10],
        'computed-property-spacing': ['error', 'never', {enforceForClassMembers: true}],
        curly: ['error', 'all'],
        'default-param-last': 'off', // ts
        'dot-notation': 'error',
        'eol-last': ['error', 'always'],
        eqeqeq: ['error', 'always'],
        'func-call-spacing': 'off', // ts
        'func-names': ['error', 'always'],
        'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
        'generator-star-spacing': ['error', {before: true, after: false}],
        'guard-for-in': 'error',
        indent: 'off', // ts
        'key-spacing': ['error', {beforeColon: false, afterColon: true, mode: 'strict'}],
        'keyword-spacing': ['error', {before: true, after: true}],
        'linebreak-style': ['error', 'unix'],
        'max-classes-per-file': ['error', 4],
        'max-depth': ['warn', 5], // @LS: use `disable-next-line` manually if needed (do NOT change this rule)
        'max-len': ['error', {code: 140, tabWidth: 2}],
        'max-lines': ['error', {max: 300, skipBlankLines: true, skipComments: true}],
        'max-lines-per-function': ['warn', {max: 40, skipBlankLines: true, skipComments: true}],
        'max-nested-callbacks': ['warn', 5],
        'max-params': ['warn', 8],
        'max-statements': ['warn', 40, {ignoreTopLevelFunctions: true}],
        'max-statements-per-line': ['error', {max: 3}],
        'multiline-comment-style': ['warn', 'separate-lines'],
        'multiline-ternary': ['error', 'always-multiline'],
        'new-cap': ['error', {newIsCap: true, capIsNew: false, properties: true}],
        'newline-per-chained-call': ['warn', {ignoreChainWithDepth: 4}],
        'new-parens': ['error', 'always'],
        'no-array-constructor': 'off', // ts
        'no-bitwise': ['warn', {allow: ['~'], int32Hint: true}],
        'no-cond-assign': ['error', 'always'],
        'no-confusing-arrow': 'error',
        'no-constructor-return': 'error',
        'no-continue': 'warn',
        'no-delete-var': 'error',
        'no-div-regex': 'warn',
        'no-dupe-class-members': 'off', // ts
        'no-duplicate-imports': ['error', {includeExports: true}],
        'no-else-return': 'warn',
        'no-empty-function': 'off', // ts
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-parens': 'off', // ts
        'no-extra-semi': 'off', // ts
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-irregular-whitespace': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'warn',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off', // ts
        'no-mixed-operators': ['error', {allowSamePrecedence: true}],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': ['error', {ignoreEOLComments: true}],
        'no-multi-str': 'error',
        'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 0, maxBOF: 0}],
        'no-negated-condition': 'warn',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-redeclare': ['error', {builtinGlobals: true}],
        'no-restricted-globals': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': ['warn', {builtinGlobals: true, hoist: 'all', allow: ['event']}],
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': ['error', {typeof: false}],
        'no-undefined': 'off', // @LS: covered by `no-global-assign` and `no-shadow-restricted-names` rules
        'no-underscore-dangle': ['error', {allowAfterThis: true, allowAfterSuper: true, enforceInMethodNames: true}],
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-unreachable': 'warn',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': 'off', // ts
        'no-unused-vars': 'off', // ts
        'no-use-before-define': 'off', // ts
        'no-useless-call': 'error',
        'no-useless-catch': 'warn',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'off', // ts
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'warn',
        'no-warning-comments': ['warn', {terms: ['TODO'], location: 'start'}],
        'no-whitespace-before-property': 'error',
        'object-curly-newline': ['error', {multiline: true, consistent: true}],
        'object-curly-spacing': ['error', 'never'],
        'object-property-newline': ['warn', {allowAllPropertiesOnSameLine: true}],
        'object-shorthand': ['warn', 'always', {avoidQuotes: true}],
        'one-var': ['error', 'never'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': [
          'warn',
          {blankLine: 'always', prev: '*', next: 'return'},
          {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
          {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']}
        ],
        'prefer-arrow-callback': ['warn', {allowNamedFunctions: false, allowUnboundThis: true}],
        'prefer-const': ['error', {destructuring: 'any'}],
        'prefer-numeric-literals': 'warn',
        'prefer-object-spread': 'warn',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed', {numbers: true}],
        quotes: 'off', // ts
        radix: ['error', 'as-needed'],
        'require-await': 'off', // ts
        'require-yield': 'error',
        'rest-spread-spacing': 'error',
        semi: 'off', // ts
        'semi-spacing': ['error', {before: false, after: true}],
        'semi-style': ['error', 'last'],
        'sort-imports': ['warn', {ignoreDeclarationSort: true}],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': 'off', // ts
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': ['error', {int32Hint: false}],
        'space-unary-ops': ['error', {words: true, nonwords: false}],
        strict: 'error',
        'switch-colon-spacing': ['error', {before: false, after: true}],
        'spaced-comment': ['error', 'always'],
        'symbol-description': 'warn',
        'template-curly-spacing': ['error', 'never'],
        'template-tag-spacing': ['error', 'never'],
        'vars-on-top': 'error',
        'valid-typeof': 'error',
        'wrap-iife': 'warn',
        'wrap-regex': 'error',
        'yield-star-spacing': ['error', {before: false, after: true}],
        yoda: 'warn',

        'import/no-unresolved': 'off' // @LS: annoying (for those ts files with suffix)
      }
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json'
      },
      env: {
        browser: true,
        es6: true,
        node: true,
        jest: true
      },
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
      rules: {
        // ts only (as of @typescript-eslint/eslint-plugin@2.23.0)
        '@typescript-eslint/array-type': ['error', {default: 'generic'}],
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/camelcase': ['error', {allow: ['zh_TW']}], // @LS: for ng-zorro i18n
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/interface-name-prefix': 'off', // @LS: not recommend by MicroSoft
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-member-accessibility': ['error', {accessibility: 'explicit', overrides: {constructors: 'no-public'}}],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {delimiter: 'semi', requireLast: true},
            singleline: {delimiter: 'semi', requireLast: true}
          }
        ],
        '@typescript-eslint/member-ordering': 'warn',
        '@typescript-eslint/naming-convention': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-interface': ['error', {allowSingleExtends: true}],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': 'off', // @LS: required empty class in `*.module.tw`
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-inferrable-types': ['error', {ignoreParameters: true}], // @LS: require explicit type for params
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-parameter-properties': 'off', // @LS: allow using parameter properties
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': ['error', {allowedNames: ['self']}],
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-type-alias': [
          'warn',
          {
            allowAliases: 'always',
            allowCallbacks: 'always',
            allowLiterals: 'in-unions-and-intersections',
            allowMappedTypes: 'in-unions-and-intersections'
          }
        ],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
        '@typescript-eslint/no-unnecessary-condition': 'off', // @LS: false positive when LHS might be null or undefined
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-unused-vars-experimental': 'off', // @LS: annoying (there's less configurable as of now)
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': ['warn', {forceSuggestionFixer: true}],
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off', // @LS: required for DI define (dependency injection)
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/restrict-plus-operands': ['error', {checkCompoundAssignments: true}],
        '@typescript-eslint/restrict-template-expressions': 'off', // @LS: hmm, not really useful
        '@typescript-eslint/strict-boolean-expressions': 'off', // @LS: inconvenience and may have bug for short-circuiting
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/typedef': ['error', {memberVariableDeclaration: false}], // @LS: conflict with `no-inferrable-types`
        '@typescript-eslint/unbound-method': ['warn', {ignoreStatic: true}],
        '@typescript-eslint/unified-signatures': 'warn',

        // ts replace js
        '@typescript-eslint/brace-style': ['error', '1tbs', {allowSingleLine: true}],
        '@typescript-eslint/comma-spacing': 'error',
        '@typescript-eslint/default-param-last': 'warn',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-empty-function': 'off', // @LS: useful for placeholder (e.g., promise handling)
        '@typescript-eslint/no-extra-parens': 'off', // @LS: may be useful to clarify things
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/no-magic-numbers': [
          'off', // @LS: annoying (all numbers are regarded as magic by this rule)
          {ignoreNumericLiteralTypes: true, ignoreReadonlyClassProperties: true, ignoreEnums: false}
        ],
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars': ['warn', {vars: 'local', args: 'none'}],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-constructor': 'off', // @LS: required for dependency injection
        '@typescript-eslint/quotes': ['error', 'single', {avoidEscape: true, allowTemplateLiterals: true}],
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/space-before-function-paren': ['error', 'never']
      }
    },
    {
      // for louis app
      files: ['apps/louis/**/*.ts'],
      plugins: ['@angular-eslint'],
      rules: {
        // others
        'no-invalid-this': 'off', // @LS: required for DI access (dependency injection) (may be solved in the future)

        // angular (as of @angular-eslint/eslint-plugin@0.0.1-alpha.23)
        '@angular-eslint/component-class-suffix': 'error',
        '@angular-eslint/component-max-inline-declarations': 'warn',
        '@angular-eslint/component-selector': ['error', {type: 'element', prefix: 'ls', style: 'kebab-case'}],
        '@angular-eslint/contextual-lifecycle': 'error',
        '@angular-eslint/directive-class-suffix': 'error',
        '@angular-eslint/directive-selector': ['error', {type: 'attribute', prefix: 'ls', style: 'camelCase'}],
        '@angular-eslint/no-conflicting-lifecycle': 'error',
        '@angular-eslint/no-forward-ref': 'error',
        '@angular-eslint/no-host-metadata-property': 'error',
        '@angular-eslint/no-input-prefix': 'error', // not given (reject nothing)
        '@angular-eslint/no-input-rename': 'error',
        '@angular-eslint/no-inputs-metadata-property': 'error',
        '@angular-eslint/no-lifecycle-call': 'error',
        '@angular-eslint/no-output-native': 'error',
        '@angular-eslint/no-output-on-prefix': 'error',
        '@angular-eslint/no-output-rename': 'error',
        '@angular-eslint/no-outputs-metadata-property': 'error',
        '@angular-eslint/no-pipe-impure': 'warn',
        '@angular-eslint/no-queries-metadata-property': 'error',
        '@angular-eslint/prefer-on-push-component-change-detection': 'off', // @LS: allow default strategy
        '@angular-eslint/prefer-output-readonly': 'error',
        '@angular-eslint/relative-url-prefix': 'error',
        '@angular-eslint/use-component-selector': 'error',
        '@angular-eslint/use-component-view-encapsulation': 'error',
        '@angular-eslint/use-injectable-provided-in': 'error',
        '@angular-eslint/use-lifecycle-interface': 'warn',
        '@angular-eslint/use-pipe-decorator': 'error',
        '@angular-eslint/use-pipe-transform-interface': 'error'
      }
    },
    {
      // for louis app template
      files: ['apps/louis/**/*.component.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
      rules: {
        '@angular-eslint/template/banana-in-a-box': 'error',
        '@angular-eslint/template/no-negated-async': 'error'
      }
    },
    {
      // for louis app inline template
      files: ['apps/louis/**/*.component.ts'],
      plugins: ['@angular-eslint/template'],
      processor: '@angular-eslint/template/extract-inline-html'
    },
    {
      // for louis api (reserved)
      files: ['apps/api/**/*.ts'],
      rules: {}
    },
    {
      // for louis app and api unit test (jest)
      files: ['apps/louis/**/*.spec.ts', 'apps/api/**/*.spec.ts'],
      plugins: ['jest'],
      extends: ['plugin:jest/all'],
      rules: {
        // jest only (as of eslint-plugin-jest@23.8.2)
        'jest/expect-expect': ['error', {assertFunctionNames: ['expect', 'request.**.expect*']}],
        'jest/no-hooks': 'off', // @LS: allow setup and teardown hooks
        'jest/no-truthy-falsy': 'warn',
        'jest/prefer-expect-assertions': 'warn' // @LS: use `expect.assertions(NUM)` to make sure all the expect are executed
      }
    },
    {
      // for louis app e2e test (cypress)
      files: ['apps/louis-e2e/**/*.ts'],
      env: {'cypress/globals': true},
      plugins: ['cypress'],
      extends: 'plugin:cypress/recommended',
      rules: {
        // @LS: annoying :( but it's not safe to do so and should be fixed in the future
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off'
      }
    },
    {
      files: ['apps/standalone/**/*.ts'],
      rules: {
        'no-shadow': ['warn', {builtinGlobals: true, hoist: 'all', allow: ['event', 'screen']}]
      }
    }
  ]
};
