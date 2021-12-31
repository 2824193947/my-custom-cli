import { createApp } from 'vue'
import router, { setupRouter } from './router/index'
import App from './App.vue'


async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  // 最新router是异步，需要等待router加载完之后再导出
  await router.isReady()
  app.mount('#app')
}

bootstrap()
