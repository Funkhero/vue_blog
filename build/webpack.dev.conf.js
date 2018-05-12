const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 90,
        proxy: {
            '**': {
                target: 'http://localhost:4001',
                secure: false
            }
        }
    }
};


