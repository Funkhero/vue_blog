const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        historyApiFallback: true,
        proxy: {
            '**': {
                target: 'http://localhost:4000',
                secure: false
            }
        }
    }
};


