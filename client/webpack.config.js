var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: './app/app.module.js',
    output: {
        path: path.resolve(__dirname, "./bin"),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            { test: /\.html$/, loader: "html-loader" }
            // {
            //     test: /\.css/,
            //     use: [
            //         {
            //             loader: "style-loader"
            //         },
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 importLoaders: 1,
            //             }
            //         }
            //     ],
            //     include: __dirname + '/app'
            //   }
        ]
    },
    devtool: "#inline-source-map"
}