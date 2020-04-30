//示例，根据项目修改或重新创建
const _import = require("../_import_" + process.env.NODE_ENV);

const routes = [
  {
    path: "/persons",
    name: "persons",
    component: _import("Home"),
    children: [
      {
        path: "/person",
        name: "person",
        component: _import("person/index")
      }
    ]
  }
];
export default routes;
