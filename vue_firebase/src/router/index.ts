import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DashBoard from '../views/DashBoard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
