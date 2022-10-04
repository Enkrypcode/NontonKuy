import Vue from 'vue'
import VueRouter from 'vue-router'
import MoviesPage from '../views/MoviesPage.vue'
import MoviesDetailPage from '../views/MoviesDetailPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movies',
    component: MoviesPage
  },
  {
    path: '/movie/:id',
    name: 'movie detail',
    component: MoviesDetailPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
