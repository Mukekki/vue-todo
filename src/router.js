import vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'

vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/todo',
            component: () => import('./pages/todo.vue')
        }
    ]
})