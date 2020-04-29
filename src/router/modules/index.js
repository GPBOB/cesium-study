let routeFile = require.context("/", false, /\.js$/);
let routes = [];
routeFile.keys().forEach(el => {
  for (let key in routeFile(el).default) {
    routes[key] = routeFile(el).default[key];
  }
});
export default routes;
