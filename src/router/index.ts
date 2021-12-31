import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/home',
      component: () => import('../views/home.vue')
    }
  ]
})

// App 是传入 app的类型，可以在main.ts 中看到app是这个类型
export function setupRouter(app: App) {
  app.use(router)
}

export default router