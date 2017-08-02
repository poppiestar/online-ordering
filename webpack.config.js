/* eslint-env node */

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './src/client/index.js'],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: 'http://localhost:8080/'
    },

    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },

    plugins: [new webpack.NamedModulesPlugin()],

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
