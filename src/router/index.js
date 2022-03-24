import { createRouter, createWebHashHistory } from 'vue-router'
import gigApp from '../views/gig-app.vue'
import explore from '../views/explore.vue'
import gigDetails from '../views/gig-details.vue'

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
  ]
})

export default router
