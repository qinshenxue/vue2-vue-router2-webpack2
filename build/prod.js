var webpack = require("webpack");
var webpackProdConfig = require('./webpack.prod.config');
webpack(webpackProdConfig, function(err, stats) {
    process.stdout.write(stats.toString());
});