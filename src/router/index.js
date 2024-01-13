import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/projects/Projects.vue')
    },
    {
      path: '/minecraft',
      name: 'minecraft',
      children: [
        {
          path: 'the-fletching-table-mod',
          name: 'the-fletching-table-mod',
          component: () => import('@/views/projects/minecraft/TheFletchingTableMod.vue')
        }
      ]
    },
  ]
})

export default router
