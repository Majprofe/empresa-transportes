import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import MainView from '@/views/MainView.vue'
import InputsView from '@/views/InputsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/inputs',
      name: 'inputs',
      component: InputsView
    }
  ]
})

export default router
