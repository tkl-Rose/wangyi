// 2. 引入并声明使用插件
import store from '@/store';
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
      return {
        x: 0,
        y: 0
      };
    }
  },
});

//路由导航守卫
router.beforeEach(async (to, from, next) => {
  //拿到token和用户的信息
  let {
    token,
    userInfo
  } = store.state.user;
  if (token) {
    //代表用户登录过
    if (to.path === "../pages/Login") {
      //token存在代表登陆过，而这个人还想去登录，不能继续登录
      next("/")
    } else {
      //已经登陆过了，但是去的不是登录页
      if (userInfo.name) {
        //判断用户信息存在不
        //如果存在，并且获取到了用户的信息
        next();
      } else {
        try {
          //登录了没有获取用户的信息
          //重新获取用户登录的信息
          await store.dispatch("getUserInfo");
          //重新获取用户信息成功后放行
          next();
        } catch (error) {
          //有token，但是拿不到用户的信息代表token过期了
          //重新跳转到登录页去获取新的token之前，先把老的token给清除掉
          store.dispatch("userLogout");
          next("../pages/Login")
        } {}
      }
    }
  } else {
    //这个用户没有登录过
    //这个时候用户想要去购物车，个人中心，就强制让他跳到登录页
    if (to.path === "../pages/Cart" || to.path === "../pages/Center") {
      next("../pages/Login")
    } else {
      //没登陆去个人中心 购物车之外的地方 放行
      next()
    }
  }
})

//导出路由实例
export default router;