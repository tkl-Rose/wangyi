const px2rem = require("postcss-px2rem");
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [px2rem({
          remUnit: 375 / 10
        })], //375是设计稿宽度
      },
    },
  },
  devServer: {
    proxy: {
      "/item": {
        target: "https://m.you.163.com",
        pathRewrite: {
          "^/item": ""
        },
      },
      "/api": {
        target: "http://39.98.123.211"
      },
    },
  },
  lintOnSave: false,
}