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
    let token: any = util.store.getLocalstore(CacheEnum.TOKEN_NAME)
    if (this.isLogin(to, token) === false) return { name: 'login' }
    console.log("🚀 ~ this.isGuest(to, token)", this.isGuest(to, token))
    if (this.isGuest(to, token) === false) return from
    // await this.getUserInfo()
  }

  // private token(): string | null {
  //   return store.getLocalstore(CacheEnum.TOKEN_NAME)
  // }

  // private getUserInfo() {
  //   if (this.token()) return userStore().getUserInfo()
  // }

  //游客
  private isGuest(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.guest || (route.meta.guest && !token))
  }

  //登录用户访问
  private isLogin(route: RouteLocationNormalized, token: any) {
    // 是否设置原信息,如果没有设置随便访问, 设置了就有了权限
    return Boolean(!route.meta.auth || (route.meta.auth && token))
  }
}

export default (router: Router) => {
  new Ground(router).run()
}