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
        }, {
          path: '/declarer-un-sinistre',
          name: 'declare-sinistre',
          component: () => import('@/views/ClientsPages/DeclarerUnSinistreView.vue')
        },
        {
          path: '/nos-produits',
          name: 'nos-produits',
          component: () => import('@/views/ClientsPages/NosProduitsView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/ClientsPages/AboutView.vue')
        }
      ]
    },

    {

      path: '/partner/',
      name: 'partner-pages',
      component: () => import('@/components/Layout/PartnerLayout/PartnerLayout.vue'),
      children: [
        {
          path: '',
          name: 'partner-home-page',
          component: () => import('@/views/PartnerPages/HomePagePartner.vue')
        },
        {
          path: '/partner/courtier',
          name: 'Courtier',
          component: () => import('@/views/PartnerPages/CourtierPage.vue')
        }
      ]
    }

    
    // ... Autres routes
  ]

})

export default router
