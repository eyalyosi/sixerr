import { createRouter, createWebHashHistory } from 'vue-router'
import gigApp from '../views/gig-app.vue'
import explore from '../views/explore.vue'
import gigDetails from '../views/gig-details.vue'
import orderApp from '../views/order-app.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'gig-app',
      component: gigApp
    },
    {
      path: '/explore',
      name: 'explore',
      component: explore
    },
    {
      path: '/gig/:_id',
      name: 'gig-details',
      component: gigDetails
    },
    {
      path: '/order-app/:_id',
      name: 'order-app',
      component: orderApp
    },
    
  ]
})

export default router
