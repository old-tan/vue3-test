import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomePageVue from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'

const routes = [
  { path: '/', component: HomePageVue },
  { path: '/about', component: AboutPage },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
