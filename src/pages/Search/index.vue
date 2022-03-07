<template>
  <div class="product-list-warp">
    <div class="product-list-content">
      <div class="category-header">
        <img @click="pigu" class="nbicon" src="../Search/image/26.png" alt="" />
        <div class="header-search">
          <img class="nbicon1" src="../Search/image/2.png" alt="" />
          <input
            v-model="text"
            placeholder="请输入商品名称"
            center
            clear-trigger="always"
            clearable
            @input="getRealTimeSearchList($store, text)"
            @keyup.enter="enterSearch"
            type="text"
            class="search-title"
          />
        </div>
        <span class="search-btn">搜索</span>
      </div>

      <van-tabs border type="card" color="#1baeae">
        <van-tab class="van-tab" title="推荐" name=""></van-tab>
        <van-tab class="van-tab" title="新品" name="new"></van-tab>
        <van-tab class="van-tab" title="价格" name="price"></van-tab>
      </van-tabs>
    </div>
    <!-- <van-pull-refresh class="product-list-refresh">
      <van-list finished-text="没有更多了"> </van-list>
    </van-pull-refresh> -->

    <div>123</div>
  </div>
</template>

<script>
import { debounce } from "lodash";
import { mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      isShowGoods: false,
      isActive: "",
      text: "",
      historyList: [],
      searchForm: {
        __timestamp: +new Date(),
        keyword: "",
        sortType: 0,
        descSorted: false,
        categoryId: 0,
        matchType: 0,
        floorPrice: -1,
        upperPrice: -1,
        size: 40,
        itemId: 0,
        stillSearch: false,
        searchWordSource: 1,
        needPopWindow: true,
        _stat_search: "",
      },
    };
  },
  methods: {
    pigu() {
      this.$router.replace("../Home");
    },
    //获取热门搜索数据
    getSearchdata() {
      this.$store.dispatch("getSearchdata");
    },
    //防抖函数
    getRealTimeSearchList: debounce(($store, text) => {
      const keywordPrefix = new URLSearchParams();
      keywordPrefix.append("keywordPrefix", text);
      if (text) {
        $store.dispatch("getRealTimeSearchList", keywordPrefix);
      }
    }, 300),
  },
  computed: {
    ...mapState({
      searchdata: (state) => state.search.searchdata,
      realTimeSearchList: (state) => state.search.realTimeSearchList,
    }),
  },
  mounted() {
    this.getSearchdata();
  },
};
</script>

<style lang="less" scoped>
.product-list-warp {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
}
.product-list-content {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10000;
  background: #fff;
}
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 13px;
  color: #656771;
  z-index: 10000;
}
.nbicon {
  font-family: "nbicon" !important;
  width: 20px;
  height: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}
.header-search {
  display: flex;
  align-items: center;
  width: 262px;
  height: 17px;
  line-height: 17px;
  margin: 10px 0;
  padding: 10px 0;
  color: #232326;
  background-color: #f7f7f7;
  border-radius: 50px;
}
.nbicon1 {
  font-family: "nbicon" !important;
  width: 18px;
  height: 18px;
  font-style: normal;
  padding-left: 20px;
  -webkit-font-smoothing: antialiased;
}
.search-title {
  border: none;
  font-size: 13px;
  color: #666;
  background-color: #f7f7f7;
  outline: none;
}
.search-btn {
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  padding: 0 10px;
  background-color: #1baeae;
  border-radius: 50px;
  color: #fff;
}
.van-tab {
  margin-top: 20px;
}
.product-list-refresh {
  margin-top: 20px;
}
</style>
