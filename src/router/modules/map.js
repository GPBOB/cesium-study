//示例，根据项目修改或重新创建
const _import = require("../_import_" + process.env.NODE_ENV);

const routes = [
  {
    path: "/",
    name: "Home",
    component: _import("Home"),
    redirect: "/menu",
    children: [
      {
        path: "/menu",
        name: "menu",
        component: _import("home/menu")
      },
      {
        path: "/study_one",
        name: "study_one",
        component: _import("study_one")
      }
    ]
  }
];
export default routes;
