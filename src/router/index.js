import Vue from "vue";
import VueRouter from "vue-router";
import constRouterMap from "./commen";
import asyncRouter from "./modules";
import localStore from "storejs";
export const constantRouterMap = constRouterMap;
export const asyncRouterMapGetter = asyncRouter;

import store from "@/store";

Vue.use(VueRouter);

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
};

const createRouter = () =>
  new VueRouter({
    mode: "hash",
    routes: constantRouterMap
  });
const router = createRouter();

router.beforeEach((to, from, next) => {
  let token = localStore.get("token");
  if (!token) {
    //未登录跳转到登录页
    if (to.fullPath !== "/login") {
      next({ path: "/login" });
    }
    next();
  } else {
    if (to.fullPath === "/login") {
      next({ path: "/" }); // TODO 地址变为/login不会调回来
    } else {
      // 重置路由表
      //判断是否有动态添加的路由，有才添加路由
      if (
        store.getters.addRouters === null ||
        store.getters.addRouters.length === 0
      ) {
        //动态添加的路由在router.options中没有，是vue故意的
        store.dispatch("GenerateRoutes").then(res => {
          // console.log(store.getters.addRouters)
          router.addRoutes(store.getters.addRouters);
          next({ ...to, replace: true });
        });
      }
    }
    next();
  }
});
router.afterEach(() => {
  // NProgress.done();
});

export default router;
