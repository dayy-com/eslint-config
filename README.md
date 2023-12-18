# dayy® eslint config

<a href="https://www.npmjs.com/package/@dayy-com/eslint-config"><img src="https://img.shields.io/npm/dt/@dayy-com/eslint-config.svg" alt="Total Downloads"></a>
<a href="https://github.com/dayy-com/eslint-config/releases"><img src="https://img.shields.io/npm/v/@dayy-com/eslint-config.svg" alt="Latest Release"></a>
<a href="https://github.com/dayy-com/eslint-config/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@dayy-com/eslint-config.svg" alt="License"></a>

> [!CAUTION]
> This package is currently in beta. Use at your own risk. Breaking changes may occur.

1. [Installation](#installation)
2. [Modules](#modules)
3. [Prettier w/ Tailwind CSS](#prettier-w-tailwind-css)
4. [Troubleshooting](#troubleshooting)
5. [Bonus: VSCode integration](#bonus-vscode-integration--formatting-on-save-optional-but-recommended)
6. [Bonus: Lint staged](#bonus-lint-staged)
7. [To do](#to-do)

## Installation

Install package:

```bash
$ npm i -D @dayy-com/eslint-config
```

Then, create a `.eslintrc.js` file or modify the existing one in the root of your project’s directory with the following contents (please remove any other configuration files e.g. `.eslintrc.json` if you have any):

```js
module.exports = {
  extends: ['@dayy-com'],
};
```

Finally, you can add two scripts to your package.json to lint and/or fix your code:

```json
{
  ...
  "scripts": {
    "lint": "eslint . --ignore-path .gitignore",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

## Modules

<details>
  <summary><strong>Next.js</strong></summary>

  ### Usage with Next.js

  Change your `.eslintrc.js` file in the root of your project’s directory with the following contents:

  ```js
  module.exports = {
    extends: ['@dayy-com/eslint-config/next'],
  };
  ```
</details>

<details>
  <summary><strong>Sanity.io</strong></summary>

  ### Usage with Sanity.io

  Change your `.eslintrc.js` file in the root of your project’s directory with the following contents:

  ```js
  module.exports = {
    extends: ['@dayy-com/eslint-config/sanity'],
  };
  ```
</details>

<details>
  <summary><strong>Non React projects</strong></summary>

  ### Usage with non React projects

  Change your `.eslintrc.js` file in the root of your project’s directory with the following contents:

  ```js
  module.exports = {
    extends: ['@dayy-com/eslint-config/base'],
  };
  ```
</details>

## Prettier w/ Tailwind CSS

If you use Tailwind CSS, you can use the following Prettier configuration to make sure that your Tailwind CSS classes are formatted correctly.

First install `prettier` and `prettier-plugin-tailwindcss`:

```bash
$ npm i -D prettier prettier-plugin-tailwindcss
```

Then, create a `.prettierrc.js` file in the root of your project’s directory with the following contents:

```js
const prettierConfig = require('@dayy-com/eslint-config/lib/prettier');

module.exports = {
  ...prettierConfig,

  plugins: ['prettier-plugin-tailwindcss'],
};
```

## Troubleshooting

<details>
  <summary><strong>ESLint was configured to run on `<tsconfigRootDir>/.eslintrc.js` using `parserOptions.project`</strong></summary>

  Modify your `tsconfig.json` file in the root of your project’s directory with the following contents:

  ```json
  {
    ...
    "include": [
      ...,
      "./.eslintrc.js"
    ],
  }
  ```
</details>

## Bonus: VSCode integration / formatting on save (optional but recommended)

Install the ESLint extension for VSCode (if you haven’t already):

```bash
$ code --install-extension dbaeumer.vscode-eslint
```

Then, create a `.vscode/extensions.json` file in the root of your project’s directory with the following contents:

```json
{
  "recommendations": ["dbaeumer.vscode-eslint"]
}
```

Next up, create a `.vscode/settings.json` file in the root of your project’s directory with the following contents:

```json
{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true
}
```

## To do

- [ ] Split modules into separate packages for better peer dependency management
- [ ] Lint staged
- [ ] GitHub Release Action
