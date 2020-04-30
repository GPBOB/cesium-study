//在这个文件中根路由 / 必须定义，children可自定义
const _import = require("../_import_" + process.env.NODE_ENV);

const routes = [
  {
    path: "/",
    name: "map",
    component: _import("Home"),
    redirect: "/manage",
    children: [
      {
        path: "/manage",
        name: "manage",
        component: _import("manage/index")
      }
    ]
  }
];
export default routes;
