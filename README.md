# eslint-plugin-react-directives

[![Build Status](https://travis-ci.com/peakchen90/eslint-plugin-react-directives.svg?branch=master)](https://travis-ci.com/peakchen90/eslint-plugin-react-directives)
![node](https://img.shields.io/node/v/eslint-plugin-react-directives.svg)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/eslint-plugin-react-directives/peer/eslint.svg)
[![npm](https://img.shields.io/npm/v/eslint-plugin-react-directives.svg)](https://www.npmjs.com/package/eslint-plugin-react-directives)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/peakchen90/eslint-plugin-react-directives/blob/master/LICENSE)


some rules for [babel-plugin-react-directives](https://github.com/peakchen90/babel-plugin-react-directives).

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

There are two ways to configure it via `.eslintrc`:

```json
{
  "plugins": [
    "react-directives"
  ],
  "rules": {
    "no-undef": "off",
    "react-directives/no-undef": "error"
  }
}
```

or use the recommended rules:

```json
{
  "extends": [
    "plugin:react-directives/recommended"
  ],
  "rules": {
    "no-undef": "off"
  }
}
```

## Settings

If you have configured some options in [`babel-plugin-react-directives`](https://github.com/peakchen90/babel-plugin-react-directives#plugin-options), add `settings` section to `.eslintrc` file.

```json
{
  "settings": {
    "react-directives": {
      "prefix": "x"
    }
  }
}
```

## List of supported rules

* [react-directives/no-undef](./docs/rules/no-undef.md) Disallow Undeclared Variables.


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

* [react-directives/no-undef](./docs/rules/no-undef.md)
