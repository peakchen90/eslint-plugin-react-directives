# Disallow Unused Variables. (react-directives/no-unused-vars)

This rule is almost the same as [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars), and optimize some cases for [`babel-plugin-react-directives`](https://github.com/peakchen90/babel-plugin-react-directives)

## Rule Details

Ignore some unused variables when using the [`x-model`](https://github.com/peakchen90/babel-plugin-react-directives#x-model)

## Examples of **incorrect** code for this rule:

```jsx harmony
function Foo() {
  const [data, setData] = useState(0)
  return <input x-model={data}/>
}
```

```jsx harmony
function Foo() {
  const [data, setData] = React.useState(0)
  return <input x-model={data}/>
}
```

## Examples of **correct** code for this rule:

```jsx harmony
function Foo() {
  const [data, setData] = useState(0)
  return <input foo={data}/>
}
```

```jsx harmony
function Foo() {
  const [data, setData] = Foo.useState(0)
  return <input x-model={data}/>
}
```

```jsx harmony
function Foo() {
  const [data, setData] = useState(0)
}
```
