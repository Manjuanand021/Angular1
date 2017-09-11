const path = require('path'),
    optimize = require('webpack').optimize,
    htmlWebpackPlugin = require('html-webpack-plugin'),
    visualizer = require('webpack-visualizer-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, './app/app.js'),
    entry: {
        app: '../main.js',
        vendor: ['angular', 'jquery']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        //hash helps with cache busting
        //Everytime if there are file changes, webpack changes hash - 16 digit postfix to bundled file
        // fileName: [name].[hash].bundle.js
        filename: '[name].bundle.js'
    },
    //Loaders are more like preprocessors - transforms modules before webpack creates bundle
    modules: {
        loaders: [{
            test: /\.js$/,
            use: 'babel-loader'
        }]
    },
    //Plugins are post-processors, run on created bundle
    plugins: [
        //Common vendor code chunk is moved to vendor.js file
        //Without this plugin we will have vendor code both in bundle.js and vendor.js
        new optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}