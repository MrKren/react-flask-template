const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: 'babel-loader',
                exclude: /node-modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
};