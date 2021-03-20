const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
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
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new WorkboxPlugin.GenerateSW()
        // TODO: configure workbox-webpack-plugin
    ],
    optimization: {
        // TODO: Add Optimization for JS and CSS
    }
}
