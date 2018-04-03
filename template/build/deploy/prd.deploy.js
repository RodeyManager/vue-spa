const path = require('path');

module.exports = [
	{
		host: '192.168.233.130',
		user: 'root',
		pass: 'rodey@123',
		type: 'increment',
		// 远程目录
		remotePath: '/var/www/VUE_SPA',
		// 备份相关配置
		backup: {
			// 备份到本地路径
			outPath: path.resolve(__dirname, '../backs'),
			// 备份目录名称
			name: 'vue_spa-',
			// 备份模式：
			// remote (远程备份，将备份文件存在远程服务器上，需要有server shell的执行权限 [ zip, unzip, cd ])
			// local (默认，本地备份，将备份到本地，直接将服务器目录拉取到本地)
			mode: 'local',
			// 显示方式(all: 详细信息; progress: 简单进度条)
			log: 'progress'
		}
	}
];
