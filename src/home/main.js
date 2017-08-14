import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routerConfig from './router';
Vue.use(VueRouter);
var router = new VueRouter(routerConfig)
import  '~/css/base.css'
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
