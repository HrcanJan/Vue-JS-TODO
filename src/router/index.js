import { createRouter, createWebHistory } from 'vue-router'
import List from '../shopping-list/List.vue'
import Detail from '../shopping-list/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'list',
    component: List
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
