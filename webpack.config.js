
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['./src/index.js'],

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
