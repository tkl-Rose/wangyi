<template>
  <div class="cart-box">
    <!--头部-->
    <div class="simple-header">
      <img class="category-img" src="../Category/image/26.png" alt="" />
      <div class="simple-header-name">购物车</div>
      <img class="category-img1" src="../Cart/image/25.png" alt="" />
    </div>

    <!--中间部分-->
    <div class="empty">
      <img src="../Cart/image/26.png" alt="" />
      <div class="tltle">购物车空空如也</div>
      <van-button class="van-button" type="primary" @click="rout"
        >前往首页</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  methods: {
    rout() {
      this.$router.replace("../Home");
     
    },
  },
};
</script>

<style lang="less" scoped>
.cart-box {
  width: 375px;
  height: auto;
}
.simple-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdcdc;
}
.category-img {
  width: 18px;
  height: 18px;
  margin-left: 10px;
}
.simple-header-name {
  font-size: 15px;
}
.category-img1 {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}
.empty {
  width: 50%;
  margin: 0 auto;
  margin-top: 150px;
  text-align: center;
}
.tltle {
  font-size: 18px;
  font-weight: 400;
}
.van-button {
  width: 187px;
  height: 44px;
  background-color: #1baeae;
}
</style>
