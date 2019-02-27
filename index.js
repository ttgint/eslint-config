module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    'node': true,
    'es6': true
  },
  parserOptions: {
    'sourceType': 'script'
  },
  rules: {
    'strict': ['error', 'global'],
    'func-names': 'off',
    'no-restricted-syntax': 'off',
    'global-require': 'off',
    'no-await-in-loop': 'warn',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }]
  }
}
