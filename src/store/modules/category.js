// import request from "@/utils/request";
import {
    reqbup
} from "@/api";

const state = {
    categoryList: {},
    categorymainList: {},
    TreeList: {}
};

const mutations = {
    RECIVE_CATEGORYLIST(state, categoryList) {
        // console.log(categoryList);
        state.categoryList = categoryList;
    },
    RECIVE_CATEGORYMAINLIST(state, categorymainList) {
        state.categorymainList = categorymainList;
    },
    RECIVE_TREELIST(state, TreeList) {
        state.TreeList = TreeList
    }
};

const actions = {

    async getCategorymainList({
        commit
    }, id) {
        const result = await reqbup(id)
        //console.log(result,22222);
        commit('RECIVE_CATEGORYMAINLIST', result.data)
        commit('RECIVE_CATEGORYLIST', result.data)
        commit('RECIVE_TREELIST', result.global)
    }
};

const getters = {
    category1Id(state) {
        return state.categoryList.categoryL1List
    },
    category2Id(state) {
        return state.categoryList.categoryL2List
    },
    Imgdata(state) {
        return (state.categoryList.currentCategory || {}).bannerList
    },
    categoryGroupList(state) {
        return state.categorymainList.categoryGroupList
    },
    categoryL2List(state) {
        return state.categorymainList.categoryL2List
    }

};

export default {
    state,
    mutations,
    actions,
    getters,
};