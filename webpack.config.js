const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = (env = {}) => {
  const config = {
    mode: env.production ? "production" : "development",
    entry: './src/scripts.js',
    // devtool: 'source-map',
    target: 'web',
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
      minimize: false
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: 'src/background.js',
          },
          {
            from: './manifest.json',
          },
          {
            from: './popup.html',
          },
          {
            from: 'src/styles/**/*.css',
            to() {
              return "styles/[name][ext]";
            },
          },
          {
            from: 'src/images/**/*',
            to() {
              return "images/[name][ext]";
            },
          }
        ],
      }),
    ]
  };
  return config;
}

