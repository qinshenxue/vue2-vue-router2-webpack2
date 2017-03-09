import Vue from 'vue';
const VueRouter = require('vue-router');
import App from './app.vue';
Vue.use(VueRouter);
const router = new VueRouter(require('./router'))
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});