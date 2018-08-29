const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const baseWebpackConfig = require("./webpack.base.config")
module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["vue-style-loader", "css-loader", 'postcss-loader']
        }, {
            test: /\.less$/,
            use: ["vue-style-loader", "css-loader", 'postcss-loader', "less-loader"]
        }, {
            test: /\.s[ac]ss$/,
            use: ["vue-style-loader", "css-loader", 'postcss-loader', "sass-loader"]
        }, {
            test: /\.styl$/,
            use: ["vue-style-loader", "css-loader", 'postcss-loader', "stylus-loader"]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.tpl.html"
        })
    ]
})