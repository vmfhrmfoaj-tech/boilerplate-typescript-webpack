const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
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
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}