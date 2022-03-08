<template>
  <div>
    <!-- 搜索框 -->
    <div class="mainSearch" v-show="!isShowGoods">
      <div class="header">
        <div class="search">
          <!-- <van-icon  class="searchIcon iconfont my-icon-sousuo" /> -->
          <van-field
            v-model="text"
            placeholder="请输入商品名称"
            left-icon="https://yanxuan.nosdn.127.net/15954074352382011.png"
            center
            clear-trigger="always"
            clearable
            @input="getRealTimeSearchList($store, text)"
            @keyup.enter="enterSearch"
          />
        </div>
        <div class="searchCalcel" @click="tohome">取消</div>
      </div>

      <div class="searchList" v-show="!text">
        <!-- 搜索历史 -->
        <div class="searchNav clearfix timeSearch" v-show="historyList.length">
          <div class="searchTitle">
            <div>历史记录</div>
          </div>
          <div class="searchTag">
            <a
              v-for="history in historyList"
              :key="'his' + history.keyword"
              @click="clickHistoryTag(history)"
              >{{ history.keyword }}</a
            >
          </div>
        </div>
        <!-- 热门搜索 -->
        <div class="searchNav clearfix">
          <div class="searchTitle">
            <div>热门搜索</div>
          </div>
          <div class="searchTag">
            <a
              class="special"
              v-for="search in searchdata.hotKeywordVOList"
              :key="'hot' + search.keyword"
              @click="clickTag(search)"
              >{{ search.keyword }}</a
            >
          </div>
        </div>
      </div>
      <!-- 实时搜索 -->
      <div class="searchAutocompleteBox" v-show="text">
        <div
          class="searchAutocomplete"
          v-for="realTimeSearch in realTimeSearchList"
          :key="'rel' + realTimeSearch"
          @click="clickAutoComplete(realTimeSearch)"
        >
          <div class="inner">{{ realTimeSearch }}</div>
          <van-icon
            name="//yanxuan-static.nosdn.127.net/hxm/tetris/base-mobile/sprite/list.png"
          />
        </div>
      </div>
    </div>

    <MainResult
      v-show="isShowGoods"
      :isShowGoods.sync="isShowGoods"
      :text.sync="text"
      @enterSearch="enterSearch"
      @categoryIdPage="categoryIdPage"
    ></MainResult>
  </div>
</template>

<script>
import { debounce } from "lodash";
import { mapState } from "vuex";
import MainResult from "./components/MainResult/index.vue";
export default {
  name: "Search",
  components: { MainResult },
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
        // userhand
        // hot
        // autoComplete
        // history

        //    let searchForm = Object.assign(this.searchForm, {
        //   keyword: search.keyword,
        //   _stat_search: "userhand",
        //   __timestamp: +new Date(),
        // });
      },
    };
  },
  methods: {
    // 获取热门搜索数据
    getSearchdata() {
      this.$store.dispatch("getSearchdata");
    },

    // 防抖函数
    getRealTimeSearchList: debounce(($store, text) => {
      const keywordPrefix = new URLSearchParams();
      keywordPrefix.append("keywordPrefix", text);
      if (text) {
        $store.dispatch("getRealTimeSearchList", keywordPrefix);
      }
    }, 300),

    // 输入框的时候点击回车
    enterSearch() {
      if (this.text) {
        let obj = { keyword: this.text };
        let searchForm = {};

        let result = this.historyList.some(
          (item) => item.keyword === this.text
        );
        if (!result && this.text !== "") {
          this.historyList.push(obj);
        }
        searchForm = Object.assign(this.searchForm, obj, {
          _stat_search: "userhand",
        });
        this.$store.dispatch("getSearchPageData", searchForm);
        this.isShowGoods = true;
      }
    },

    // 点击热门搜索的时候
    clickTag(search) {
      let obj = { keyword: search.keyword };
      let result = this.historyList.some(
        (item) => item.keyword === search.keyword
      );
      let searchForm = {};
      if (!result) {
        this.historyList.push(obj);
      }
      searchForm = Object.assign(this.searchForm, obj, {
        _stat_search: "hot",
        searchWordSource: 8,
      });
      this.$store.dispatch("getSearchPageData", searchForm);
      setTimeout(() => {
        this.isShowGoods = true;
        this.text = search.keyword;
      }, 500);
    },

    //点击实时索引的词条
    clickAutoComplete(val) {
      this.text = val;
      let result = this.historyList.some((item) => item.keyword === val);
      let obj = {
        keyword: val,
      };
      let searchForm = {};
      if (!result) {
        this.historyList.push(obj);
      }
      searchForm = Object.assign(this.searchForm, obj, {
        _stat_search: "autoComplete",
      });
      this.$store.dispatch("getSearchPageData", searchForm);
      this.isShowGoods = true;
    },

    //点击历史记录时
    clickHistoryTag(history) {
      // 点击标签移到第一个
      let index = this.historyList.findIndex(
        (item) => item.keyword === history.keyword
      );
      let obj = this.historyList[index];
      this.historyList.splice(index, 1);
      this.historyList.unshift(obj);

      //发请求跳页面
      let searchForm = {};
      searchForm = Object.assign(this.searchForm, {
        keyword: history.keyword,
        _stat_search: "history",
      });
      this.$store.dispatch("getSearchPageData", searchForm);
      setTimeout(() => {
        this.isShowGoods = true;
        this.text = history.keyword;
      }, 500);
    },

    // 页面发送请求
    categoryIdPage(obj) {
      let searchForm = Object.assign(this.searchForm, obj);
      this.$store.dispatch("getSearchPageData", searchForm);
    },

    // 点击取消跳转到首页
    tohome() {
      this.$router.push("/");
    },
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
  watch: {
    text: {
      handler(newval) {
        if (!newval) {
          this.$store.commit("CLEAR_REALTIMESEARCHLIST");
        }
      },
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
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

.searchList {
  background-color: #eee;
}

.timeSearch {
  margin-bottom: 10px;
}

.searchList .searchNav {
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px 15px;
  background-color: white;
}

.searchList .searchNav .searchTitle {
  font-size: 14px;
  color: #999;
  height: 45px;
  display: flex;
  align-items: center;
}

.searchList .searchNav .searchTitle div {
  line-height: 21px;
}

.searchList .searchNav .searchTag a {
  float: left;
  box-sizing: border-box;
  border: 1px solid #999;
  border-radius: 4px;
  font-size: 12px;
  padding: 0 7.5px;
  margin: 0 16px 16px 0;
  line-height: 23px;
  &:active {
    background-color: #999;
  }
}

.searchList .searchNav .searchTag .special {
  &:first-child {
    border: 1px solid red;
  }
  &:first-child:active {
    background-color: red;
  }
}

.searchAutocomplete {
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  justify-content: space-between;
  height: 52px;
  padding: 0 10px 0 15px;
}

.searchAutocomplete:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 45px;
  left: 15px;
  background-color: #ddd;
  width: 100%;
  height: 1px;
}

.searchAutocomplete .inner {
  font-size: 14px;
  color: rgb(51, 51, 51);
}

.searchAutocomplete /deep/ .van-icon__image {
  width: 25px;
  height: 25px;
}
</style>
