var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = ["webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server"].concat(baseWebpackConfig.entry[name])
})
module.exports = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders()
    },
    // cheap-module-eval-source-map is faster for development
    plugins: [
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: 'index.html',
        //     inject: true
        // }),
    ]
})