var ghpages = require('gh-pages');
var path = require('path');
const ora = require('ora');
const chalk = require('chalk');

const spinner = ora({
    text: '  Deploy to gh-pages branch...',
    color: 'green'
});

spinner.start();
ghpages.publish('docs',{
    branch:'gh-pages',
    repo: 'https://github.com/yuhgi/vue-antd-mobile.git',
    add:false
},(err) => {
    if(err){
        spinner.fail(err.toString());
        return;
    }
    spinner.succeed(chalk.white.bgGreen.bold('  Deploy Complete.\n'));
});