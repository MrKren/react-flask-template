const path = require('path')

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
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}