import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Sucess from '../views/Sucess/Sucess.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/sucess',
    name: 'SucessPage',
    component: Sucess,
  }
]

const router = new VueRouter({
  routes
})

export default router
