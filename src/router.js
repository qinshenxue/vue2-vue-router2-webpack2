import index from './views/index.vue'
import css from './views/css.vue'
import stylus from './views/stylus.vue'
import less from './views/less.vue'
import sass from './views/sass.vue'
export default {
    routes: [{
        path: '/index',
        component: index
    },{
        path: '/css',
        component: css
    },{
        path: '/stylus',
        component: stylus
    },{
        path: '/less',
        component: less
    },{
        path: '/sass',
        component: sass
    }]
}