import { reqIndexData, reqCardData } from '@/api/index'


const state = {
    indexData: {

    },
    cardData: {}
};
const mutations = {
    SET_INDEXDATA(state, indexData) {
        state.indexData = indexData
    },
    SET_CARDDATA(state, cardData) {
        state.cardData = cardData
    },

};
const actions = {
    //首页数据
    async getIndexData({ commit }) {

        const result = await reqIndexData()
        // console.log(result);
        if (result.code === '200') {
            commit('SET_INDEXDATA', result.data.data)
            return 'OK'
        } else {
            return new Promise(new Error('faild'))
        }

    },
    //card数据
    async getCardData({ commit }) {
        const result = await reqCardData()
        // console.log('card',result);
        if (result) {
            commit('SET_CARDDATA', result.data)
            return 'OK'
        } else {
            return new Promise(new Error('faild'))
        }
    }

};
const getters = {
    // home
    navList(state) {
        return (state.indexData || {}).categoryHotSellModule || {}.categoryList || []
    },
    bannerList(state) {
        return (state.indexData || {}).focusList || []
    },
    policyDescList(state) {
        return (state.indexData || {}).policyDescList || []
    },
    categoryList(state) {
        return ((state.indexData || {}).kingKongModule || {}).kingKongList || []
    },
    floorList(state) {
        return ((state.indexData || {}).bigPromotionModule || {}).floorList || []
    },
    newPeopleList(state) {
        return (state.indexData || {}).indexActivityModule || []
    },
    saleList(state) {
        return (state.indexData || {}).sceneLightShoppingGuideModule || []
    },
    // card
    cardBannerList(state) {
        return (((state.cardData || {}).currentCategory || {}).bannerList) || []
    },
    cardCategoryList(state) {
        return (state.cardData || {}).categoryList || []
    },
    cardCategoryItemList(state) {
        return (state.cardData || {}).categoryItemList || []
    },




};
export default {
    state,
    mutations,
    actions,
    getters,
};
