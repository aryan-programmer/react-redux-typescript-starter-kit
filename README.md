# react-redux-typescript-starter-kit

This is a simple starter kit for React with Redux in TypeScript using Babel and Webpack.

To get started with React with Redux in TypeScript, run

```
yarn install
```

## Building

For a dev build run:

```
yarn run build:dev
```

For a production build run:

```
yarn run 
```

## Running

To run the react app:

```
yarn run start
```

## Checking types using Typescript `tsc`

The Typescript preset for Babel when compiling strips away all types from Typescript files and does no type checking at all. To get the benefit of the type safety of Typescript you first have to install the Typescript compiler (go to https://www.typescriptlang.org/#download-links for instructions on how to install Typescript).

After installing Typescript, all you have to do to check types in this project is,

```
yarn run check-types
```

 

That’s it. Have fun with React and Redux.