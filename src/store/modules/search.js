import {
  getSearchdata,
  getRealTimeSearchList,
  getSearchPageData,
} from "@/api/search";

const state = {
  searchdata: {},
  realTimeSearchList: [],
  searchHomeData: {},
};
const mutations = {
  SET_SEARCHDATA(state, payload) {
    state.searchdata = payload.data;
  },

  SET_REALTIMESEARCHLIST(state, payload) {
    state.realTimeSearchList = payload.data;
  },

  CLEAR_REALTIMESEARCHLIST(state, payload) {
    state.realTimeSearchList = "";
  },

  SET_SEARCHPAGEDATA(state, payload) {
    state.searchHomeData = payload.data;
  },
};
const actions = {
  // 获取热门搜索数据
  async getSearchdata({
    commit
  }) {
    const result = await getSearchdata();
    commit("SET_SEARCHDATA", result);
  },

  //获取实时输入框索引
  async getRealTimeSearchList({
    commit
  }, keywordPrefix) {
    const result = await getRealTimeSearchList(keywordPrefix);
    commit("SET_REALTIMESEARCHLIST", result);
  },

  // 获取搜索的页面数据
  async getSearchPageData({
    commit
  }, searchForm) {
    const result = await getSearchPageData(searchForm);
    console.log(result);
    commit("SET_SEARCHPAGEDATA", result);
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};