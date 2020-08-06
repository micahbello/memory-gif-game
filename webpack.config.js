const path = require('path');

module.exports = {
  entry: './js/entry.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'js'),
    // library: 'myfunctions', //add this line to enable re-use
  },
  module: {
  rules: [
    {
      test: [/\.js$/], // Specifies file types to transpile
      exclude: /(node_modules)/, // Leaves dependencies alone
      loader: 'babel-loader', // Sets Babel as the transpiler
      query: {
        presets: ['@babel/env'] // Tells Babel what syntaxes to translate
      }
    }
  ]
},
};
