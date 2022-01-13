import { RouteRecordRaw } from 'vue-router';

export default {
  name: 'admin',
  path: '/admin',
  redirect: '/admin/user',
  component: () => import('@/layouts/admin.vue'),
  children: [
    {
      name: 'admin.home',
      path: '/admin/user',
      component: () => import('@/views/admin/user.vue'),
    },
  ],
} as unknown as RouteRecordRaw