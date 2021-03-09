import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Anime from "@/views/Anime.vue";
import Manga from "@/views/Manga.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'Books',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Books.vue')
  },
  {
    path: '/anime',
    name: 'Anime',
    component: Anime
  },
  {
    path: '/film',
    name: 'Film',
    component: () => import(/* webpackChunkName: "about" */ '../views/Film.vue')
  },
  {
    path: '/manga',
    name: 'Manga',
    component: Manga
  }
]

const router = new VueRouter({
  routes
})

export default router
