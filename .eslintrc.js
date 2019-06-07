// The rules defined here enforce StandardJS rules and limit the length of
// files to 80 characters. The intention is to follow a standard style guide
// and keep code samples short enough that they display well everywhere.
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: 'standard',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    // Go against StandardJS, and require trailing commas.
    // Trailing commas reduce the size of diffs.
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      // Trailing commas for function calls are annoying.
      functions: 'only-multiline',
    }],
    // Don't allow spaces inside braces.
    'object-curly-spacing': ['warn', 'never'],
    // Require line breaks before binary operators.
    // This follow's Knuth's style.
    'operator-linebreak': ['warn', 'before', {
      overrides: {
        '=': 'ignore',
        '+=': 'ignore',
        '-=': 'ignore',
        '*=': 'ignore',
        '/=': 'ignore',
        '%=': 'ignore',
        '**=': 'ignore',
      },
    }],
    'padding-line-between-statements': [
      'warn',
      // Require blank lines before control statements.
      {blankLine: 'always', prev: '*', next: 'block'},
      {blankLine: 'always', prev: '*', next: 'block-like'},
      {blankLine: 'always', prev: '*', next: 'break'},
      {blankLine: 'always', prev: '*', next: 'class'},
      {blankLine: 'always', prev: '*', next: 'continue'},
      {blankLine: 'always', prev: '*', next: 'do'},
      {blankLine: 'always', prev: '*', next: 'for'},
      {blankLine: 'always', prev: '*', next: 'if'},
      {blankLine: 'always', prev: '*', next: 'return'},
      {blankLine: 'always', prev: '*', next: 'switch'},
      {blankLine: 'always', prev: '*', next: 'throw'},
      {blankLine: 'always', prev: '*', next: 'try'},
      {blankLine: 'always', prev: '*', next: 'while'},
      // Do not allow blank lines before switch statement labels.
      {blankLine: 'never', prev: '*', next: 'case'},
      {blankLine: 'never', prev: '*', next: 'default'},
    ],
    // Prefer arrow functions.
    'prefer-arrow-callback': 'warn',
    // Require parentheses to make arrow function bodies less confusing.
    'no-confusing-arrow': ['error', {allowParens: true}],
    // Treat function parameters as if they are `const`.
    'no-param-reassign': 'error',
    // Prefer no quotes for properties.
    'quote-props': ['warn', 'as-needed', {
      keywords: false,
      numbers: false,
    }],

    // Disable ESLint warnings about undefined variables.
    // TypeScript does a better job of checking this.
    'no-undef': 'off',

    'max-len': ['error', {code: 80}],
  },
}
