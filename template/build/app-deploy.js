/**
 * Deploy 应用部署相关, 可根据env设置对应的节点,支持多节点部署
 */
'use strict';

const env = require('./app-env');

module.exports = [
	{
		// 是否开启
		isExecute: env.isIf,
		host: '192.168.233.130',
		user: 'root',
		pass: 'root123',
		port: 22,
		timeout: 50000,
		// 本地路径，默认项目编译后输出路径 "dist"
		// localPath: path.join(env.dest.path, '/**/*'),
		// 上传过滤列表
		// filters: [],
		// @String 部署方式，"full" 全量；"increment" 增量
		type: 'increment',
		remotePath: '/var/www/VUE_SPA'
	}
];
