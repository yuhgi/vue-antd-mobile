const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESSPlugin = new ExtractTextPlugin('/index.css');
const definePlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production')
    }
});
const uglifyJSPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});
module.exports = {
    entry: {
        'vue-antd-mobile': path.join(__dirname,'../../src/index.js')
    },
    output: {
        filename:'index.js',
        path: path.join(__dirname, '../../lib'),
        publicPath: './',
        library: 'vue-antd-mobile',
        libraryTarget: 'umd'
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, { 
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
            loader: 'url-loader?limit=8192'
        },{
            test: /\.(less|css)$/, 
            loader: extractLESSPlugin.extract({
                use: ['css-loader', 'postcss-loader','less-loader'],
                fallback: 'style-loader'
            })
        }]
    },
    plugins: [
        definePlugin,
        uglifyJSPlugin,
        extractLESSPlugin
    ]
};