var webpack = require("webpack");
var merge = require("webpack-merge");
var baseWebpackConfig = require("./webpack.base.config");
var utils = require("./utils");
var config = require("./config");
var FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

module.exports = merge(baseWebpackConfig, {
    devServer: {
        hot: true, // 热更新
        quiet: true,
        port: config.dev.port, // 端口
        open: true, // 自动打开浏览器
        publicPath: config.dev.outputPublicPath // 和下面的 output.publicPath
    },
    output: {
        path: config.dev.outputPath,
        publicPath: config.dev.outputPublicPath
    },
    module: {
        rules: utils.styleLoaders()
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        ...utils.genHtmlPlugins(),
        new FriendlyErrorsPlugin()
    ]
});
