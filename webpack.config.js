const path = require('path');
var config = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [{
                test: /\.jsx?$/,   
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.html$/i,
                use:['html-loader']
            },
            {
                test:/\.s[ac]ss/,
                use:['style-loader','css-loader','sass-loader']
            }
        ],

    }
}
module.exports = config;