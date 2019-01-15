# ttgint/eslint-config

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/ttgint/eslint-config.svg?branch=master)](https://travis-ci.org/ttgint/eslint-config)  [![Greenkeeper badge](https://badges.greenkeeper.io/ttgint/eslint-config.svg)](https://greenkeeper.io/)

ESLint config for Node.js projects

## Installation

`npm i eslint prettier @ttgint/eslint-config --save-dev`

## Setup

Add the config to either the `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@ttgint"
  }
}
```

or to the `.eslintrc`

```json
{
  "extends": "@ttgint"
}
```

## Acknowledgments

- Based on [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
- See this great [article](https://medium.com/@natterstefan/how-to-create-your-own-shared-eslint-prettier-and-stylelint-configuration-3930dd764de3)
