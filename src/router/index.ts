import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import layoutRoutes from './autoload'
import routes from './moudle/routes'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRoutes]
})

// App 是传入 app的类型，可以在main.ts 中看到app是这个类型
export function setupRouter(app: App) {
  app.use(router)
}
 
export default router