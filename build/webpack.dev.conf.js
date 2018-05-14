const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
        proxy: {
            '**': {
                target: 'http://localhost:3030',
                secure: false
            }
        }
    }
};


