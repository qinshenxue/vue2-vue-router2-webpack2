var webpack = require("webpack");
var config = require('./webpack.prod.config');
// 构建之前先清空dist目录
//clearFolder(path.resolve(__dirname, '../static/'));
// 开始打包
webpack(config, function(err, stats) {
    process.stdout.write(stats.toString());
    // 构建完成后ftp上传到xx目录
});