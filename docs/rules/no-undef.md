# Disallow Undeclared Variables. (react-directives/no-undef)

This rule is almost the same as [`no-undef`](https://eslint.org/docs/rules/no-undef), and optimize some cases for [`babel-plugin-react-directives`](https://github.com/peakchen90/babel-plugin-react-directives)

## Rule Details

Undefined variables are ignored under directive [`x-for`](https://github.com/peakchen90/babel-plugin-react-directives#x-for)

## Examples of **correct** code for this rule:

```jsx harmony
function Foo() {
  const list = [1, 2, 3];
  return (
    <ul>
      <li x-for={(item, index) in list} key={item}>
        <span>{item}</span>
      </li>
    </ul>
  )
}
```

## Examples of **incorrect** code for this rule:

```jsx harmony
function Foo() {
  const list = [1, 2, 3];
  return (
    <ul>
      <li x-for={(item, index) in list}></li>
      {item}
    </ul>
  )
}
```
