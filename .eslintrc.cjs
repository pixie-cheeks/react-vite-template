module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime', 'prettier'],
  ignorePatterns: ['/*', '!/src'],
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
