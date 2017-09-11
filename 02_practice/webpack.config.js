const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        main: './index.js',
        vendor: ['angular']
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: ['babel-loader']
            // },
            {
                test: /\.(html|htm)$/,
                use: ['raw-loader']
                // loader: 'file-loader',
                // options: {
                //     name: '[name].[ext]',
                //     //Copy images to outputPath directory
                //     outputPath: '/templates/',
                //     context: ''
                // }
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            welComeMsg: 'Welcome to angular services tutorials.',
            template: '../index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],
    devServer: {
        contentBase: './dist'
    }
}