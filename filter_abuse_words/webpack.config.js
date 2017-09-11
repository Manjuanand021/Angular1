var path = require('path'),
    optimize = require('webpack').optimize,
    htmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: '../main.js',
        plain_javascript: '../plain_javascript.js',
        vendor: ['angular']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }],
                fallback: 'style-loader'
            })
        }]
    },
    plugins: [
        new optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new ExtractTextPlugin({
            filename: "./style.bundle.css",
            disable: false,
            allChunks: true
        }),
        new htmlWebpackPlugin({
            template: '../index.html',
            //Cache busting
            hash: true,
            excludeChunks: ['plain_javascript']
        }),
        new htmlWebpackPlugin({
            template: '../index_plain_javascript.html',
            filename: 'index_plain_javascript.html',
            hash: true
            // excludeChunks: ['app', 'vendor']
        })
        // new HtmlWebpackIncludeAssetsPlugin({
        //     files: ['../index_plain_javascript.html'],
        //     assets: ['./build/style.bundle.css'],
        //     append: true,
        //     hash: true
        // })
    ]
}