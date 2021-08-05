const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    //mode: 'production',

    entry: {
        index: [
            "es6-promise/auto",  // for IE11 promise
            "./src/index.js"
        ]
    },

    target: ['web', 'es3'],

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: '/dist/',

        // environment: {
        //     // The environment supports arrow functions ('() => { ... }').
        //     arrowFunction: false,
        //     // The environment supports BigInt as literal (123n).
        //     bigIntLiteral: false,
        //     // The environment supports const and let for variable declarations.
        //     const: false,
        //     // The environment supports destructuring ('{ a, b } = obj').
        //     destructuring: false,
        //     // The environment supports an async import() function to import EcmaScript modules.
        //     dynamicImport: false,
        //     // The environment supports 'for of' iteration ('for (const x of array) { ... }').
        //     forOf: false,
        //     // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
        //     module: false,
        // }
    },

    resolve: {
        extensions: ['.ts', '.css', '.js']
    },

    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },

    optimization: { // 코드 스플리팅 해줌.
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
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