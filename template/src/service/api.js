/**
 * API 接口地址定义
 */
export const test = {
  list: 'test',
  info: 'test',
  update: 'test',
  del: 'test'
};

export const user = {
  list: 'sys/user/list',
  info: 'sys/user/info',
  update: 'sys/user/update',
  del: 'sys/user/delete',
  vip: {
    list: 'sys/user/vip/list',
    info: 'sys/user/vip/info',
    update: 'sys/user/vip/update',
    del: 'sys/user/vip/delete'
  }
};

export default {
  test,
  user
};
