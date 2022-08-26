# Basics

 - [Documentation](https://www.typescriptlang.org/docs/)
 - [Handbook](https://www.typescriptlang.org/assets/typescript-handbook.pdf)

## Installation

 - Global

        npm i -g typescript

 - Project (dev)

        mkdir <project-name> && cd <project-name>
        npm init -y
        npm i -d typescript

## tsconfig

 - [Compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

 - default config

        npx tsc --init

    ```json
    {
      "compilerOptions": {
        "target": "es2016",
        "lib": ["ESNext", "DOM"],
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "module": "commonjs",
        "rootDir": "./src",
        "allowJs": true,
        "sourceMap": true,
        "outDir": "./dist",
        "removeComments": true,
        "noEmitOnError": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true
      },
      "include": [
        "./src"
      ]
    }
    ```

## tsc

 - run

        npx tsc

## ts-node

 - installation (dev)

        npm i -d ts-node

 - run

        npx ts-node src/index.ts

## ESLint

 - installation

        npm i -d eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser

 - config

        touch .eslintrc.js

    ```js
    module.exports = {
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
      },
      plugins: [ '@typescript-eslint' ],
      rules: {},
    };
    ```

## prettier

 - installation

        npm i -d prettier eslint-config-prettier eslint-plugin-prettier

 - config

        touch .prettierrc.js

    ```js
    module.exports = {
      semi: true,
      trailingComma: 'all',
      singleQuote: true,
      printWidth: 80,
      tabWidth: 2,
    };
    ```

## EditorConfig

    root = true

    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
