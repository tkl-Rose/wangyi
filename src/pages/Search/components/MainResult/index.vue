<template>
  <div class="mainResult">
    <div class="header">
      <div class="search">
        <!-- <van-icon  class="searchIcon iconfont my-icon-sousuo" /> -->
        <van-field
          v-model="maintext"
          placeholder="请输入商品名称"
          left-icon="https://yanxuan.nosdn.127.net/15954074352382011.png"
          center
          clearable
          clear-trigger="always"
          @clear="clearInput"
          @keyup.enter="enterSearch"
          @focus="inputFocus"
          @blur="isShowCalcel = false"
        />
      </div>
      <div class="searchCalcel" v-show="isShowCalcel" @click="clickCancel">
        取消
      </div>
    </div>
    <div class="mainResultNav" v-show="!isShowCalcel" @click="changeNav">
      <div id="Nav1" :class="{ active: isNav === 'Nav1' }" @click="clickALL">
        综合
      </div>
      <div :class="{ active: isNav === 'Nav2' }">
        <div id="Nav2">价格</div>
        <div class="iconDiv">
          <van-icon
            class="iconfont my-icon-xiangshang"
            :class="{ active: isPrice === 'low' }"
          />
          <van-icon
            class="iconfont my-icon-xiangxia"
            :class="{ active: isPrice === 'up' }"
          />
        </div>
        <div class="priceBox" v-show="isShowPrice">
          <div class="top">
            <span>筛选</span>
            <input type="text" placeholder="最低价" v-model="lowPrice" />
            <span class="line"></span>
            <input type="text" placeholder="最高价" v-model="highPrice" />
          </div>
          <div class="center">
            <span>排序</span>
            <div
              :class="{ active: descSorted }"
              id="low"
              @click="clickPriceOrder"
            >
              从低到高
            </div>
            <div
              :class="{ active: !descSorted && descSorted !== '' }"
              id="up"
              @click="clickPriceOrder"
            >
              从高到低
            </div>
          </div>
          <div class="bottom">
            <div @click="clickPriceCancel">取消</div>
            <div @click="priceConfirm">确定</div>
          </div>
        </div>
      </div>
      <div
        id="Nav3"
        @click.self="clickCategory"
        :class="{ active: isNav === 'Nav3' }"
      >
        分类

        <div
          class="categoryBox"
          v-show="isShowCategoryList"
          @click="isShowCategoryList = false"
        >
          <span
            :class="{ active: category.id === categoryId }"
            v-for="category in searchHomeData.categoryL1List"
            :key="category.id"
            @click="clickCategoryTag(category.id)"
            >{{ category.name }}</span
          >
        </div>
      </div>
      <div class="block" v-show="isShowCategoryList" @click="clickBlock"></div>
    </div>
    <div class="mainList" v-show="!isShowCalcel">
      <div
        class="mainItem"
        v-for="item in searchHomeData.directlyList"
        :key="item.id"
      >
        <div class="itemImg">
          <van-image
            class="img"
            width="100%"
            height="172.5px"
            :src="item.listPicUrl"
          />
        </div>
        <div class="itemTitle">
          <img
            src="https://yanxuan.nosdn.127.net/static-union/1640835741e1f775.png"
            alt=""
          />
          <span>{{ item.name }}</span>
        </div>
        <div class="itemPrice">
          <span>¥</span>
          <span>{{ item.retailPrice }}</span>
          <span>¥</span>
          <span>{{ item.finalPriceInfoVO.priceInfo.counterPrice }}</span>
        </div>
        <div class="itemContent">
          <div class="contentLeft">
            {{
              item.finalPriceInfoVO.banner
                ? item.finalPriceInfoVO.banner.content
                : "最后特价"
            }}
          </div>
          <span class="contentRight"> </span>
        </div>
      </div>
    </div>
  </div>
