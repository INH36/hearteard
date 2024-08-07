import HomeView from '@/views/HomeView.vue'
import UserHome from '@/views/UserHome.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Test from '@/components/test.vue'

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
          name: 'userhome',
          component: UserHome
        },
        {
          path:'/test',
          name: 'test',
          component: Test
        }
      ]
    }
  ]
})

export default router
