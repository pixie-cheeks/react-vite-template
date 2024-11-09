import pixie from '@pixie-cheeks/eslint-config';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import vitest from '@vitest/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{jsx,js,cjs}'],
  },
  ...pixie.react,
  {
    plugins: {
      'react-refresh': pluginReactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
      'import-x/no-extraneous-dependencies': [
        'error',
        // All js/cjs files in the root folder can have devDeps
        {
          devDependencies: ['*.{js,cjs}', '**/*.test.*', './test-setup.js'],
          optionalDependencies: false,
        },
      ],
    },
  },
  {
    files: ['**/*.test.*'],
    plugins: { vitest },
    rules: { ...vitest.configs.recommended.rules },
  },
];
