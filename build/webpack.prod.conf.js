const webpack = require('webpack');
const merge = require('webpack-merge');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
    plugins: [
        new ProgressBarWebpackPlugin(),
        new webpack.DefinePlugin({
            'progress.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                sequences: true,
                booleans: true,
                loops: true,
                unused: true,
                warnings: false,
                drop_console: true,
                unsafe: true
            },
            sourceMap: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};