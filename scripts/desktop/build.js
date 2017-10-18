var ora = require('ora');
var chalk = require('chalk');
var webpack = require('webpack');
var webpackConfig = require('./webpack.desktop.prod.js');

var spinner = ora({
    text:'  Building Desktop...',
    color:'green'
});
spinner.start();
webpack(webpackConfig, function (err, stats) {
    spinner.stop();
    if (err) { 
        spinner.fail(err.toString());
        return;
    }
    
    var info = stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n';
    console.log(info);
    if(stats.hasErrors()){
        spinner.fail(chalk.white.bgGreen.bold('  Build Desktop Error.\n'));
        return;
    }
    spinner.succeed(chalk.white.bgGreen.bold('  Build Desktop Complete.\n'));
});