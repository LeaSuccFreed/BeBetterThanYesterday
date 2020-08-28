const path = require('path');

module.exports={
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'main.js'
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            {
                test: /\.(css|scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            },
    
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    }
}