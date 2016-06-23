const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    context: __dirname,
    entry: {
        'index': './index.js',
        'list': './list.js'
    },
    output: {
        filename: '[name].entry.js',
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
