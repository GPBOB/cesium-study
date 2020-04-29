import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import map from "./modules/map";

Vue.use(Vuex);

let storeFile = require.context("./modules", false, /\.js$/);
let storeModule = {};
storeFile.keys().forEach(key => {
  let fileName = key.slice(2, -3);
  storeModule[fileName] = { ...storeFile(key).default };
});
export default new Vuex.Store({
  modules: storeModule
});
