/**
 * Deploy 应用部署相关, 可根据env设置对应的节点,支持多节点部署
 */
'use strict';

const path = require('path');

module.exports = [
	{
		host: '192.168.233.130',
		user: 'root',
		pass: 'rodey@123',
		port: 22,
		timeout: 50000,
		// 本地路径，默认项目编译后输出路径 "dist"
		// localPath: path.join(env.dest.path, '/**/*'),
		// 上传过滤列表
		// filters: [],
		// @String 部署方式，"full" 全量；"increment" 增量
		type: 'increment',
		// 远程目录
		remotePath: '/var/www/VUE_SPA'
	},
	{
		host: '192.168.233.130',
		user: 'root',
		pass: 'rodey@123',
		type: 'increment',
		remotePath: '/var/www/VUE_SPA_TEST'
	}
];
