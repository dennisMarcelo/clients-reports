module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    camelcase: [
      2,
      {
        ignoreDestructuring: true,
      },
    ],
    'arrow-parens': [
      2,
      'always',
    ],
    quotes: [
      2,
      'single',
    ],
    'implicit-arrow-linebreak': 'off',
    'consistent-return': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'object-curly-newline': 'off',
    'max-params': [
      'error',
      4,
    ],
    'max-lines': [
      'error',
      250,
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 25,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
      },
    ],
    complexity: [
      'error',
      5,
    ],
  },
};
