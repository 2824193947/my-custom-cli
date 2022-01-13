import { RouteRecordRaw } from "vue-router"
import utils from '@/utils/index'
import getRoutes from "./autoload"
import autoloadModuleRoutes from './module'

let routes = [] as RouteRecordRaw[]

if (utils.env.VITE_ROUTER_AUTOLOAD) {
  routes = getRoutes()
} else {
  routes = autoloadModuleRoutes()
}

export default routes
