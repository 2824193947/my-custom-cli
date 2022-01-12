import { RouteLocationNormalized, Router } from "vue-router"


class Ground {
  private router
  constructor(routers: Router) {
    this.router = routers
  }
  public run() {
    console.log(this.router);
    this.router.beforeEach((to, from) => { console.log(to) })
  } 
  private beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized, next: RouteLocationNormalized) {
    
  }
  private isLogin(route: RouteLocationNormalized) {
    return !route.meta.guest
  }
}

export default (router: Router) => {
  new Ground(router).run()
}