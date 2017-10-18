const webpack = require('webpack');
const path = require('path');
const definePlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production')
    }
});

module.exports = {
    entry: {
        'vue-antd-mobile': path.join(__dirname,'../../lib/index.js')
    },
    output: {
        path: path.join(__dirname, '../../dist'),
        publicPath: './',
        library: 'vue-antd-mobile',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'lib': path.join(__dirname, '../../lib'),
            'vue':'vue/dist/vue.js'
        }
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
            test: /\.less$/,
            use:['style-loader','css-loader','less-loader']
        }, {
            test: /\.css$/,
            use:['style-loader','css-loader']
        },{ 
            test: /\.(gif|jpg|png|woff|eot|ttf)\??.*$/, 
            loader: 'url-loader?limit=8192'
        },{
            test:/\.(svg)$/i,
            loader:'svg-sprite-loader'
        }]
    },
    plugins: [
        definePlugin
    ]
};