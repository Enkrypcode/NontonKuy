import Vue from 'vue'
import VueRouter from 'vue-router'
import MoviesPage from '../views/MoviesPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movies',
    component: MoviesPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
