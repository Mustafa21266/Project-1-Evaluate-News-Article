const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill','./src/client/index.js'],
    mode: 'development',
    devtool: 'source-map',
    stats: 'minimal',
    output: {
        libraryTarget: 'var',
        library: 'Client'

    },
    module: {
        rules: [
            // TODO 1: Add babel Loader that match js files as development
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"

            },
            // TODO 2: Add Loaders for
            //    1. converting sass => css
            //    2. Turns css into commonjs
            //    3. Inject styles into DOM
            /* HINT: structure
        {
          test: REGEX_TO_MATCH_FILES ex. /\.js$/,
          exclude: /node_modules/,
          loader: '',
        }
       */
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]

            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new WorkboxPlugin.GenerateSW()
        // TODO: configure workbox-webpack-plugin
    ]
}
