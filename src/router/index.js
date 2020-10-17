import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import City from '../views/City'
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/Home'},
  {path: '/Home', component: Home},
  {path: '/City', component: City}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
