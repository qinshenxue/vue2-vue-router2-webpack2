module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/static/',
        filename: 'build.js'
    },
module: {
    rules: [
        {
            test: /\.vue$/,
            use: "vue-loader"
        },
{
    test: /\.css$/,
    use: ["vue-style-loader", "css-loader"]
}
    ]
}
}