# ttgint/eslint-config

ESLint config for Node.js projects

## Installation

`npm i eslint prettier @ttgint/eslint-config --save-dev`

## Setup

Add the config to either the `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@ttgint/eslint-config" // you can also use only @ttgint
  }
}
```

or to the `.eslintrc`

```json
{
  "extends": "@ttgint/eslint-config"
}
```

## Acknowledgments

- Based on [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
- See this great [article](https://medium.com/@natterstefan/how-to-create-your-own-shared-eslint-prettier-and-stylelint-configuration-3930dd764de3)