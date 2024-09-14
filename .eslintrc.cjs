module.exports = {
  env: {
    browser: true,
  },
  overrides: [{ files: ['*.jsx', '*.js'] }],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime', 'prettier'],
  ignorePatterns: ['*', '!src', '!src/**/*'],
  rules: {
    'no-unused-vars': 'warn',
    'no-plusplus': 'off',
    'import/extensions': ['error', 'ignorePackages'],
    'no-param-reassign': ['error', { props: false }],

    'lines-between-class-members': [
      'error',
      {
        enforce: [
          { blankLine: 'always', prev: '*', next: 'method' },
          { blankLine: 'always', prev: 'method', next: '*' },
          { blankLine: 'never', prev: 'field', next: 'field' },
        ],
      },
    ],
  },
};
