const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESSPlugin = new ExtractTextPlugin('/[name]/style/index.css');
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

const components = require('./component');

const entry = {};

Object.keys(components).forEach((key) => {
    entry[key] = path.join(__dirname,components[key],'index.js');
});

module.exports = {
    entry: entry,
    output: {
        filename:'[name]/index.js',
        path: path.join(__dirname, '../../lib'),
        publicPath: './',
        libraryTarget:'commonjs2'
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
        'vue-touch':{
            root:'VueTouch',
            amd:'vue-touch',
            commonjs:'vue-touch',
            commonjs2:'vue-touch'
        }
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    target:'node',
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
        extractLESSPlugin
    ]
};