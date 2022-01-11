import { RouteRecordRaw } from "vue-router"
import utils from '@/utils/index'
import getRoutes from "./autoload"

let routes = [] as RouteRecordRaw[]

if (utils.env.VITE_ROUTER_AUTOLOAD) {
  routes = getRoutes()
}

export default routes
