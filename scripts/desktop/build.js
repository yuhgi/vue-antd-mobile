const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.desktop.prod.js');

const spinner = ora({
    text:'  Building Desktop...',
    color:'green'
});
spinner.start();
webpack(webpackConfig,  (err, stats) => {
    spinner.stop();
    if (err) { 
        spinner.fail(err.toString());
        return;
    }
    
    const info = stats.toString({
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