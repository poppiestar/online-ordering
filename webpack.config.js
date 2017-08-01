/* eslint-env node */

const path = require('path');

module.exports = {
    entry: ['./src/client/index.js'],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
