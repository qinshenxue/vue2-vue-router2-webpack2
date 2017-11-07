import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routerConfig from './router';
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter);
Vue.use(elementUI);
var router = new VueRouter(routerConfig)
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
