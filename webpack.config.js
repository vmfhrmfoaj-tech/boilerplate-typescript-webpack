const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    //mode: 'production',

    entry: {
        index: "./src/index.js"
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[id].[chunkhash].js"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'css-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/transform-runtime'
                        ]
                    }
                }
            }
        ]
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map'
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}