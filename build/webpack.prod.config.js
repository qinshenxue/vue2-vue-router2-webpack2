const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const baseWebpackConfig = require("./webpack.base.config")
const path = require('path')
module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist')
        publicPath: "/static/"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader']
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader', "less-loader"]
        }, {
            test: /\.s[ac]ss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader', "sass-loader"]
        }, {
            test: /\.styl$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader', "stylus-loader"]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.tpl.html"
        })
    ]
})