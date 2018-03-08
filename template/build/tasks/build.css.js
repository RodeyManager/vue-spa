/**
 * build css styles task
 */
'use strict';

const cssLoader = require('../loaders/cssLoader');

module.exports = {
    // 源文件
    src: ['assets/css/app.scss'],
    // 输出路径
    dest: 'assets/css',
    // 依赖task列表
    rely: ['build.assets'],
    // gulp插件
    loader: cssLoader('app.min.css'),
    // 监听变化（文件改变执行该任务）
    watch: ['assets/css/**/*']
};
