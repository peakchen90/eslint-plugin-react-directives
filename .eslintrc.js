module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    node: true
  },
  extends: [
    'airbnb-base'
  ],
  rules: {
    'comma-dangle': 'off',
    'prefer-destructuring': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'arrow-parens': 'off',
    'for-direction': 'off',
    'no-plusplus': 'off',
    'global-require': 'off',
    'arrow-body-style': 'off'
  }
}
