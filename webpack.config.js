const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
__webpack_base_uri__ = 'http://localhost:8080';

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './#src/index.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[fullhash].js',
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HTMLWebpackPlugin({template: './#src/index.html'}),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ["@babel/preset-react"]
                    }
                }
            },
        ]
    }
}