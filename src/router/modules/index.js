// webpack导出所有路由
let routeFile = require.context("/", false, /\.js$/);
let routes = [];
routeFile.keys().forEach(el => {
  if (el !== "./index.js") {
    routes = routes.concat(routeFile(el).default);
  }
});
export default routes;
