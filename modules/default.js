// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', '../lib/shared.js'],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': [
      2,
      {
        forbidDefaultForRequired: true,
        functions: 'defaultArguments',
      },
    ],
  },
};
