import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IndexView',
      component: () => import('../views/IndexView.vue')
    },
    {
      path: '/about',
      name: 'AboutView',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/services',
      name: 'ServicesView',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: () => import('../views/ContactUs.vue')
    }
  ]
})

export default router
