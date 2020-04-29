let apiFile = require.context("./apiUrl", false, /\.js$/);
let apiUrls = [];
apiFile.keys().forEach(el => {
  for (let key in apiFile(el).default) {
    apiUrls[key] = apiFile(el).default[key];
  }
});
export default apiUrls;
