const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseWebpackConfig = require('./webpack.desktop.base');
const extractLESSPlugin = new ExtractTextPlugin('style.min.css');
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
const cleanPlugin = new CleanWebpackPlugin(['docs/desktop'],{
    root:path.join(__dirname,'../../'),
    verbose:true
});


module.exports =  merge(baseWebpackConfig, {
    output: {
        filename: '[name].min.js'
    },
    module: {
        rules: [{
            test: /\.(less|css)$/,
            loader: extractLESSPlugin.extract({
                use: ['css-loader', 'postcss-loader','less-loader'],
                fallback: 'style-loader'
            })
        },]
    },
    plugins: [
        definePlugin,
        extractLESSPlugin,
        uglifyJSPlugin,
        cleanPlugin
    ]
});