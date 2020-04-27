// const webpack = require("webpack");
const path = require("path");

module.exports = {
  publicPath: "./",
  devServer: {
    host: "localhost",
    port: 8080,
    hotOnly: true
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    output: {
      sourcePrefix: " "
    },
    amd: {
      toUrlUndefined: true
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": path.resolve("src"),
        components: path.resolve("src/components"),
        assets: path.resolve("src/assets"),
        views: path.resolve("src/views")
      }
    }
  }
};
