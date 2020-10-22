import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Categroy = () => import('../views/categroy/Categroy')
const Shop = () => import('../views/shop/Shop')
const Mine = () => import('../views/mine/Mine')
const Detail = () => import('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/categroy',
    component: Categroy
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
