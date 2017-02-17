const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        // 关于模块配置

        rules: [
            {
                test: /\.vue$/,

                use: [
                    "vue-loader"
                ]
            }
        ]
    }
}