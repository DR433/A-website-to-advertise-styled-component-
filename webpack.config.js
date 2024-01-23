const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "eval",
    entry: "./app.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ejs$/,
                loader: 'ejs-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.{svg|jpg|png|gif}/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: /\.ejs$/,
        }),

        new MiniCssExtractPlugin({
            filename: 'main.css',
            chunkFilename: '[id].css',
        })
    ]
}