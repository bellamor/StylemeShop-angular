var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var path = require('path');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path:  path.join(process.cwd(), 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(), // Плагин для остановки сборки, если есть ошибки в проекте
    new webpack.optimize.UglifyJsPlugin({ // Минификация файлов 
      // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('[name].[hash].css'), // Плагин, который экстрагирует встроенные css в качестве внешних файлов, добавляя хэш кеша к имени файла
    new webpack.DefinePlugin({ // Плагин для определения переменной среды, на которое мы можем ссылаться в приложении
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({// Плагин для переопределения опций некоторых загрузчиков.
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    })
  ]
});