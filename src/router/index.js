import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Project1 from '../pages/Project1.vue' // 프로젝트 상세 페이지

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/project1',
      name: 'Project1',
      component: Project1
    }
  ]
})

export default router
