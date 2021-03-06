import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App';
import router from '@/router';
import store from '@/store';

import '@/assets/css/app.scss';

Vue.config.productionTip = false;
Vue.use(VueRouter);

// 挂载
import Service from '@/service';
Vue.prototype.SERVER = Service;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  render: h => h(App)
});
