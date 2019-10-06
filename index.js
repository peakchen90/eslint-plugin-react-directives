module.exports = {
  rules: {
    'no-undef': require('./lib/rules/no-undef'),
    'no-unused-vars': require('./lib/rules/no-unused-vars')
  },
  configs: {
    recommended: {
      parser: 'babel-eslint',
      parserOptions: {
        ecmaVersion: 6
      },
      plugins: [
        'react-directives'
      ],
      rules: {}
    }
  }
};
