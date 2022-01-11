import { RouteRecordRaw } from "vue-router"
import { env } from '@/utils/index'
import getRoutes from "./autoload"

let routes = [] as RouteRecordRaw[]

if (env.VITE_ROUTER_AUTOLOAD) {
  routes = getRoutes()
}

export default routes
