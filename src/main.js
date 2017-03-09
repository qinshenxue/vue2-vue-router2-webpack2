import Vue from 'vue';
const VueRouter = require('vue-router');
const App = require('./app.vue');
Vue.use(VueRouter);
const router = new VueRouter(require('./router'))
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});