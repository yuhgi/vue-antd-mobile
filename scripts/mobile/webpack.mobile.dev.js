const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseWebpackConfig = require('./webpack.mobile.base');
const extractLESSPlugin = new ExtractTextPlugin('style.css');
const definePlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('development')
    }
});
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

const copyPlugin = new CopyWebpackPlugin([{
    from: path.join(__dirname, '../../sites/mobile/style/logo.png'),
    to: path.join(__dirname, '../../docs/__mobile__')
}]);

module.exports = merge(baseWebpackConfig, {
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '../../docs/__mobile__'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.(less|css)$/,
            loader: extractLESSPlugin.extract({
                use: [
                    'css-loader?sourceMap', 
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true,
                            plugins:[
                                require('autoprefixer')(),
                                require('postcss-pxtorem')({
                                    'rootValue': 100,
                                    'propWhiteList': []
                                })
                            ]
                        }
                    },
                    'less-loader?sourceMap'
                ],
                fallback: 'style-loader'
            })
        },]
    },
    plugins: [
        definePlugin,
        extractLESSPlugin,
        copyPlugin,
        hotModuleReplacementPlugin
    ]
});