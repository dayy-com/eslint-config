const prettierConfig = require('./prettier.js');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ['plugin:prettier/recommended'],

  plugins: ['simple-import-sort'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
