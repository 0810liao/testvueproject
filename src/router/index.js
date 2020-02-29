import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home'
import Category from 'views/category/Category'
import Profile from 'views/profile/Profile'
import Shopcat from 'views/cart/Cart'
Vue.use(VueRouter)
const routes = [{
        path: '',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Shopcat
    },
    {
        path: '/profile',
        component: Profile
    },
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router