const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const IconfontPlugin = require('webpack-iconfont-plugin');


module.exports = {
    entry: {
        main: path.join(__dirname, '../src/main.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].js'
    },
    stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
    },
    module: {
      rules: [
          {
              test: /\.vue$/,
              loader: 'vue-loader'
          },
          {
              test: /\.js$/,
              loader: 'babel-loader',
              include: [path.join(__dirname, '..', 'src')]
          },
          {
              test: /\.(png|jpe?g|gif|svg)$/,
              loader: 'url-loader',
              options: {
                  limit: 10000,
                  name: '[name].[ext]',
                  publicPath: '../',
                  outputPath: 'img/'
              }
          },
          {
              test: /\.(ogg|mp3|wav|mpe?g)$/,
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  publicPath: '../',
                  outputPath: 'music/'
              }
          },
          {
              test: /\.scss$/,
              use: ExtractTextWebpackPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                      {
                          loader: "css-loader",
                          options: {
                              minimize: true,
                              // url: false
                          }
                      },
                      {
                          loader: "autoprefixer-loader",
                          options: {
                              browsers: ["last 15 version", "Firefox 15"]
                          }
                      },
                      {
                          loader: "sass-loader",
                          options: {}
                      }
                  ]
              })
          },
          {
              test: /\.(woff2?|eot|ttf|otf)$/,
              loader: 'url-loader',
              options: {
                  limit: 10000,
                  name: '[name].[ext]',
                  publicPath: '../',
                  outputPath: 'fonts/'
              }
          },
      ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('css/style.css'),
        new IconfontPlugin({
            normalize: true,
            fontName: 'ico',
            svgs: 'src/assets/svg/**/*.svg',
            template: 'src/assets/templates/_icons.scss',
            styles: 'src/assets/scss/components/_iconfont.scss',
            fonts: 'src/assets/fonts',
            cssFontPath: '../fonts/'
        }),
        new HtmlWebpackPlugin({
            title: 'Vue-webpack temp',
            filename: 'index.html',
            inject: true,
            template: 'index.html',
            hash: true,
            minify: {
                removeComments: true
            }
        }),
        new webpack.ProvidePlugin({
            Vue: 'vue/dist/vue.js',
            Vuex: 'vuex',
            VueRouter: 'vue-router',
        })
    ]
};