import { RouteLocationNormalized, Router } from "vue-router"
import { CacheEnum } from '@/enum/cacheEnum'
import util from '@/utils/index'


class Ground {
  private router
  constructor(routers: Router) {
    this.router = routers
  }

  public run() {
    console.log(this.router);
    this.router.beforeEach(this.beforeEach.bind(this))
  } 

  private beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    
  }

  private token(): string | null {
    return util.store.getLocalstore(CacheEnum.TOKEN_NAME)
  }
  
  private isLogin(route: RouteLocationNormalized) {
    return !route.meta.auth || route.meta.auth && 
  }
}

export default (router: Router) => {
  new Ground(router).run()
}