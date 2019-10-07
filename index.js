module.exports = {
  rules: {
    'no-undef': require('./lib/rules/no-undef'),
    'no-unused-vars': require('./lib/rules/no-unused-vars')
  },
  configs: {
    recommended: {
      parserOptions: {
        ecmaVersion: 6
      },
      plugins: [
        'react-directives'
      ],
      rules: {
        'react-directives/no-undef': 'error',
        'react-directives/no-unused-vars': 'error'
      }
    }
  }
};
