const path = require('path');
const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');
const rimraf = require('rimraf');
const allConfig = require('./webpack.package.all.js');
const compoConfig = require('./webpack.package.compo.js');

const spinner = ora({
    text: '  Building Package...',
    color: 'green'
});

rimraf(path.join(__dirname, '../../lib/*.*'),  (err) => {
    if (err) {
        throw err;
    }
    spinner.start();
    webpack([allConfig, compoConfig], (err, mStats) => {
        spinner.stop();
        if (err) {
            spinner.fail(err.toString());
            return;
        }
        for (let i = 0, len = mStats.stats.length; i < len; i++) {
            let stats = mStats.stats[i];
            let info = stats.toString({
                colors: true,
                modules: true,
                children: false,
                chunks: false,
                chunkModules: true
            }) + '\n\n';
            console.log('info:', info);
            if (stats.hasErrors()) {
                spinner.fail(chalk.white.bgGreen.bold('  Build Package Error.\n'));
                return;
            }
        }

        spinner.succeed(chalk.white.bgGreen.bold('  Build Package Complete.\n'));
    });
});






