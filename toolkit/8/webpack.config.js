const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const configName = env.config || 'local';

  const allowedConfigs = ['local', 'dev', 'prod'];

  if (!allowedConfigs.includes(configName)) {
    throw new Error(
      `Unknown config "${configName}". Only local, dev or prod.`
    );
  }

  const envFilePath = path.resolve(__dirname, `.env.${configName}`);
  const envFile = dotenv.config({ path: envFilePath });

  if (envFile.error) {
    throw envFile.error;
  }

  const envVariables = envFile.parsed;

  const defineEnvVariables = Object.keys(envVariables).reduce((result, key) => {
    result[`process.env.${key}`] = JSON.stringify(envVariables[key]);
    return result;
  }, {});

  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),

    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist', configName),
      clean: true
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: envVariables.APP_TITLE
      }),

      new webpack.DefinePlugin({
        ...defineEnvVariables,
        'process.env.BUILD_CONFIG': JSON.stringify(configName)
      })
    ],

    devServer: {
      static: path.resolve(__dirname, 'dist', configName),
      open: true,
      port: 8080
    }
  };
};