import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/study_one",
        name: "study_one",
        component: () => import("views/study_one.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
