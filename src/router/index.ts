import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DeclarerUnSinistreView from '../views/DeclarerUnSinistreView.vue'
import NosProduitsView from '../views/NosProduitsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/declarer-sinistre',
      name: 'declare-sinistre',
      component: DeclarerUnSinistreView
    },
    {
      path: '/nos-produits',
      name: 'nos-produits',
      component: NosProduitsView
    },
    // ... Autres routes
  ]
})

export default router
