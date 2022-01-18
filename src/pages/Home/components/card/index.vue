<template>
  <div class="card">
    <!-- header -->
    <van-swipe indicator-color="#ffffff" class="swiperHeader" :autoplay="3000">
      <van-swipe-item
        v-for="(image, index) in cardBannerList"
        :key="image.picUrl"
      >
        <img class="itemImg" :src="image.picUrl" />
      </van-swipe-item>
    </van-swipe>
    <!-- main -->
    <div
      class="main"
      v-for="(item, index) in cardCategoryItemList"
      :key="index"
      @click="toDetail"
    >
      <div class="mainItem">
        <div class="itemHeader">
          <span>{{ item.category.name }}</span>
          <span>{{ item.category.frontDesc }}</span>
        </div>
        <van-row class="contentList" type="flex" justify="space-between">
          <van-col
            class="contentItem"
            span="6"
            v-for="(contentItem, index) in item.itemList"
            :key="contentItem.id"
          >
            <img class="big" :src="contentItem.listPicUrl" alt="" />
            <div class="des">
              <img class="small" :src="(contentItem.promLogo||{}).logoUrl" alt="" />
              <span>{{contentItem.name}}</span>
            </div>
            <div class="price">
              <span>到手价￥</span>
              <span>{{(((contentItem.finalPriceInfoVO||{}).priceInfo||{}).finalPrice||{}).price}}</span>
              <span>{{contentItem.retailPrice}}</span>
            </div>
            <span class="promotion" v-show="((contentItem.finalPriceInfoVO||{}).banner||{}).content">{{((contentItem.finalPriceInfoVO||{}).banner||{}).content}}</span>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Card",
  data() {
    return {
      //   images: [
      //     "https://img01.yzcdn.cn/vant/apple-1.jpg",
      //     "https://img01.yzcdn.cn/vant/apple-2.jpg",
      //   ],
    };
  },
  mounted() {
    //   this.getCardData()
  },
  methods: {
    // getCardData(){
    //     this.$store.dispatch('getCardData')
    // }
    toDetail(){
        this.$router.push({
            path: '/detail'
        })
    }
  },
  computed: {
    ...mapGetters(["cardBannerList", "cardCategoryItemList"]),
  },
};
</script>
<style lang='less' scoped>
.card {
  width: 100%;
  margin-bottom: 50px;
  background: #eeeeee;
  .swiperHeader {
    width: 100%;
    height: 190px;
    .itemImg {
      width: 386px;
      height: 190px;
    }
  }
  .main {
    background: #fff;
    margin-top: 10px;
    .mainItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      .itemHeader {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 60px;
        align-items: center;
        margin-top: 10px;
        span:first-of-type {
          margin-bottom: 5px;
          font-size: 16px;
        }
        span:nth-of-type(2) {
          color: #9999a6;
        }
      }
      .contentList {
        width: 100%;
        box-sizing: border-box;
        padding: 0 10px;
        .contentItem {
          width: 50%;
          //   margin-right: 10px;
          height: 300px;
          display: flex;
          flex-direction: column;
          //   background: red;
          .big {
            width: 170px;
            height: 170px;
            border-radius: 10px;
          }
          .des {
            margin: 5px 0;
            .small {
              width: 45px;
              height: 17px;
              margin-right: 2px;
            }
          }
          .price {
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            span:nth-of-type(1) {
              font-size: 10px;
              font-weight: 900;
              color: red;
            }
            span:nth-of-type(2) {
              font-size: 20px;
              font-weight: 600;
              color: red;
            }
            span:nth-of-type(3) {
              font-size: 10px;
              color: #999999;
              text-decoration: line-through;
            }
          }
          .promotion {
            width: 76px;
            height: 20px;
            font-size: 10px;
            font-weight: 900;
            background: #fa1e32;
            text-align: center;
            line-height: 20px;
            color: #fff;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>