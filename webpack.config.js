const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: ["./entry.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: path.posix.join('', 'img/[name]-[hash:7].[ext]')
                }
            },
            {

            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("打爆文件头部的注释，这里定义的")
    ]

};