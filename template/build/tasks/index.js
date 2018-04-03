/**
 * Build Tasks 应用编译相关任务
 */
'use strict';

module.exports = {
	// ---说明：单个任务配置
	'build.css': require('./build.css'),

	'build.vendor': require('./build.vendor'),

	'build.assets': require('./build.assets'),

	'build.main': require('./build.main'),

	'build.index': require('./build.index')
};
