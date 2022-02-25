import { getCateList, getCenterList, getgoodsList } from '../../../src/api/index'


const state = {
    categoryList: [],
    cateList: [],
    goryList: {},
    itemList: []
};
const mutations = {
    SET_CATEGORY(state, categoryList) {
        state.categoryList = categoryList.data
        // state.cateList = categoryList.data.categoryGroupList

    },
    SET_CATELIST(state, cateList) {
        state.cateList = cateList
    },
    SET_LIST(state, goryList) {
        state.goryList = goryList
        let a = goryList.itemList.slice(0, 10)
        a.splice(4, 1)
        state.itemList = a
    }

};
const actions = {
    // 获取分类页第一层数据
    async getcategoryList({ commit }) {
        const result = await getCenterList()
        if (result.YXJSONArray.empty === false) {
            // console.log(result);
            commit('SET_CATEGORY', result)
        }
    },

    // 获取右侧的二级以下的
    async getCateList({ commit }, id) {
        try {
            const result = await getCateList(id)

            commit('SET_CATELIST', result.data.categoryGroupList)
            return 'ok'
        } catch (error) {
            return
        }
    },

    //  获取goodslist
    async getgoodsList({ commit }, ID) {

        try {
            console.log(ID);
            // console.log(subid, id);
            const result = await getgoodsList(ID.subCategoryId, ID.categoryId)
            console.log(result.data.categoryItems);

            // console.log('11', result.data.categoryItems.itemList[0].finalPriceInfoVO.priceInfo.finalPrice.price);
            commit('SET_LIST', result.data.categoryItems)
        } catch (error) {
            return
        }
    }
}
const getters = {
    category(state) {
        return state.goryList.category || {}
    },
    currentCategorya(state) {
        return state.categoryList.currentCategory || {}
    },


    // state.goryList.itemList.
};
export default {
    state,
    mutations,
    actions,
    getters,
};
