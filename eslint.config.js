import pixie from '@pixie-cheeks/eslint-config';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    files: ['**/*.{jsx,js}'],
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
        // All js/jsx files in the root folder can have devDeps
        { devDependencies: ['*.{js,cjs}'], optionalDependencies: false },
      ],
    },
  },
];
