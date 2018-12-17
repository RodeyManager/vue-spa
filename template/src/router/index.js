/**
 * Created by Rodey on 2018/2/28
 */

import VueRouter from 'vue-router';

// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有开发环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV);

const routerMapping = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: _import('home/index'),
    name: 'home'
  },
  {
    path: '/test',
    component: _import('test/index'),
    name: 'test'
  }
];

export default new VueRouter({
  routes: routerMapping
});
