<template>
  <div id="app">
    <!--头部-->
    <div class="simple-header">
     <router-link to="Home"><img class="category-img" src="../Category/image/26.png" alt="" /></router-link> 
      <div class="simple-header-name">商品详情</div>
      <img class="category-img1" src="../Cart/image/25.png" alt="" />
    </div>
    <!--中间部分-->
    <div @click="gotoLIst">
      <img
        class="van-swiper-wrap"
        src="	https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/p50-pocket-gold.png"
        alt=""
      />
    </div>

    <div class="baseInfoContainer">
      <div class="baseInfo">
        <div class="info">
          <div class="name">多功能人体工学转椅 办公椅</div>
          <div class="simpleBrandInfo">
            <div class="preLogo">自营</div>
            <img
              class="brandLogo"
              src="http://localhost:8082/img/goodsLogo.39f24331.jpg"
              alt=""
            />
            <span class="title">BXS</span>
          </div>
          <div class="desc">推荐理由</div>
        </div>

        <div class="commit">
          <div class="wrap">查看评价</div>
          <img src="../Detail/image/27.png" alt="" />
        </div>
      </div>
    </div>

    <div class="recommendBanner">
      <ul>
        <li class="recommt">
          <div class="key">1</div>
          <div class="recommendReason">撑腰护颈，舒适就坐了一整天</div>
        </li>
        <li class="recommt">
          <div class="key">1</div>
          <div class="recommendReason">撑腰护颈，舒适就坐了一整天</div>
        </li>
        <li class="recommt">
          <div class="key">1</div>
          <div class="recommendReason">撑腰护颈，舒适就坐了一整天</div>
        </li>
      </ul>
    </div>

    <!--配送区域-->
    <div class="distributionMode">
      <div class="postage">
        <ul>
          <li class="fistItem">
            <div class="left">
              <span>邮费:&nbsp;</span>
              <span>满99包邮</span>
            </div>
            <img src="../Detail/image/27.png" alt="" />
          </li>
          <li class="fistItem">
            <div class="left">
              <span>促销</span>:&nbsp;</span>
              <span>超值换购</span>
            </div>
            <img src="../Detail/image/27.png" alt="" />
          </li> 
          <li class="fistItem">
            <div class="left">
              <span>购物返</span>:&nbsp;</span>
              <span>超值</span>
            </div >
           <img src="../Detail/image/27.png" alt="" />
          </li>
        </ul>
      </div>

     <div class="van-text">
       <img class="van-image" src="../Detail/image/detail_bottom_logo.c546bc21.png" alt="">
     </div>
    </div>
     
     <!--底部tabar-->
     <div class="van-goods-action">
        <div class="van-goods-action-icon">
         <van-icon name="chat-o" />
         <span class="text">客服</span>
        </div>

        <div class="van-goods-action-icon1">
           <img class="image" src="../Detail/image/3.png" alt="">
           <span class="text">购物车</span>
        </div>
         
         <div class="van-goods-good">
        <van-button class="first" type="primary" size="normal">加入购物车</van-button> 
        <van-button class="togoBot" type="primary" size="normal">立即购买</van-button>
         </div>
       

     </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Detail",
  
  mounted() {
   this.$store.dispatch(getShopCartList)
  },
  computed:{
    ...mapGetters([
      "cartList"
    ])
  }
};
</script>

<style lang="less" scoped>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
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
.van-swiper-wrap {
  width: 375px;
  height: 378px;
}
.baseInfoContainer {
  padding: 20px 0 0 20px;
  box-sizing: border-box;
  width: 375px;
}
.baseInfo {
  display: flex;
  margin-top: 20px;
  // width: 360px;
  height: 100px;
}
.info {
  width: 259px;
  height: 100px;
}
.name {
  font-weight: 700;
  color: #333333;
  font-size: 18px;
}
.simpleBrandInfo {
  display: flex;
  align-items: center;
  width: 259px;
  height: 28px;
}
.preLogo {
  width: 52px;
  height: 16px;
  color: #f8b4b6;
  font-size: 5px;
  border-radius: 20px;
  text-align: center;
  line-height: 16px;
  background-color: #fa5258;
  margin-right: 5px;
}
.brandLogo {
  width: 14px;
  height: 14px;
  margin-right: 5px;
}
.title {
  font-size: 10px;
  color: #7f7f7f;
}
.desc {
  font-size: 13px;
  color: #929292;
}
.commit {
  width: 89px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrap {
  width: 70px;
  height: 20px;
  padding-left: 5px;
  font-size: 15px;
}
.recommendBanner {
  display: flex;
  align-items: center;
  width: 320px;
  height: 70px;
  padding: 20px 10px 10px 10px;
  margin-left: 12px;
  border: 1px solid #eeeeee;
  position: relative;
}
.recommt {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
}
.key {
  width: 14px;
  height: 14px;
  border: 1px solid #dd1a21;
  border-radius: 50%;
  text-align: center;
  line-height: 14px;
  font-size: 10px;
  color: #dd1a21;
  font-weight: 700;
  margin-right: 5px;
  vertical-align: middle;
}
.recommendReason {
  height: 12px;
  line-height: 12px;
  vertical-align: middle;
  font-size: 10px;
}
.distributionMode {
  width: 375px;
  height: 320px;
}
.postage {
  width: 375px;
  height: 156px;
}
.fistItem {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  border-bottom: 1px solid #ececec;
  align-items: center;
  font-size: 16px;
  width: 345px;
  height: 52px;
  position: relative;
}
.left {
  display: flex;
  width: 107px;
  height: 22px;
  justify-content: space-between;
}
.second {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  border-bottom: 1px solid #ececec;
  align-items: center;
  font-size: 13px;
  width: 345px;
  height: 52px;
  position: relative;
}
.van-text{
  width: 375px;
  height: 100px;
  border-top: 8px solid #ececec;
}
.van-image{
  position: relative;
  display: inline-block;
  margin-left: 8px;
  width: 360px;
  height: 100px;
  // margin-top: 20px;
}
.van-goods-action{
  margin-left: 5px;
  width: 100%;
  position: fixed;
  justify-content: space-between;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #fff;
   
}
.van-goods-action-icon{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  line-height: 1;
  text-align: center;
  height: 100%;
  background-color: #fff;
  cursor: pointer;
}
.text{
  margin-top: 8px;
}
.van-goods-action-icon1{
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  line-height: 1;
  text-align: center;
  height: 100%;
  background-color: #fff;
  cursor: pointer;
}
.image{
  width: 15px;
  height: 15px;
}
.van-goods-good{
  width: 285px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 50px;
  height: 50px;
  text-align: center;
  margin-left: 10px;
}
.first{
  width: 134px;
  height: 40px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-image: linear-gradient(to right, #64d4d4 , #24b3b3);
}
.togoBot{
  position: relative;
  left: -10%;
  width: 134px;
  height: 40px;
  margin-left: 15px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-image: linear-gradient(to right, #24b3b3 , #64d4d4);
 
}

</style>
