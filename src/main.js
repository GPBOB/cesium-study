import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
import Antd from "ant-design-vue";
import config from "@/config";
import drawHelper from "@/assets/js/draw";
import "ant-design-vue/dist/antd.css";

Vue.use(Antd);

Vue.config.productionTip = false;

Vue.prototype.$config = config;
Vue.prototype.$drawHelper = drawHelper;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
