const HtmlwebPackPlugin = require('html-webpack-plugin');
const CleanwebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./build/static'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ['node_modules'],
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.s(a|c)ss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }],
            }
        ]
    },
    plugins: [
        new HtmlwebPackPlugin({
            template: 'public/index.html'
        }),
        new CleanwebpackPlugin(['build/static'])
    ],
}