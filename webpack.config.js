const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = (env = {}) => {
  const config = {
    mode: env.production ? "production" : "development",
    entry: ['./src/scripts.js', './src/styles/base.styl'],
    // devtool: 'source-map',
    devtool: 'cheap-module-source-map',
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
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: [
            "style-loader",
            "css-loader",
            "stylus-loader"
          ]
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: 'src/background.js',
          },
          {
            from: 'src/manifest.json',
          },
          {
            from: 'src/popup.html',
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

