'use strict';

const config = require('../config');

//导出模块
module.exports = {
  sourceDir: config.source.path,
  buildDir: config.dest.path,
  // 每次执行编译之前是否清理当前编译目录
  startClean: true,
  // task任务列表
  buildTasks: require('./tasks'),
  // 部署配置
  deploy: require('./deploy')
};
