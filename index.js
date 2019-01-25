module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'func-names': 'off',
    'no-restricted-syntax': 'off',
    'global-require': 'off',
    'no-await-in-loop': 'warn',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }]
  }
}
