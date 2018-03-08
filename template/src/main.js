import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import store from './store';

import App from './views/App.vue';
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    store,
    template: '<div><App /></div>',
    components: {
        App
    }
});

// service api test
// import TestService from './services/test.service';

// TestService.test();
