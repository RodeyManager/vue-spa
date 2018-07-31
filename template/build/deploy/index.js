/**
 * Deploy 应用部署相关, 可根据env设置对应的节点,支持多节点部署
 */
'use strict';

const path = require('path');
const config = require('../../config');

module.exports = [
  {
    // 是否开启
    isExecute: false,
    host: '192.168.233.130',
    user: 'root',
    pass: 'rodey@123',
    port: 22,
    timeout: 50000,
    // 本地路径，默认项目编译后输出路径 dist
    // localPath: path.join(env.dest.path, '/**/*'),
    // 过滤上传列表
    // filters: [],
    remotePath: '/var/www/VUE_SPA',
    type: 'increment',
    backup: {
      outPath: path.resolve(config.dest.path, '../backs'),
      name: 'VUE_SPA-',
      // 备份模式：
      // remote (远程备份，将备份文件存在远程服务器上，需要有server shell的执行权限 [ zip, unzip, cd ])
      // local (默认，本地备份，将备份到本地，直接将服务器目录拉取到本地)
      // mode: 'local',
      // 显示方式(all: 详细信息; progress: 简单进度条)
      log: 'progress',
      // 是否执行备份
      isExecute: ['prd', 'production'].indexOf(config.env) > -1
    }
  }
];
