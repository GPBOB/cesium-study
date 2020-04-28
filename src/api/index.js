let api_files = require.context("./apiUrl", false, /\.js$/)
let apiUrls = []
api_files.keys().forEach((el) => {
  for (let key in apiFile(el).default) {
    apiUrls[key] = apiFile(el).default[key]
  }
})
return apiUrls
