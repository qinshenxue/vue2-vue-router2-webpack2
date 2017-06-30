import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue'
import routes from './router'
Vue.use(VueRouter);
const router = new VueRouter(routes)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')