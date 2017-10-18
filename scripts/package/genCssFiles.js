const path = require('path');
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
const components = require('./component');
const less = require('less');
const series = require('async/series');
const waterfall = require('async/waterfall');

const spinner = ora({
    text: '  Generate CssFiles...\r\n',
    color: 'green'
});

const basePath = path.join(__dirname, '../../lib');

let genComponentFiles = function (callback) {
    Object.keys(components).forEach(key => {
        let filePath = path.join(basePath, key.toString(), 'style/index.js');
        let contentStr = 'require("./index.css");\r\n';
        contentStr += 'require("../../style");';

        fs.writeFile(filePath, contentStr, 'utf-8', (err) => {
            if (err) {
                callback(err);
                return;
            }
        });
    });
    callback(null);
};

let compileLessFile = function (filePath, callback) {
    let lessStr = fs.readFileSync(filePath, 'utf8');
    less.render(lessStr, {
        paths: [
            path.join(__dirname, '../../src/style')
        ],
        filename: 'index.less'
    }).then(output => {
        callback(null, output.css);

    }).catch(err => {
        throw err;
    });
};

let mkdir = function (dirpath, callback) {
    if (typeof dirpath !== 'string') {
        callback(new Error('invalid param'));
    }
    fs.stat(dirpath, (err, stats) => {
        if(err){
            fs.mkdir(dirpath, (err) => {
                if (err) {
                    callback(err);
                    return;
                }
                callback(null);
            });
            return;
        }
        if (stats.isDirectory()) {
            callback(null);
            return;
        }
    });
};

let writeFile = function (dir, filename, content, callback) {
    series([
        (callback) => {
            mkdir(dir, (err) => {
                if (err) {
                    callback(err);
                    return;
                }
                callback(null);
            });
        },
        (callback) => {
            console.log('write file ', path.join(dir, filename));
            fs.writeFile(path.join(dir, filename), content, 'utf-8', (err) => {
                if (err) {
                    callback(err);
                    return;
                }
                callback(null);
            });
        }
    ], (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
};


let genBaseCssFiles = function (callback) {
    waterfall([
        (callback) => {
            // compile src/style/index.less
            compileLessFile(path.join(__dirname, '../../src/style/index.less'), callback);
        },
        (cssStr, callback) => {
            // create lib/style/index.css
            writeFile(path.join(basePath, 'style'), 'index.css', cssStr, callback);
        },
        (callback) => {
            // create lib/style/index.js
            let contentStr = 'require("./index.css");\r\n';
            contentStr += 'require("normalize.css");';
            writeFile(path.join(basePath, 'style'), 'index.js', contentStr, callback);
        }
    ], (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
};


series([
    (callback) => {
        spinner.start();
        callback(null);
    },
    genComponentFiles,
    genBaseCssFiles
], (err) => {
    if (err) {
        console.log(err);
        spinner.fail(chalk.white.bgGreen.bold('  Generate CssFiles Error.\n'));
    }
    spinner.succeed(chalk.white.bgGreen.bold('  Generate CssFiles Complete.\n'));
});

