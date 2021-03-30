const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
},
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.s?css/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    // match the output path
    // enable HMR on the devServer
    hot: true,
    // match the output 'publicPath'
    // fallback to root for other urls
    // historyApiFallback: true,

    publicPath: '/build',
    proxy: {
      '/': 'http://localhost:3000',
      // '/client': 'http://localhost:3000',
      // '/photobooth': 'http://localhost:3000',
    },
  },

}