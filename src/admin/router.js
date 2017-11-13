import index from './views/index.vue'
import table from './views/table.vue'
export default {
    base: process.env.NODE_ENV === "production" ? '/' : '/admin/',
    mode: 'history',
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        component: index
    }, {
        path: '/table',
        component: table
    }]
}
