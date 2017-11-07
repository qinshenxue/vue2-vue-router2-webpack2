import index from './views/index.vue'
import table from './views/table.vue'
export default {
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        component: index
    },{
        path: '/table',
        component: table
    }]
}
