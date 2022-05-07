module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  env: {
    node: true,
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jest'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'linebreak-style': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'import/prefer-default-export': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['off'],
    'no-extra-semi': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
}
