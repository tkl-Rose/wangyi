import Vuex from 'vuex';
import Vue from 'vue';

import home from './modules/home';
import category from './modules/category'
import search from "./modules/search"

Vue.use(Vuex);

const state = {};
const mutations = {};
const actions = {};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    home,
    category,
    search
  },
});