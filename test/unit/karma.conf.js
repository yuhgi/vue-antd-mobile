var webpackConfig = require('../../scripts/package/webpack.package.test.js');
module.exports = function (config) {
    config.set({
        basePath: '', // 所有相对路径的基路径
        frameworks: ['jasmine'],// 使用的测试框架
        files: [ // 测试文件匹配
            '**/*.spec.js'
        ],
        exclude: [ // 被排除在外的文件
        ],
        preprocessors: { // 进行预处理
            '**/*.spec.js':['webpack','sourcemap']
        },
        webpack:webpackConfig,
        reporters: ['spec','coverage'],
        coverageReporter:{
            dir:'coverage/',
            reporters:[
                { type: 'html', subdir: 'report-html' },
                { type: 'lcov', subdir: 'report-lcov' }
            ]
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        autoWatchBatchDelay:500,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity
    });
};
