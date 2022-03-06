import {
    addToCart,
    getCartList,
    removeSku
} from "@/api/index"
// import { result } from "lodash"
const state = {
    cartList: [],
}
const mutations = {
    //获取购物车列表
    SET_CARTLIST(state, payload) {
        state.cartList = payload
    },
}
const actions = {
    //添加购物车
    async reqAddToCart({
        commit
    }, goodsInfo) {
        const result = await addToCart(goodsInfo)
    },
    //获取购物车列表
    async getShopCartList({
        commit
    }) {
        const result = await getCartList()
        if (result.code === 200) {
            let res = result.data.reduce((p, c) => {
                c.cartInfoList.forEach(item => {
                    p.push(item)
                })
                return p
            }, [])
            commit('SET_CARTLIST', res)
        }
    },
    //删除购物车商品
    async reqRemoveSku({
        commit
    }, skuId) {
        const result = await removeSku(skuId)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }
}
const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}