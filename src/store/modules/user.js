//示例，根据项目修改或重新创建
import localStore from "storejs";
export default {
  state: {
    token: "",
    userInfo: ""
  },
  mutations: {
    setUserInfo(state, val) {
      state.userInfo = val;
      localStore.set("userInfo", val);
    },
    setToken(state, val) {
      state.token = val;
      localStore.set("token", val);
    }
  },
  actions: {}
};
