module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['ie >= 9']
        }),
        require('cssnano')
    ]
}