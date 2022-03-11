<template>
  <div>
    <!--头部-->
    <div class="simple-header">
      <router-link to="Home"
        ><img class="category-img" src="../Category/image/26.png" alt=""
      /></router-link>
      <div class="simple-header-name">我的订单</div>
      <img class="category-img1" src="../Cart/image/25.png" alt="" />
    </div>
    <van-tabs
      :color="'#1baeae'"
      :title-active-color="'#1baeae'"
      class="order-tab"
    >
      <van-tab title="全部" name=""></van-tab>
      <van-tab title="待付款" name="0"></van-tab>
      <van-tab title="待确认" name="1"></van-tab>
      <van-tab title="待发货" name="2"></van-tab>
      <van-tab title="已发货" name="3"></van-tab>
      <van-tab title="交易完成" name="4"></van-tab>
    </van-tabs>
    <van-pull-refresh class="order-list-refresh">
      <div>没有更多了</div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "WorthByu",
  data() {},
};
</script>

<style lang="less" scoped>
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
.order-list-refresh {
  width: 375px;
  height: 550px;
  font-size: 15px;
  color: #969799;
  text-align: center;
  padding-top: 10px;
  background-color: #f9f9f9;
}
</style>
