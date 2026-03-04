module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  extends: [
    'plugin:prettier/recommended',
    '@react-native',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    '@feature-sliced/eslint-config/rules/layers-slices',
  ],
  plugins: ['simple-import-sort', 'jest'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'react/display-name': 'error',
    'react/prop-types': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@react-'],
          ['^\\u0000'],
          ['^node:'],
          ['^@?\\w'],
          ['^@app', '^@screens', '^@widgets', '^@features', '^@entities', '^@shared'],
          ['^', '^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.ts', '**/*.test.ts', '**/*.test.tsx'],
      env: { 'jest/globals': true },
      plugins: ['jest'],
    },
  ],
};
