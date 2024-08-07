import HomeView from '@/views/HomeView.vue'
import BolgView from '@/views/BolgView.vue'
import UserHome from '@/views/UserHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path:'/',
          name: 'bolg',
          component: BolgView
        },
        {
          path:'/frindhome',
          name: 'user',
          component: UserHome
        }
      ]
    }
  ]
})

export default router
