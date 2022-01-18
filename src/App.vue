<template>
   
  <div id="app">
     <router-view></router-view>
       
    <!-- 示例 -->
       
    <!-- <van-button class="aaa" type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button> -->
        <Tabbar></Tabbar>  
   
    
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url('./assets/reset.css');
</style>