// 2. 引入并声明使用插件
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './routes';

//解决router的3.1.0版本的重复点击按钮报错的问题
// 原型上修改push方法
const originPush = VueRouter.prototype.push; // 先将之前的存储到一个变量当中
const originReplace = VueRouter.prototype.replace; // 同上

// 修改VueRouter原型上的push 用于解决重复跳转时报错的问题
VueRouter.prototype.push = function (location, okCallBack, errCallBack) {
  if (okCallBack === undefined && errCallBack === undefined) {
    // 上面的判断成立的话，表示没有传递这两个参数
    originPush.call(this, location).catch(() => {}); // 统一处理报错的问题 一劳永逸
  } else {
    originPush.call(this, location, okCallBack, errCallBack);
  }
};

// 修改VueRouter原型上的replace 用于解决重复跳转时报错的问题
VueRouter.prototype.replace = function (location, okCallBack, errCallBack) {
  if (okCallBack === undefined && errCallBack === undefined) {
    // 上面的判断成立的话，表示没有传递这两个参数
    originReplace.call(this, location).catch(() => {}); // 统一处理报错的问题 一劳永逸
  } else {
    originReplace.call(this, location, okCallBack, errCallBack);
  }
};

// 3. 创建路由实例并添加路由规则
const router = new VueRouter({
  mode: 'history', // 设置路由模式  不要#
  routes,
  //切换到新的路由的时候 期望滚动到的位置
  scrollBehavior(to, from, savedPosition) {
    //回到上一个页面 页面位置在顶部
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

//导出路由实例
export default router;
