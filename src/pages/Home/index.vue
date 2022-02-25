<template>
  <div id="app">
    <!--头部部分-->
    <div class="header">
      <div class="logo">
        <van-icon name="comment-o" />
      </div>
      <div class="headerSearch">
        <span class="headerle">淘特商城</span>
        <div class="search-title">买一件送老婆</div>
      </div>
      <div class="login">登录</div>
    </div>

    <!--轮播图-->
    <Swiper></Swiper>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper";
export default {
  components: {
    Swiper,
  },
};
</script>

<style lang="less" scope>
.app {
  width: 375px;
}
.header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: #1baeae;
}
.logo {
  margin: 28px 20px 20px 10px;
  color: #fff;
}
.headerSearch {
  display: flex;
  align-items: center;
  flex: 1;
  margin-right: 10px;
  background-color: #bbe7e7;
  width: 250px;
  height: 35px;
  border-radius: 50px;
}
.headerle {
  font-size: 22px;
  margin-left: 10px;
  width: 100px;
  line-height: 35px;
  height: 35px;
  color: #5fadcf;
}

.search-title {
  width: 108px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  margin-left: 20px;
  font-weight: 400;
  color: #666666;
}
.login {
  font-size: 15px;
  margin-right: 10px;
  color: #ffff;
}
</style>
