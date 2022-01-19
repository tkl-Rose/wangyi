<template>
  <div class="box">
    <!-- 头部 -->
    <van-sticky z-index="999" id="top">
      <van-row type="flex" justify="space-between" class="header">
        <van-col span="4">
          <img class="logo" src="../../assets/wylogo.png" alt="" />
        </van-col>
        <van-col span="14" class="ipt" @click="toSearch">
          <van-icon name="search" size="18" />
          <div class="text">搜索商品,共109868款好物</div>
        </van-col>
        <van-col span="6" class="btn">登录</van-col>
      </van-row>
    </van-sticky>

    <!-- Tab -->

    <van-tabs
      sticky
      :offset-top="49"
      class="navList"
      title-active-color="#dd1a21"
       @click="changeId"
    >
      <van-tab title="推荐">
        <!-- 推荐 -->
        <div class="recommend">
          <!-- 轮播图 -->
          <van-swipe class="swiper" indicator-color="#ffffff" :autoplay="3000">
            <van-swipe-item
              v-for="(image, index) in bannerList"
              :key="image.id"
            >
              <img class="itemImg" :src="image.picUrl" />
            </van-swipe-item>
          </van-swipe>
          <!-- 保障导航 -->
          <van-row class="protectionList" type="flex" justify="space-between">
            <van-col
              class="item"
              span="8"
              v-for="(item, index) in policyDescList"
              :key="item.desc"
            >
              <img class="itemImage" :src="item.icon" alt="" />
              <div class="itemText">{{ item.desc }}</div>
            </van-col>
          </van-row>
          <!-- category -->
          <van-row class="categoryList" type="flex" justify="space-around">
            <van-col
              span="6"
              class="cateItem"
              v-for="(cate, index) in categoryList"
              :key="cate.text"
            >
              <img class="itemImage" :src="cate.picUrl" alt="" />
              <div class="itemText">{{ cate.text }}</div>
            </van-col>
          </van-row>
          <!-- discount -->
          <div class="discount">
            <img :src="discount.picUrl" alt="" />
          </div>
          <!-- newpeople -->
          <div class="newPeople">
            <div class="newHeader">-新人专享礼-</div>
            <div class="newMain">
              <div class="left">
                <span>新人专享礼包</span>
                <img
                  src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
                  alt=""
                />
              </div>
              <div class="right">
                <div class="r-top">
                  <div class="r-top-l">
                    <span class="one">{{ newPeopleList0.title }}</span>
                    <span class="two">{{ newPeopleList0.subTitle }}</span>
                  </div>

                  <img :src="newPeopleList0.picUrl" alt="" />
                </div>
                <div class="r-bottom">
                  <div class="r-bottom-l">
                    <span class="one">{{ newPeopleList1.title }}</span>
                    <span class="two">{{ newPeopleList1.tag }}</span>
                  </div>
                  <img :src="newPeopleList1.showPicUrl" alt="" />
                </div>
              </div>
            </div>
          </div>
          <!-- hotSell -->
          <div class="hotSell">
            <div class="sellHeader">{{ navModule.title }}</div>
            <div class="sellCenter">
              <div class="left" @click="toCategory">
                <div class="left-l">
                  <span class="one">{{ navList0.categoryName }}</span>
                  <span class="two"></span>
                </div>
                <img :src="navList0.picUrl" alt="" />
              </div>
              <div class="right" @click="toCategory">
                <div class="right-l">
                  <span class="one">{{ navList1.categoryName }}</span>
                  <span class="two"></span>
                </div>
                <img :src="navList1.picUrl" alt="" />
              </div>
            </div>
            <div class="sellBottom">
              <div
                class="sellBottomItem"
                v-for="(item, index) in navList.slice(2)"
                :key="item.categoryName"
                @click="toCategory"
              >
                <span>{{ item.categoryName }}</span>
                <img :src="item.picUrl" alt="" />
              </div>

              <div class="sellBottomItem compress"></div>
              <div class="sellBottomItem compress"></div>
            </div>
          </div>
          <!-- sale -->
          <div class="sale">
            <div class="left">
              <div class="text">
                <span class="one">{{ saleList0.title }}</span>
                <span class="two">{{ saleList0.desc }}</span>
              </div>
              <div class="saleImg">
                <img
                  :src="item.picUrl"
                  alt=""
                  v-for="(item, index) in (
                    saleList0.itemPicBeanList || []
                  ).slice(0, 2)"
                  :key="item.itemId"
                />
              </div>
            </div>
            <div
              class="right"
              :style="{ background: `url(${saleList1.picUrl}) ` }"
            >
              <span class="one">{{ saleList1.title }}</span>
              <span class="two">{{ saleList1.desc }}</span>
            </div>
          </div>
          <div class="footer">
            <div class="toggle">
              <span>下载APP</span>
              <span>电脑版</span>
            </div>
            <span>网易公司版权所有©1997-2022</span>
            <span>食品经营许可证:JY13301080111719</span>
          </div>
        </div>
      </van-tab>
      <van-tab
        v-for="(item, index) in cardCategoryList"
        :title="item.name"
        :key="item.id"
       
      >
        <Card ></Card>
      </van-tab>
    </van-tabs>
    <div class="toTop">
      <a href="#top">
        <img
          src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-mall-wap/assets/img/go-1d03abe0594ead4dabcf6bb70fc54966.png"
          alt=""
        />
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "./components/card/index.vue";
export default {
  name: "Home",
  data() {
    return {
      
      isShow: false,
      imglazy:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmedia.mybj123.com%2Fwp-content%2Fuploads%2F2021%2F04%2F1618365563-a14fa2166ed698f.gif&refer=http%3A%2F%2Fmedia.mybj123.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645022705&t=d6cef7450c13075941c7de1b89739fd6",
    };
  },
  components: {
    Card,
  },
  mounted() {
    this.getIndexData();
    this.getCardData(1005000);
  },
  methods: {
    getIndexData() {
      this.$store.dispatch("getIndexData");
    },
    getCardData(categoryId) {
      this.$store.dispatch("getCardData", categoryId);
    },
    toSearch() {
      this.$router.push({
        path: "/search",
        query: {
          redirect: "/home",
        },
      });
    },
    toCategory() {
      this.$router.push({
        path: "/category",
        // query:{
        //   redirect:'/home'
        // }
      });
    },
    changeId(name,title){
      // console.log(name,title);
      this.cardCategoryList.forEach(item=>{
        if(title===item.name){
          this.$store.dispatch("getCardData", item.id);
        }
        // console.log(item.id);
      })
     
    }
   
  },
  computed: {
    ...mapGetters([
      "navModule",
      "navList",
      "bannerList",
      "policyDescList",
      "categoryList",
      "floorList",
      "newPeopleList",
      "saleList",
      "cardCategoryList",
    ]),
    discount() {
      return (((this.floorList || [])[0] || {}).cells || [])[0] || {};
    },

    newPeopleList0() {
      return this.newPeopleList[0] || {};
    },

    newPeopleList1() {
      return this.newPeopleList[1] || {};
    },

    navList0() {
      return (this.navList || [])[0] || {};
    },

    navList1() {
      return (this.navList || [])[1] || {};
    },

    saleList0() {
      return (this.saleList[0] || {}).styleItem || {};
    },
    saleList1() {
      return (this.saleList[1] || {}).styleBanner || {};
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  // header
  background: #eeeeee;
  .header {
    // position:fixed;
    // top: 0;
    // left: 0;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    .logo {
      width: 74px;
      height: 22px;
    }
    .ipt {
      background: #ededed;
      height: 22px;
      margin: 0 10px 0 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #929292;
      border-radius: 5px;
      .text {
        margin-left: 5px;
      }
    }
    .btn {
      width: 40px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      color: #dd1a21;
      border: 1px solid #dd1a21;
      border-radius: 0.08rem;
    }
  }

  //Tab
  .navList {
    height: 100%;

    .recommend {
      height: 100%;
      margin-bottom: 50px;
      .swiper {
        width: 100%;
        height: 200px;
        .itemImg {
          width: 400px;
          height: 200px;
        }
      }
      .protectionList {
        padding: 20px;
        background: #fff;
        .item {
          display: flex;
          .itemImage {
            width: 18px;
            height: 18px;
            margin-right: 5px;
          }
        }
      }
      .categoryList {
        background: #fff;
        .cateItem {
          width: 20%;
          display: flex;
          flex-direction: column;
          align-items: center;
          .itemImage {
            width: 60px;
            height: 60px;
          }
          .itemText {
            margin: 5px 0 10px 0;
          }
        }
      }
      .discount {
        display: flex;
        justify-content: center;
        img {
          width: 370px;
          height: 172px;
        }
      }
      .newPeople {
        width: 100%;
        height: 300px;
        margin: 10px 0;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .newHeader {
          font-size: 16px;
          margin-bottom: 10px;
        }
        .newMain {
          // background: yellow;
          width: 350px;
          height: 230px;
          display: flex;
          justify-content: center;

          .left {
            width: 170px;
            height: 230px;
            background: #f9e9cf;
            margin-right: 10px;
            display: flex;
            flex-direction: column;
            // justify-content: center;
            // align-items: center;
            span {
              font-size: 16px;
              margin: 10px 0 20px 10px;
            }
            img {
              width: 138px;
              height: 138px;
              align-self: center;
            }
          }
          .right {
            width: 170px;
            height: 230px;
            // background: yellow;
            display: flex;
            flex-direction: column;
            align-items: center;
            .r-top {
              width: 170px;
              height: 110px;
              background: #fbe2d3;
              margin-bottom: 10px;
              display: flex;
              justify-content: space-around;
              .r-top-l {
                display: flex;
                flex-direction: column;
                margin: 10px 0 0 10px;

                .one {
                  font-size: 16px;
                }
                .two {
                  color: #7f7f7f;
                }
              }
              img {
                width: 90px;
                height: 90px;
                margin-top: 10px;
              }
            }
            .r-bottom {
              width: 170px;
              height: 110px;
              background: #f2e3d3;
              display: flex;
              justify-content: space-around;
              .r-bottom-l {
                display: flex;
                flex-direction: column;
                margin: 10px 0 0 10px;
                .one {
                  font-size: 16px;
                }
                .two {
                  width: 65px;
                  height: 18px;
                  background: #cbb693;
                  color: #fff;
                  text-align: center;
                  line-height: 18px;
                  border-radius: 3px;
                }
              }
              img {
                width: 90px;
                height: 90px;
                margin-top: 10px;
              }
            }
          }
        }
      }
      .hotSell {
        // width: 100%;
        height: 400px;
        background: #fff;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        .sellHeader {
          padding: 10px 0 20px 15px;
          align-self: flex-start;
          font-size: 16px;
        }
        .sellCenter {
          width: 350px;
          height: 106px;
          // background: yellow;
          margin-bottom: 10px;
          display: flex;
          .left {
            width: 170px;
            height: 106px;
            background: #f9f3e4;
            display: flex;
            justify-content: center;
            align-items: center;
            .left-l {
              display: flex;
              flex-direction: column;
              .two {
                width: 25px;
                height: 2px;
                background: #000;
                margin-top: 5px;
              }
            }
            img {
              width: 106px;
              height: 106px;
            }
          }
          .right {
            width: 170px;
            height: 106px;
            background: #ebeff6;
            margin-left: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            .right-l {
              display: flex;
              flex-direction: column;
              .two {
                width: 25px;
                height: 2px;
                background: #000;
                margin-top: 5px;
              }
            }
            img {
              width: 106px;
              height: 106px;
            }
          }
        }
        .sellBottom {
          width: 350px;
          height: 200px;
          // background: green;
          display: flex;
          flex-wrap: wrap;
          // justify-content: space-between;
          .sellBottomItem {
            width: 80px;
            height: 90px;
            display: flex;
            flex-direction: column;
            margin-right: 7px;
            align-items: center;
            background: #f5f5f5;
            span {
              margin: 10px 0;
              margin-bottom: 5px;
            }
            img {
              width: 64px;
              height: 64px;
            }
          }
          .compress {
            width: 64px;
            height: 64px;
            flex-shrink: 0;
            background: #fff;
          }
        }
      }
      .sale {
        width: 100%;
        height: 150px;
        background: #fff;
        margin-top: 10px;
        display: flex;
        align-items: center;
        // justify-content: center;
        .left {
          width: 175px;
          height: 140px;
          background: #f5f5f5;
          margin: 0px 5px 0 10px;
          padding: 10px;
          box-sizing: border-box;
          .text {
            display: flex;
            flex-direction: column;
            .one {
              font-size: 16px;
            }
            .two {
              color: #8037d9;
            }
          }
          .saleImg {
            display: flex;
            img {
              width: 80px;
              height: 80px;
            }
          }
        }
        .right {
          width: 175px;
          height: 140px;
          box-sizing: border-box;
          padding: 10px;
          display: flex;
          flex-direction: column;
          background: url("../../assets/3.jpg");
          .one {
            font-size: 16px;
          }
          .two {
            color: #ffb366;
          }
        }
      }
      .footer {
        width: 100%;
        height: 130px;
        background: #414141;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span {
          color: #ccc;
        }
        .toggle {
          display: flex;
          span {
            width: 90px;
            height: 34px;
            background: #414141;
            border: 1px solid #fff;
            line-height: 34px;
            text-align: center;
            border-radius: 5px;
            margin-right: 5px;
            color: #fff;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  .toTop {
    position: fixed;
    right: 10px;
    bottom: 80px;
    a {
      img {
        width: 43px;
        height: 43px;
      }
    }
  }
}
</style>
