<template>
  <div id="app">
    <!--头部部分-->
    <van-sticky>
      <div class="header">
        <div class="logo">
          <van-icon name="comment-o" />
        </div>
        <div class="headerSearch">
          <span class="headerle">淘特商城</span>
          <div @click="goIn" class="search-title">买一件送老婆</div>
        </div>
        <div class="login">登录</div>
      </div>
    </van-sticky>

    <!--轮播图-->
    <van-swipe class="my-swipe" :autoplay="4000" indicator-color="white">
      <van-swipe-item
        class="homeSwiper"
        v-for="img in homeSwiperImgList"
        :key="img.id"
      >
        <img class="imgul" v-lazy="img.imgUrl" />
      </van-swipe-item>
    </van-swipe>

    <!--分类-->
    <div class="category-list">
      <div
        class="category-ly"
        v-for="(item, index) in kingKongList"
        :key="index"
      >
        <img class="category-img" :src="item.picUrl" alt="" />
        <span class="category-text">{{ item.text }}</span>
      </div>
    </div>

    <!--新品上线-->
    <div class="good">
      <div class="good-header">新品上线</div>
      <div class="good-box">
        <div
          @click="goodRout"
          class="good-item"
          v-for="item in hotSaleList.hotSaleList.slice(2)"
          :key="item.id"
        >
          <img class="good-img" :src="item.imgUrl" alt="" />
          <div class="title">{{ item.name }}</div>
          <div class="price">￥10988</div>
        </div>
        <div @click="goodRout" class="good-item">
          <img
            class="good-img"
            src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/p50-pocket-gold.png"
            alt=""
          />
          <div class="title">华为手机就是牛逼</div>
          <div class="price">￥10988</div>
        </div>
      </div>
    </div>
    <!--热门商品-->
    <div class="good">
      <div class="good-header">热门商品</div>
      <div class="good-box">
        <div
          @click="goodRout"
          class="good-item"
          v-for="item in hotSaleList.hotSaleList.slice(0, 2)"
          :key="item.id"
        >
          <img class="good-img" :src="item.imgUrl" alt="" />
          <div class="title">{{ item.name }}</div>
          <div class="price">￥10988</div>
        </div>
        <div @click="goodRout" class="good-item">
          <img
            class="good-img"
            src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/p50-pocket-gold.png"
            alt=""
          />
          <div class="title">华为手机就是牛逼</div>
          <div class="price">￥10988</div>
        </div>
      </div>
    </div>
    <!--最新推荐-->
    <div class="good">
      <div class="good-header">最新推荐</div>
      <div class="good-box">
        <div
          @click="goodRout"
          class="good-item"
          v-for="(item, index) in vipGiftList"
          :key="index"
        >
          <img class="good-img" :src="item.picUrl" alt="" />
          <div class="title">{{ item.title }}</div>
          <div class="price">{{ item.originPrice }}</div>
        </div>
        <div @click="goodRout" class="good-item">
          <img
            class="good-img"
            src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/p50-pocket-gold.png"
            alt=""
          />
          <div class="title">华为手机就是牛逼</div>
          <div class="price">￥10988</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    goodRout() {
      this.$router.replace("../Detail");
    },
    goIn() {
      this.$router.replace("../Search");
    },
  },
  mounted() {
    this.$store.dispatch("getHomeMsg");
  },

  computed: {
    ...mapGetters([
      "homeSwiperImgList",
      "policyDescList",
      "kingKongList",
      "bigGif",
      "vipGiftList",
      "hotSaleList",
      "bottomBoxList",
    ]),
  },
};
</script>

<style lang="less" scope>
.app {
  width: 375px;
}
.header {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 375px;
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
.my-swipe .van-swipe-item {
  box-sizing: border-box;
  color: #fff;
  width: 375px;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.homeSwiper {
  width: 375px;
  height: 150px;
}
.imgul {
  width: 375px;
  height: 150px;
}
.category-list {
  box-sizing: border-box;
  width: 375px;
  height: 170px;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
}
.category-ly {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 77px;
}
.category-img {
  width: 40px;
  height: 40px;
}
.category-text {
  height: 16px;
  font-size: 13px;
  text-align: center;
  margin-top: 8px;
  margin-left: 5px;
}
.good {
  box-sizing: border-box;
  width: 375px;
}
.good-header {
  width: 100%;
  height: 50px;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  color: #1baeae;
  background-color: #f9f9f9;
}
.good-box {
  display: flex;
  flex-wrap: wrap;
  width: 375px;
  // height: 600px;
  justify-content: flex-start;
}
.good-item {
  width: 185px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #f9f9f9;
}
.good-img {
  width: 120px;
  display: block;
  margin: 0 auto;
}
.title {
  // width: 167px;
  // height: 51px;
  font-size: 13px;
  text-align: center;
}
.price {
  height: 16px;
  font-size: 13px;
  color: #1baeae;
}
</style>
