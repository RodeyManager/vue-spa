/**
 * Deploy 应用部署相关, 可根据env设置对应的节点,支持多节点部署
 */
'use strict';

const path = require('path');
const config = require('../../config');

const {
  env,
  dest
} = config;

const backup = {
  outPath: path.resolve(dest.path, '../backs'),
  name: 'VUE_SPA-',
  // 备份模式：
  // remote (远程备份，将备份文件存在远程服务器上，需要有server shell的执行权限 [ zip, unzip, cd ])
  // local (默认，本地备份，将备份到本地，直接将服务器目录拉取到本地)
  // mode: 'local',
  // 显示方式(all: 详细信息; progress: 简单进度条)
  log: 'progress'
};

const servers = {
  sit: [],
  uat: [{
    host: '10.142.142.117',
    user: 'root',
    pass: 'root123',
    remotePath: '/var/www/VUE_SPA',
    type: 'increment',
    // backup
  }, ],
  prd: [],
};

module.exports = servers[env];
