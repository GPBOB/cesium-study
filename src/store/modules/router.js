import { asyncRouterMapGetter, constantRouterMap } from "@/router";
import _ from "lodash";

const routerStore = {
  state: {
    addRouters: [],
    routers: []
    // routers: constantRouterMap
  },
  getters: {
    addRouters: state => state.addRouters,
    routers: state => state.routers
  },
  mutations: {
    setRouters(state, router) {
      state.addRouters = _.cloneDeep(router);
      state.routers = _.cloneDeep(constantRouterMap.concat(router));
    }
  },
  actions: {
    /**
     * 注册动态路由
     * @param {*} role 角色权限
     */
    GenerateRoutes({ commit }, role) {
      return new Promise(resolve => {
        // eslint-disable-next-line no-console
        //如果有多个角色可以在此添加
        // if (role == 5) {
        commit("setRouters", asyncRouterMapGetter);
        // }

        resolve(asyncRouterMapGetter);
      });
    }
  }
};
export default routerStore;
