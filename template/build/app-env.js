/**
 * 编译环境相关
 */
'use strict';

const fs = require('fs'),
	path = require('path'),
	argv = require('minimist')(process.argv.slice(2));

const env = getArgValue(['e', 'env']) || process.env.NODE_ENV,
	dist = getArgValue(['d', 'dest']) || 'dist';

const // 当前编译环境: local: 本地开发环境(mock data)(默认); dev(development): 开发环境; stg(stage): 测试环境; prd(production): 生成环境
	isLocal = env === 'local',
	isDev = ['dev', 'development'].indexOf(env) > -1,
	isProduction = ['prd', 'production'].indexOf(env) > -1,
	isStg = env === 'stg',
	isIf = isStg || isProduction;

// 根据当前编译环境，替换应用配置文件中的环境设置，以便加载对应环境配置
(() => {
	let appPath = path.resolve(__dirname, '../src/config/app-config.js');
	let appCfgContent = fs.readFileSync(appPath, 'UTF8');
	appCfgContent = appCfgContent.replace(
		/(\/env\/)([^'"]*?)(['"])/gi,
		`$1${env}$3`
	);
	fs.writeFileSync(appPath, appCfgContent, 'UTF8');
})();

function getArgValue(ags) {
	let rs;
	if (typeof ags === 'string') {
		rs = ags in argv && argv[ags];
	}
	if (Array.isArray(ags) && ags.length > 0) {
		for (let i = 0; i < ags.length; ++i) {
			rs = argv[ags[i]];
			if (rs === 0 || rs) return rs;
		}
	}
	return rs;
}

module.exports = {
	name: env,
	isLocal,
	isDev,
	isStg,
	isProduction,
	isIf,
	// 项目编译后的路径
	dest: {
		name: dist,
		path: path.isAbsolute(dist)
			? dist
			: path.resolve(__dirname, '../', dist)
	},
	source: {
		path: path.resolve(__dirname, '../src')
	}
};
