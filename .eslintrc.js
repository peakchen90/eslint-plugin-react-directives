module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
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
