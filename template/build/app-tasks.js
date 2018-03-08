/**
 * Build Tasks 应用编译相关任务
 */
'use strict';

module.exports = {
    // ---说明：单个任务配置
    'build.css': require('./tasks/build.css'),

    'build.vendor': require('./tasks/build.vendor'),

    'build.assets': require('./tasks/build.assets'),

    'build.main': require('./tasks/build.main'),

    'build.index': require('./tasks/build.index')
};