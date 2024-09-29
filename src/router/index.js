import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/blogs',
      name: 'BlogsView',
      component: () => import('../views/BlogsView.vue')
    },
    {
      path: '/edit',
      name: 'PostCreate',
      component: () => import('../views/PostCreate.vue')
    },
    {
      path: '/blog/:id',
      name: 'BlogView',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/auth',
      name: 'AuthView',
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/faq',
      name: 'FaqView',
      component: () => import('../views/FaqView.vue')
    }
  ]
})

export default router
