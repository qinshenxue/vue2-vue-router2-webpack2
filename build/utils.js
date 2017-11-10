var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var isProd = process.env.NODE_ENV === "production";
// 根据项目需求添加CSS预处理语言并安装相应的loader，以stylus-loader为例
var cssLang = [{
    name: 'css',
    reg: /\.css$/,
    loader: 'css-loader'
}, {
    name: 'stylus',
    reg: /\.styl$/,
    loader: "stylus-loader"
}, {
    name: 'less',
    reg: /\.less$/,
    loader: "less-loader"
}, {
    name: 'sass',
    reg: /\.scss$/,
    loader: "sass-loader"
}];

function genLoaders(lang) {
    var loaders = ['css-loader', 'postcss-loader'];
    if (lang.name !== 'css') {
        loaders.push(lang.loader);
    }
    if (isProd) {
        // 生产环境需要提取CSS
        loaders = ExtractTextPlugin.extract({
            use: loaders
        });
    } else {
        // 开发环境需要vue-style-loader将CSS提取到页面头部
        loaders.unshift('vue-style-loader');
    }
    return loaders;
}
// 各种CSS的loader
exports.styleLoaders = function () {
    var output = [];
    cssLang.forEach(lang => {
        output.push({
            test: lang.reg,
            use: genLoaders(lang)
        })
    })
    return output;
};
// vue-loader的options
exports.vueLoaderOptions = function () {
    var options = {
        loaders: {}
    };
    cssLang.forEach(lang => {
        options.loaders[lang.name] = genLoaders(lang);
    });
    return options;
}

/**
 * 多入口生成多页面
 * @returns {Array}
 */
exports.genHtmlPlugins = function () {

    var baseWebpackConfig = require('./webpack.base.config');
    var path = require('path')
    var plugins = [];
    Object.keys(baseWebpackConfig.entry).forEach(function (name) {
        plugins.push(
            new HtmlWebpackPlugin({
                filename: isProd ? path.resolve(__dirname, `../dist/index.html`) : 'index.html',
                template: 'index.tpl.html',
                inject: true
            }))
    })
    return plugins
}
