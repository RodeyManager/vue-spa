import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App';
import router from '@/router';
import store from '@/store';

import '@/assets/css/app.scss';

Vue.config.productionTip = false;
Vue.use(VueRouter);

// 挂载
// Vue.prototype.isMobile = navigator.userAgent.match(/mobile/i);

// 定义全局filter
// Vue.filter('formatMoney', formatMoney);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
});

// service api test
import Service from '@/service';
console.log(Service);
Service.Test.list({})
  .then(res => {
    console.log('Success: ', res);
  })
  .catch(err => {
    console.log('Error: ', err);
  });
