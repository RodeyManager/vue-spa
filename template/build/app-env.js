/**
 * 编译环境相关
 */
'use strict';

const fs = require('fs'),
    path = require('path');
const argv = process.argv.slice(2);

function getArgValue(ags) {
    if (typeof ags === 'string') return ags in argv && argv[ags];
    if (Array.isArray(ags) && ags.length > 0) {
        for (let rs, i = 0; i < ags.length; ++i) {
            rs = argv[ags[i]];
            // 参数如果是数字，minimist返回的将是Number
            // 0可代表为false
            if (rs === 0) return String(rs);
            if (rs) return rs;
        }
    }
    return null;
}

const // 当前编译环境: local: 本地开发环境(mock data)(默认); dev: 开发环境; stg: 测试环境; prd: 生成环境
    env = getArgValue(['e', 'env']) || process.env.NODE_ENV,
    dist = getArgValue(['d', 'dest']) || 'dist',
    isLocal = env === 'local',
    isDev = ['dev', 'development'].indexOf(env) > -1,
    isProduction = ['prd', 'production'].indexOf(env) > -1,
    isStg = env === 'stg',
    isIf = isStg || isProduction;

// 根据当前编译环境，替换应用配置文件中的环境设置，以便加载对应环境配置
(() => {
    let appPath = './src/config/app-config.js';
    let appCfgContent = fs.readFileSync(appPath, 'UTF8');
    appCfgContent = appCfgContent.replace(/.\/env\/(local|dev|stg|prd)/i, `./env/${env}`);
    fs.writeFileSync(appPath, appCfgContent, 'UTF8');
})();

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
        path: path.isAbsolute(dist) ? dist : path.resolve(__dirname, '../', dist)
    },
    source: {
        path: path.resolve(__dirname, '../src')
    }
};
