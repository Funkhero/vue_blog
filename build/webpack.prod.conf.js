const webpack = require('webpack');
const merge = require('webpack-merge');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = () => {
    const config = {
        plugins: [
            new ProgressBarWebpackPlugin(),
            new webpack.DefinePlugin({
                'progress.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new CompressionWebpackPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp(
                    '\\.(' + config.prod.productionGzipExtensions.join('|') + ')$'
                ),
                /* deleteOriginalAssets: true, */
                threshold: 0,
                minRatio: 0.8
            })
        ]
    };
};