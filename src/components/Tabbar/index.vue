<template>
   
  <van-tabbar active-color="#ee0a24" v-model="active">
        <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>    
    <van-tabbar-item icon="apps-o">分类</van-tabbar-item>    
    <van-tabbar-item icon="smile-comment-o">值得买</van-tabbar-item>    
    <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>    
    <van-tabbar-item icon="user-o">个人</van-tabbar-item>  
  </van-tabbar>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      //active默认为tabbar-item的下标,根据下标来跳转对应的组件
      //可以为tabbar-item指定name,name就是v-model绑定的值
      active: 0,
    };
  },
};
</script>

<style>
</style>