const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        chunkFilename: "app.chunk.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules'
            },
            {
                test: /\.sc|ass$/,
                use : [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.js',
            '.tsx'
        ]
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin(
            {
                patterns: [
                    {
                        from: 'src/index.html',
                        to: 'index.html',
                        flatten: true
                    }
                ]
            }
        ),
        new MiniCssExtractPlugin({
            filename: './assets/css/[name].css',
            chunkFilename: './assets/css/[id].css'
        }),        
    ]
}