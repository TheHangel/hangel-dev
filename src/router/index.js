import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/minecraft',
      name: 'minecraft',
      children: [
        {
          path: 'the-fletching-table-mod',
          name: 'the-fletching-table-mod',
          component: () => import('@/views/minecraft/TheFletchingTableMod.vue')
        }
      ]
    },
  ]
})

export default router
