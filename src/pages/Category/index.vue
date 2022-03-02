<template>
  <div class="category">
    <!--头部-->

    <div class="category-header">
      <img class="category-img" src="../Category/image/26.png" alt="" />
      <div class="header-search">
        <img class="category-img" src="../Category/image/24.png" alt="" />
        <span class="category-text">今晚全场林公子请客</span>
      </div>
    </div>
    <!--侧边栏-->
    <div class="search-wrap">
      <div class="left">
        <van-sticky>
          <van-sidebar class="scroll-wrapper" v-model="activeKey">
            <van-sidebar-item
              :title="c1.name"
              v-for="c1 in category1Id"
              :key="c1.id"
              @click="getindex(c1.id)"
            />
          </van-sidebar>
        </van-sticky>
      </div>

      <div class="right">
        <div class="top">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item
              class="my-swipeimg"
              v-for="c3 in Imgdata"
              :key="c3.id"
              ><img :src="c3.picUrl" alt="" class="Img"
            /></van-swipe-item>
          </van-swipe>
        </div>
        <div class="rightcategorylist">
          <div
            class="listitem"
            v-for="c2 in category2Id"
            :key="c2.id"
            @click="toGoodsList(c2)"
          >
            <div class="listImg">
              <van-image
                width="80"
                height="80"
                lazy-load
                :src="c2.wapBannerUrl"
              />
            </div>
            <div class="listtitle">{{ c2.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      value: "",
      activeKey: "",
      currentIndex: "", //用来存储id
      isShow: true,
      isLock: true,
    };
  },
  mounted() {
    this.getCategoryList(11);
    // this.getCategorymainList();
  },
  methods: {
    getCategoryList(id) {
      this.$store.dispatch("getCategorymainList", id);
    },
    getindex(id) {
      this.$store.dispatch("getCategorymainList", id);
    },
    //点击拿到三个参数重新发请求数据 并跳转
    toGoodsList(category2Id) {
      let allId = {
        categoryType: category2Id.categoryType,
        subCategoryId: category2Id.id,
        categoryId: category2Id.superCategoryId,
      };
      this.$store.dispatch("getGoodsList", allId);
      //console.log("一级分类", allId);
      this.$router.push({
        path: "/life",
      });
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.category.categoryList,
      TreeList: (state) => state.category.TreeList,
    }),
    ...mapGetters([
      "category1Id",
      "category2Id",
      "Imgdata",
      "categoryGroupList",
      "categoryL2List",
    ]),
  },
};
</script>

<style lang="less" scoped>
.category {
  width: 100%;
  height: auto;
  top: 0;
  bottom: 0;
  margin: 0 auto;
}
.category-header {
  // position: fixed;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #999999;
}
.category-img {
  width: 16px;
  height: 16px;
}
.header-search {
  display: flex;
  align-items: center;
  width: 70%;
  height: 30px;
  line-height: 30px;
  margin: 0 50px 0 0;
  padding-left: 20px;
  border-radius: 20px;
  border: 1px solid #ffff;
  background-color: #f7f7f7;
}
.category-text {
  width: 173px;
  height: 20px;
  line-height: 20px;
  // text-align: center;
  padding-bottom: 2px;
  font-size: 13px;
  padding-left: 10px;
}
.search-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 375px;
  height: 1000px;
}
.scroll-wrapper {
  height: 100%;
  overflow: hidden;
}
.right {
  width: 260px;
  margin-left: 15px;
}
.my-swipe .van-swipe-item {
  // height: 100px;
  // color: #fff;
  // font-size: 20px;
  // line-height: 100px;
  // text-align: center;
  // margin-top: 30px;
  // margin-bottom: 10px;
}
.Img {
  margin-top: 10px;
  width: 240px;
  height: 92px;
}

.rightcategorylist {
  display: flex;
  flex-wrap: wrap;
  width: 260px;
  height: 100%;
}
.listitem {
  height: 100px;
  margin-top: 10px;
}
.listtitle {
  font-size: 12px;
  text-align: center;
}

.listImg {
  width: 100px;
  margin-left: 20px;
}
</style>
