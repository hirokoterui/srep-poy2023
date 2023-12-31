module.exports = {
  root: true,
  extends: ['standard', 'plugin:svelte/recommended'],
  plugins: ['@babel', 'mocha'],
  env: {
    browser: true,
    es2017: true,
    node: true,
    mocha: true,
  },
  settings: {
    'svelte/ignore-styles': () => true,
  },
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'never',
      },
    ],
    'operator-linebreak': ['error', 'after'],
    'space-before-function-paren': ['error', 'never'],
    eqeqeq: 'warn',
    'no-unused-vars': ['warn', { args: 'after-used' }],
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      rules: {
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2 }],
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-unresolved': 'off',
        'svelte/no-at-html-tags': 'off',
        indent: ['error', 2],
      },
    },
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    requireConfigFile: false,
  },
};
