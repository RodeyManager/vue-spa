/**
 * Created by Rodey on 2018/2/28
 */
import Index from '../views/index/Index.vue';

const routerMapping = [
    {
        path: '',
        redirect: '/index'
    },
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/complete',
        component: Index,
        meta: { type: '1' }
    },
    {
        path: '/uncomplete',
        component: Index,
        meta: { type: '0' }
    }
];

export default new VueRouter({
    routes: routerMapping
});
