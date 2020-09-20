module.exports = {
  env: {
    'commonjs': true,
    'es2021': true,
    'node': true,
    'jest': true,
    'jest/globals': true,
  },
  plugins: [
    'jest',
    'security',
    'unicorn',
    'node',
  ],
  extends: [
    'google',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:security/recommended',
    'plugin:unicorn/recommended',
    'plugin:node/recommended',
  ],
  parserOptions: {
    'ecmaVersion': 12,
  },
  rules: {
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "max-len": ["off"],
    'array-bracket-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': 0,
    'unicorn/import-index': 0,
  },
};
