import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Project1 from '../pages/Project1.vue'
import Project2 from '../pages/Project2.vue' // 프로젝트 상세 페이지

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/project/1',
      name: 'Project1',
      component: Project1
    },
    {
      path: '/project/2',
      name: 'Project2',
      component: Project2
    },
  ],
  // 해시 이동을 위한 scrollBehavior 설정 추가
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  }
})

export default router
