# React-Starter
My own React-Starter with Webpack, Babel.  
Feel free to use it.  

**What is Webpack** ([reference](https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9), [official site](https://webpack.js.org/concepts/))
- Webpack is a static module bundler for modern JavaScript applications. If you have written react code you would know that it requires writing a lot of javascript files and importing these files to other files. We do this using some sort of module system, two most popular module systems are CommonJS’s require() and ESM’s import. Unfortunately, there is no browser support for CommonJs and support for ESM is not universal yet. So we need a tool that can take all the files that we have written and combine/bundle them into a single js file while keeping track of their dependencies. The tool that does this are called bundlers and Webpack is one of the many javascript bundlers.

**What is Babel** ([official site](https://babeljs.io/docs/))
- Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments


## Available Scripts

### `npm start` or `npm run start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Builds the app for production to the `public/build` folder.
Output file is `app.bundle.js`. File name changes when changing the value of the parameter `appName` in the `webpack.config.js` file.


