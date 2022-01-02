import { RouteRecordRaw } from 'vue-router'

const routes = [
  { 
    path: '/',
    name: 'ad',
    component: () => import('@/views/home.vue')
  }
] as RouteRecordRaw[]

export default routes