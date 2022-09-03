# Jest

 - [Documentation](https://jestjs.io/docs/getting-started)

## Installation

 - Project (dev)

        npm i -D jest ts-jest @types/jest

## Setup

 - jest

        npx jest --init

 - ts-jest

        npx ts-jest config:init

## Running

    npx jest

 - how to create tests?

        <file-name>.test.ts (integration)

        <file-name>.spec.ts (unit)

## Config package.json

```js
{
  "scripts": {
    "test": "jest",
    "test:silent": "npx jest --watchAll --silent --noStackTrace"
  }
}
```

 - normal

        npm run test

 - watch mode

        npm run test:silent
