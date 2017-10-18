const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.mobile.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
const cleanPlugin = new CleanWebpackPlugin(['docs/mobile'],{
    root:path.join(__dirname,'../../'),
    verbose:true
});
const copyPlugin = new CopyWebpackPlugin([{
    from:path.join(__dirname,'../../sites/mobile/style/logo.png'),
    to:path.join(__dirname,'../../docs/mobile')
}]);

module.exports =  merge(baseWebpackConfig, {
    output: {
        filename: '[name].min.js'
    },
    module: {
        rules: [{
            test: /\.(less|css)$/,
            loader: extractLESSPlugin.extract({
                use: [
                    'css-loader', 
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:[
                                require('autoprefixer')(),
                                require('postcss-pxtorem')({
                                    'rootValue': 100,
                                    'propWhiteList': []
                                })
                            ]
                        }
                    },
                    'less-loader'
                ],
                fallback: 'style-loader'
            })
        },]
    },
    plugins: [
        definePlugin,
        extractLESSPlugin,
        uglifyJSPlugin,
        cleanPlugin,
        copyPlugin
    ]
});