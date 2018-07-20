const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV == 'test') {
  require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV == 'development') {
  require('dotenv').config({ path: '.env.development' })
}

module.exports = (env, argv) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: [
      'babel-polyfill',
      './src/app.js'
    ],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
        })
      }]
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.COGNITO_REGION': JSON.stringify(process.env.COGNITO_REGION),
        'process.env.COGNITO_USER_POOL_ID': JSON.stringify(process.env.COGNITO_USER_POOL_ID),
        'process.env.COGNITO_WEB_CLIENT_ID': JSON.stringify(process.env.COGNITO_WEB_CLIENT_ID)
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};