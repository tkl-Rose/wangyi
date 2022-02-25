import { reqShopCartData, reqAddCart, reqChangeCartSku, deleteCarSkus } from '../../api/index'
const state = {
    shopData: []
};
const mutations = {
    SETSHOPDATA(state, data) {
        data[0] && (state.shopData = data[0].cartInfoList)
    }
};
const actions = {
    // 获取购物车数据
    async getShopData({ commit }) {
        const result = await reqShopCartData()
        commit('SETSHOPDATA', result.data)
        console.log(result)
    },
    // 更改商品的数量
    async setGoodsNum({ commit }, goods) {
        const result = await reqAddCart(goods.id, goods.num)
    },
    // 商品是否选中
    async setGoodsChecked({ commit }, goods) {
        const result = await reqChangeCartSku(goods.id, goods.isChecked)
    },
    // 删除选中的商品
    async deleteGoods({ commit }, goodsList) {
        console.log('aaaaaa')
        console.log('aa', goodsList)
        const result = await deleteCarSkus(goodsList)
        if (result.code === 200) return 'ok'

    }
};
const getters = {

};
export default {
    state,
    mutations,
    actions,
    getters,
};
