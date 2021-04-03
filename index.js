module.exports = {
  rules: {
    'no-undef': require('./lib/rules/no-undef'),
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
      }
    }
  }
};
