const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        babelpolyfill: '@babel/polyfill',
        index: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [new htmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
    }),
],
module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  
};