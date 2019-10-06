# eslint-plugin-react-directives

![npm (tag)](https://img.shields.io/npm/v/eslint-plugin-react-directives/latest.svg)
[![Travis (.org) branch](https://img.shields.io/travis/peakchen90/eslint-plugin-react-directives/master.svg)](https://travis-ci.org/peakchen90/eslint-plugin-react-directives)
![node](https://img.shields.io/node/v/eslint-plugin-react-directives.svg)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/eslint-plugin-react-directives/peer/eslint.svg)
[![npm](https://img.shields.io/npm/dt/eslint-plugin-react-directives.svg)](https://www.npmjs.com/package/eslint-plugin-react-directives)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/peakchen90/eslint-plugin-react-directives/blob/master/LICENSE)


some rules for babel-plugin-react-directives.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-react-directives`:

```
$ npm install eslint-plugin-react-directives --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-react-directives` globally.

## Usage

Add `react-directives` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "react-directives"
  ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "react-directives/no-unused-vars": "error",
    "react-directives/no-undef": "error"
  }
}
```

## List of supported rules

## Shareable configurations

### Recommended
This plugin exports a recommended configuration.

To enable this configuration use the extends property in your .eslintrc config file:

```json
{
  "extends": [
    "plugin:react-directives/recommended"
  ]
}
```

The rules enabled in this configuration are:

