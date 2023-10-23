import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'client-pages',
      component: () => import('@/components/Layout/ClientLayout/ClientLayout.vue'),
      children: [
        {
          path: '',
          name: 'client-home-page',
          component: () => import('@/views/ClientsPages/HomePageClient.vue')
        }
      ]
    },
    {
      path: '/partner',
      name: 'partner-pages',
      component: () => import('@/components/Layout/PartnerLayout/PartnerLayout.vue'),
      children: [
        {
          path: '',
          name: 'partner-home-page',
          component: () => import('@/views/PartnerPages/HomePagePartner.vue')
        }
      ]
    }
  ]

})

export default router
