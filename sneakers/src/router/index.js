import { createRouter, createWebHistory } from 'vue-router'
import main from '@/pages/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: main
  },
  { path: '/favorites', name: 'favorites', component: () => import('@/pages/FavoritesPage.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
