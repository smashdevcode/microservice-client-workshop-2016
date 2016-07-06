const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    context: __dirname,
    entry: [
        'font-awesome-loader',
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../wwwroot/src/js'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.less', '.css'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, '../node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file'
            },
            {
                test: /\.js$|.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
};
