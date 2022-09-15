import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    document.documentElement.scrollTop = 0
  },
  routes,
})
export default router
