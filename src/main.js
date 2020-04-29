import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import config from "@/config";
import https from "@/api";
import "ant-design-vue/dist/antd.css";
import localStore from "storejs";

Vue.use(Antd);

Vue.config.productionTip = false;

Vue.prototype.$config = config;
Vue.prototype.$https = https;
Vue.prototype.$store = store;
Vue.prototype.$localStore = localStore;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
