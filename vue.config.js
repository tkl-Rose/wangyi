var px2rem = require('postcss-px2rem');
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        //这个是尚品汇基础接口
        target: 'http://39.98.123.211', //是代理到的目标地址
      },
      '/wy': {
        //这是网易严选的
        target: 'https://m.you.163.com', //是代理到的目标地址
        pathRewrite: { '^/wy': '' }, //路径重写 就是将原有的路径上的/api去掉
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [px2rem({ remUnit: 375 / 10 })], //375是设计稿宽度
      },
    },
  },
};
