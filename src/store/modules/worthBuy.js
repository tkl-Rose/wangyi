import {getBannerList} from '@/api/index'
const state = {
    bannerList:[]
};
const mutations = {
    SET_BANNERLIST(state,bannerList){
        state.bannerList=bannerList
    }
};
const actions = {
    async getBannerList({commit}){
        const result = await getBannerList()
        if(result.code==='200'){
            commit('SET_BANNERLIST',result.data.navList)
        }
    }
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
