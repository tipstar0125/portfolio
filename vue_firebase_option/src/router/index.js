import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
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
