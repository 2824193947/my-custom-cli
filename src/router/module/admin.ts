import { RouteRecordRaw } from 'vue-router';

export default {
  name: 'admin',
  path: '/admin',
  redirect: '/admin/user',
  component: () => import('@/layouts/admin.vue'),
  meta: {auth: true},
  children: [
    {
      name: 'admin.user',
      path: '/admin/user',
      component: () => import('@/views/admin/user.vue'),
    },
    {
      name: 'admin.home',
      path: '/admin/home',
      component: () => import('@/views/admin/home.vue'),
    },
  ],
} as unknown as RouteRecordRaw