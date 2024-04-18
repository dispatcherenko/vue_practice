import { createRouter, createWebHistory } from 'vue-router'
import home from "@/pages/Index"; //изменилось название и путь

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/pages/AppContacts") //dynamic loading
  },
  {
    path: "/rules",
    name: "rules",
    component: () => import("@/pages/AppRules") //dynamic loading
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("@/pages/AppFavorites")
  },
  {
    path: "/:id",
    name: "card",
    component: () => import("@/components/home/HomeCardDetail")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router