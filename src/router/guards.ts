import { RouteLocationNormalized, Router } from "vue-router"
import { CacheEnum } from '@/enum/cacheEnum'
import util from '@/utils/index'


class Ground {
  private router
  constructor(routers: Router) {
    this.router = routers
  }

  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  } 

  private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    console.log("~ this.isLogin(to)", this.isLogin(to))
    console.log("~ this.isGuest(to)", this.isGuest(to))
    if (this.isLogin(to)) return { path: '/login' }
    if (this.isGuest(to) === false) return from
    // await this.getUserInfo()
  }

  private token(): string | null {
    return util.store.getLocalstore(CacheEnum.TOKEN_NAME)
  }

  // private getUserInfo() {
  //   if (this.token()) return userStore().getUserInfo()
  // }

  //游客
  private isGuest(route: RouteLocationNormalized) {
    return Boolean(!route.meta.guest || (route.meta.guest && !this.token()))
  }

  //登录用户访问
  private isLogin(route: RouteLocationNormalized) {
    return Boolean(!route.meta.auth || (route.meta.auth && this.token()))
  }
}

export default (router: Router) => {
  new Ground(router).run()
}