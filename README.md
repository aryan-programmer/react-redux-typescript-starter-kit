# react-redux-typescript-starter-kit

This is a simple starter kit for React with Redux in TypeScript using Babel and Webpack.

This project supports Sass, SCSS and, by extension, CSS bundling.

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



After building 4 files will be generated:

1,2. A bundled `main.js` file and its source map `main.js.map`

3,4. A bundled `main.css` file and its source map `main.css.map`

A production build will have the `main.js` minified by Webpack’s default JS minifier terser-webpack-plugin and `main.css` minified by csso using csso-loader.

## Running

To run the React app:

```
yarn run start
```

## Checking types using Typescript `tsc`

The Typescript preset for Babel when compiling strips away all types from Typescript files and does no type checking at all. To get the benefit of the type safety of Typescript you first have to install the Typescript compiler (go to https://www.typescriptlang.org/#download-links for instructions on how to install Typescript).

After installing Typescript, all you have to do to check types in this project is,

```
yarn run check-types
```

Note: By default TS will have `strictNullChecks` and `noImplicitAny` options configured to `true`.

<br><br>

That’s it. Have fun with React and Redux.