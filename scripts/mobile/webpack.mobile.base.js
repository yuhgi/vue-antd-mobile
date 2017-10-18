const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, '../../sites/mobile/index.html'),
    inject: true
});



module.exports = {
    entry: {
        app: [path.join(__dirname, '../../sites/mobile/index.js')]
    },
    output: {
        path: path.join(__dirname, '../../docs/mobile'),
        filename: '[name].js',
        publicPath: './'
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css', '.less'],
        alias: {
            '@': path.join(__dirname, '../../sites/mobile'),
            'vue-antd-mobile': path.join(__dirname,'../../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
 
                    }
                }
            },
            {
                test: /\.(gif|jpg|png|woff|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192'
            },{
                test:/\.(svg)$/i,
                loader:'svg-sprite-loader'
            }
        ]
    },
    plugins: [
        htmlPlugin
    ]
};