import index from './views/index.vue'
import css from './views/css.vue'
import stylus from './views/stylus.vue'
import less from './views/less.vue'
import sass from './views/sass.vue'
import image from './views/image.vue'
import iconfont from './views/iconfont.vue'
export default {
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        component: index
    }, {
        path: '/css',
        component: css
    }, {
        path: '/stylus',
        component: stylus
    }, {
        path: '/less',
        component: less
    }, {
        path: '/sass',
        component: sass
    }, {
        path: '/image',
        component: image
    }, {
        path: '/iconfont',
        component: iconfont
    }/*, {
        path: '/async',
        component: () => import(/!* webpackChunkName: "async" *!/'./views/async.vue')
    }*/]
}