</template>
descSorted: false
<script>
import { mapState } from "vuex";
export default {
  name: "MainResult",
  props: ["text"],
  data() {
    return {
      isPrice: "",
      categoryId: 0,
      maintext: "",
      isShowCalcel: false,
      isShowCategoryList: false,
      isNav: "Nav1",
      isShowPrice: false,
      descSorted: "",
      lowPrice: "",
      highPrice: "",
    };
  },
  methods: {
    //点击价格中的取消
    clickPriceCancel() {
      this.isShowPrice = false;
      this.descSorted = "";
      this.lowPrice = "";
      this.highPrice = "";
    },

    // 点击分类
    clickCategory() {
      this.isShowCategoryList = true;
      document.body.style.overflow = "hidden";
    },

    //   清除输入框
    clearInput() {
      this.$emit("update:isShowGoods", false);
      this.$emit("update:text", "");
      this.maintext = "";
      this.isShowCategoryList = false;
      this.isShowCalcel = false;
      document.body.style.overflow = "visible";
    },

    // 回车确定
    enterSearch() {
      this.$emit("update:text", this.maintext);
      this.$emit("enterSearch");
      this.maintext = "";
      this.isShowCategoryList = false;
      this.isShowCalcel = false;
      document.body.style.overflow = "visible";
    },

    // input框获得焦点时
    inputFocus() {
      this.isShowCalcel = true;
      this.isShowCategoryList = false;
      document.body.style.overflow = "visible";
    },

    // 点击取消的时候
    clickCancel() {
      this.isShowCalcel = false;
      this.isShowCategoryList = false;
      document.body.style.overflow = "visible";
    },

    //点击蒙版时
    clickBlock() {
      this.isShowCategoryList = false;
      document.body.style.overflow = "visible";
    },

    // 切换导航
    changeNav(e) {
      if (e.target.id === "Nav1") {
        this.isNav = "Nav1";
        this.isShowCategoryList = false;
        this.isShowPrice = false;
        document.body.style.overflow = "visible";
      } else if (e.target.id === "Nav2") {
        this.isNav = "Nav2";
        this.isShowCategoryList = false;
        document.body.style.overflow = "visible";
        if (this.isShowPrice) {
          this.isShowPrice = false;
          this.descSorted = "";
          this.lowPrice = "";
          this.highPrice = "";
        } else {
          this.isShowPrice = true;
        }
      } else if (e.target.id === "Nav3") {
        this.isShowPrice = false;
        this.isNav = "Nav3";
      }
    },

    // 点击分类子按钮
    clickCategoryTag(id) {
      if (!id) {
        id = 0;
      }
      this.categoryId = id;
      this.$emit("categoryIdPage", {
        keyword: this.searchHomeData.directOrginQuery,
        categoryId: id,
      });
      document.body.style.overflow = "visible";
      this.isShowCategoryList = false;
    },

    // 点击综合
    clickALL() {
      this.categoryId = 0;
      this.$emit("categoryIdPage", {
        keyword: this.searchHomeData.directOrginQuery,
        categoryId: 0,
      });
    },

    // 点击价格从..到..
    clickPriceOrder(e) {
      if (this.descSorted === "") {
        if (e.target.id === "up") {
          this.descSorted = false;
        } else if (e.target.id === "low") {
          this.descSorted = true;
        }
      } else {
        if (e.target.id === "up") {
          this.descSorted = this.descSorted ? false : "";
        } else if (e.target.id === "low") {
          this.descSorted = this.descSorted ? "" : true;
        }
      }
    },

    // 价格中的确定按钮
    priceConfirm() {
      if (this.descSorted) {
        this.isPrice = "low";
      } else if (this.descSorted === "") {
        this.isPrice = "";
      } else {
        this.isPrice = "up";
      }
      let descSorted = this.descSorted;
      this.$emit("categoryIdPage", {
        __timestamp: +new Date(),
        descSorted: !descSorted,
        categoryId: this.categoryId,
        keyword: this.searchHomeData.directOrginQuery,
        floorPrice: this.lowPrice || -1,
        upperPrice: this.highPrice || -1,
        sortType: 1,
      });
    },
  },
  computed: {
    ...mapState({
      searchHomeData: (state) => state.search.searchHomeData || {},
    }),
  },
  watch: {
    text: {
      handler(val) {
        this.maintext = val;
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 375px;
  height: 44px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 15px;
}
.header .search {
  height: 28px;
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #f4f4f4;
  padding: 0 10px;
}

.header /deep/ .van-icon__image {
  margin-top: 50%;
  transform: translateY();
  width: 14.5px;
  height: 14px;
}

.header /deep/ .van-cell {
  background-color: transparent;
  border: 0px;
  padding: 0;
}

.header /deep/ .van-icon {
  margin-right: 4px;
}

.header /deep/ .van-field__control::placeholder {
  color: #999999;
}

.header .searchCalcel {
  font-size: 14px;
  line-height: 21px;
  margin-left: 15px;
}
.mainResult .mainResultNav {
  position: relative;
  display: flex;
  font-size: 14px;
  background-color: #fafafa;
  border-bottom: 2px solid #ddd;
  box-sizing: border-box;
}

.mainResult .mainResultNav > div {
  width: 33.333%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  &.active {
    color: red;
  }
}

.mainResult .mainResultNav > div:nth-child(2) {
  display: flex;
  align-items: center;
  justify-content: center;
  .iconDiv {
    display: flex;
    flex-direction: column;
    margin-top: -2px;
    width: 10px;
    .iconfont {
      height: 7px;
      font-size: 6px;
      transform: scale(0.6);
      color: #999;
      &:last-child {
        &.active {
          color: red;
        }
      }
      &:first-child {
        &.active {
          color: red;
        }
      }
    }
  }
  .priceBox {
    color: #111;

    z-index: 999;
    top: 44px;
    left: 0;
    height: 160px;
    position: absolute;
    width: 100%;
    height: 200px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .top {
      display: flex;
      align-items: center;
      justify-content: space-around;
      span {
        font-size: 13px;
      }
      .line {
        width: 10px;
        height: 1px;
        background-color: #000;
      }
      input {
        height: 23px;
        width: 100px;
        border: 1px solid #333;
      }

      input:focus {
        border: 1px solid red;
      }
    }
    .center {
      display: flex;
      align-items: center;
      span {
        margin: 0 15px 0 19px;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 20px;
        border: 1px solid #000;
        height: 27px;
        width: 100px;
        margin: 0 10px;
        &.active {
          border: 1px solid red;
        }
      }
    }
    .bottom {
      display: flex;
      div {
        width: 50%;
        box-sizing: border-box;
        border: 1px solid #333;
        &:first-child {
        }
        &:last-child {
          color: red;
        }
      }
    }
  }
}
.mainResult .mainResultNav div:nth-child(2) img {
  width: 18px;
  height: 18px;
}

.mainResult .mainResultNav div:last-child {
  &.categoryBox {
    box-sizing: border-box;
    z-index: 99;
    position: absolute;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 150px;
    bottom: -152px;
    left: 0;
    padding: 20px 32.5px;
    overflow: auto;
    span {
      height: 26px;
      padding: 0 8.5px;
      border: 1px solid #999999;
      line-height: 26px;
      margin: 1px 20px 20px 1px;
      color: #111;
      &.active {
        border: 1px solid red;
      }
    }
  }
  &.block {
    width: 100%;
    z-index: 999;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    top: 190px;
    left: 0;
    height: 100vh;
  }
}

.mainList {
  box-sizing: border-box;
  padding: 10px 0 25px 0;
  display: flex;
  flex-wrap: wrap;
  .mainItem {
    box-sizing: border-box;

    width: 50%;
    &:nth-child(odd) {
      padding: 0 5px 26px 10px;
    }
    &:nth-child(even) {
      padding: 0 10px 26px 5px;
    }
    .itemImg {
      /deep/ .van-image__img {
        border-radius: 8px;
      }
    }
    .itemTitle {
      font-size: 15px;
      line-height: 22.5px;
      height: 46px;
      display: -webkit-box;
      -webkit-line-clamp: 2; /*数字是几就显示几行*/
      -webkit-box-orient: vertical;
      overflow: hidden;
      img {
        width: 44px;
        height: 17px;
        margin-right: 5px;
      }
      span {
        height: 40px;
      }
    }
    .itemPrice {
      height: 30px;
      display: flex;
      align-items: center;
      span {
        &:nth-child(1) {
          padding-top: 5px;
          font-size: 12px;
          font-weight: 700;
          color: rgb(250, 30, 50);
        }
        &:nth-child(2) {
          font-size: 20px;
          line-height: 30px;
          font-weight: 700;
          color: rgb(250, 30, 50);
          margin-right: 2px;
        }
        &:nth-child(3) {
          padding-top: 5px;
          line-height: 18px;
          color: rgb(153, 153, 153);
          font-size: 12px;
        }
        &:nth-child(4) {
          padding-top: 5px;
          color: rgb(153, 153, 153);
          line-height: 18px;
          font-size: 12px;
          text-decoration: line-through;
        }
      }
    }
    .itemContent {
      display: flex;
      align-items: center;
      height: 23px;
      background-color: #ffe9eb;
      border-radius: 11.5px;
      .contentLeft {
        height: 15px;
        font-size: 12px;
        font-weight: 600;
        color: white;
        line-height: 15px;
        margin-left: 2px;
        border-radius: 7.5px;
        padding: 2px 6px;
        background-color: #fa1e32;
      }
      .contentRight {
        margin-left: 4px;
        font-size: 12px;
        font-weight: 700;
        color: rgb(250, 30, 50);
      }
    }
  }
}
</style>
