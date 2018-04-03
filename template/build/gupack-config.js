'use strict';

const env = require('./app-env');

//导出模块
module.exports = {
	// 源文件路径, 默认为 'src'
	sourceDir: env.source.path,
	// 编译产出路径，可以是绝对或者相对路径，默认为 'dist'
	buildDir: env.dest.path,
	// 默认启动页面地址
	indexFile: 'index.html',
	// 代理
	/*proxy: {
        context: '/api',
        target: 'http://127.0.0.1:3000/',
        changeOrigin: true
    },*/
	// task任务列表
	buildTasks: require('./tasks'),
	// 部署配置
	deploy: env.isProduction
		? require('./deploy/prd.deploy')
		: env.isStg ? require('./deploy/stg.deploy') : null,
	watch: !env.isProduction && [
		'views/**/*',
		'store/**/*',
		'router/**/*',
		'components/**/*',
		'assets/**/*',
		'main.js',
		'index.html'
	]
};
