import Vue from "vue";
import VueRouter from "vue-router";
const _import = require("../_import_" + process.env.NODE_ENV);

Vue.use(VueRouter);
const routes = [
  {
    path: "/login",
    name: "login",
    component: _import("commen/login")
  },
  {
    path: "/404",
    name: "404",
    component: _import("commen/404")
  }
];

export default routes;
