module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    'func-names': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
    'prefer-arrow-callback': 'off',
    'global-require': 'off',
    'jsx-a11y/href-no-hash': [0],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-wrap-multilines': 'off',
    'react/no-did-update-set-state': 'off',
    'react/destructuring-assignment': 'off',
    'no-console': 'error'
  }
}
