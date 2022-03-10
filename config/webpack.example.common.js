const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolveApp } = require("./paths");
module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        include: [resolveApp('src'), resolveApp('example')],
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2015',
            },
          }
        ]
      },
      {
        test: /\.(le|c)ss$/,
        include: [resolveApp('src'), resolveApp('example')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                  ],
                ],
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: [resolveApp('src'), resolveApp('example')],
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: [resolveApp('cover-image')],
        type: 'asset/resource',
        generator: {
          filename: 'cover-image/[name][ext][query]'
        }
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        include: [resolveApp('src'), resolveApp('example')],
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // 进度条
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
    }),
    new HtmlWebpackPlugin({
      template: resolveApp('example/public/index.html'),
      title: '@js-cli/react-button'
    }),
  ],
};