<template>
  <div id="app">
    <!--头部-->
    <div class="simple-header">
      <router-link to="Home"
        ><img class="category-img" src="../Category/image/26.png" alt=""
      /></router-link>
      <div class="simple-header-name">我的</div>
      <img class="category-img1" src="../Cart/image/25.png" alt="" />
    </div>

    <!--颈部-->
    <div class="user-info">
      <img
        class="user-img"
        src="	http://s.weituibao.com/1583583975067/user-graduate%20(1).png"
        alt=""
      />

      <div class="user-desc">
        <span>昵称:我是你爸爸</span>
        <span>登录名:我是你爸爸</span>
        <span>个性签名:我是你爸爸真开心</span>
      </div>
    </div>

    <!--订单页-->
    <div class="user-list">
      <div @click="togoods" class="user-into">
        <span>我的订单</span>
        <img class="img" src="../Detail/image/27.png" alt="" />
      </div>

      <div class="user-into">
        <span>账号管理</span>
        <img class="img" src="../Detail/image/27.png" alt="" />
      </div>
      <div class="user-into">
        <span>地址管理</span>
        <img class="img" src="../Detail/image/27.png" alt="" />
      </div>
      <div class="user-into">
        <span>关于我们</span>
        <img class="img" src="../Detail/image/27.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Center",
  methods: {
    togoods() {
      this.$router.push("../WorthBuy");
    },
  },
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
.user-info {
  width: 352px;
  height: 110px;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  box-sizing: border-box;
  background-image: linear-gradient(to right, #1cafaf, #45c1c1);
  margin: 10px 10px 0 12px;
  border-radius: 9px;
  .user-img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
}
.user-desc {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  line-height: 26px;
  font-size: 13px;
  color: #fff;
}
.user-list {
  padding: 0 20px;
  margin-top: 10px;
  height: 164px;
}
.user-into {
  display: flex;
  justify-content: space-between;
  width: 335px;
  height: 41px;
  line-height: 41px;
  border-bottom: 1px solid #e9e9e9;
  font-size: 13px;
  align-items: center;
  .img {
    width: 14px;
    height: 14px;
  }
}
</style>
