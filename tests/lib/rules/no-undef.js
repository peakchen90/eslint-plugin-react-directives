const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-undef');

new RuleTester({
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
}).run('no-undef', rule, {
  valid: [
    {
      code: `
        const list = [1, 2, 3]
        const foo = <li x-for={(item, index) in list} key={item.id}>{item}</li>
      `
    },
    {
      code: `
        const foo = (
          <li x-for={(item, index) in [1, 2, 3]} key={item.id}>
            <span>{item}</span>
          </li>
        )
      `
    },
    {
      code: `
        const foo = (
          <li v-for={(item, index) in [1, 2, 3]} key={item.id}>{item}</li>
        )
      `,
      settings: {
        'react-directives': {
          prefix: 'v'
        }
      }
    },
  ],
  invalid: [
    {
      code: `
        const foo = (
          <li foo={(item) in [1, 2, 3]} key={item.id}>{item}</li>
        )
      `,
      errors: [
        { message: /'item' is not defined/ },
        { message: /'item' is not defined/ },
        { message: /'item' is not defined/ }
      ]
    },
    {
      code: `
        const foo = (
          <li x-for={item in [1, 2, 3]} key={item.id}>{item}</li>
        )
        item
      `,
      errors: [
        { message: /'item' is not defined/ }
      ]
    },
    {
      code: `
        const foo = (
          <div>
            <li x-for={item in [1, 2, 3]} key={item.id}>{item}</li>
            {item}
          </div>
        )
      `,
      errors: [
        { message: /'item' is not defined/ }
      ]
    },
  ]
});
