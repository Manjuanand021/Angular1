var path = require('path'),
    optimize = require('webpack').optimize,
    htmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: '../main.js',
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
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        //Copy images to outputPath directory
                        outputPath: './',
                        //Keep the correct reference in index.html
                        // publicPath: 'assets/images/'
                    }
                }]
            }
        ]
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
            hash: true
        })
    ]
}