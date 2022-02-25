import { reqDatilData, reqAddCart } from '../../api/index'
const state = {
    goodsData: {}
};
const mutations = {
    SETGOODSDATA(state, data) {
        state.goodsData = data
    }
};
const actions = {
    // 获取详情页数据
    async gitDeatilData({ commit }, id) {
        const result = await reqDatilData(id)
        commit('SETGOODSDATA', result.data)
    },
    // 加入购物车
    async addShopCard({ commit }, data) {
        console.log(data.skuId, data.skuNum)
        const result = await reqAddCart(data.skuId, data.skuNum)
        return 'ok'
    }


};
const getters = {
    categoryView(state) {
        return state.goodsData.categoryView || {}
    },
    skuInfo(state) {
        return state.goodsData.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodsData.spuSaleAttrList || [1, 2]
    },

};
export default {
    state,
    mutations,
    actions,
    getters,
};
