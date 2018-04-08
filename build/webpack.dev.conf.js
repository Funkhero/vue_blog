const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = () => {
    const config = {
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            historyApiFallback: true,
            stats: 'errors-only',
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000,
                ignored: /node_modules/
            },
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.WatchIgnorePlugin([
                path.join(__dirname, 'node_modules')
            ]),
            new FriendlyErrorsWebpackPlugin({
                compilationSuccessinfo: {
                    messages: ['App is running on localhost']
                },
                omErrors: (sev, errors) => {
                    console.log('errors = ',errors);
                },
                clearConsole: true
            }),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin({
                'progress.env': {
                    NODE_ENV: JSON.stringify('development')
                }
            }),
        ]
    };
};


