import {
  reqCode,
  reqRegister,
  reqUserLogin,
  reqGetUserInfo,
  reqUserLogout,
} from "@/api";
const state = {
  code: "",
  token: localStorage.getItem("token_key"),
  userInfo: {},
};
const mutations = {
  // 接收验证码
  SET_CODE(state, code) {
    state.code = code;
  },

  // 接收token
  SET_TOKEN(state, token) {
    state.token = token;
  },

  //接收用户信息
  SET_USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },

  // 退出请空数据
  RE_USERINFO(state) {
    state.token = "";
    state.userInfo = {};
  },
};
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    const result = await reqCode(phone);
    if (result.code === 200) {
      commit("SET_CODE", result.data);
      return result.data;
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  // 注册
  async getRegister({ commit }, user) {
    const result = await reqRegister(user);
    console.log(result, "hou");
    if (result.code === 200) {
      console.log(result, "hou");
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },

  // 登录
  async userLogin({ commit }, user) {
    const result = await reqUserLogin(user);
    if (result.code === 200) {
      commit("SET_TOKEN", result.data.token);
      localStorage.setItem("token_key", result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },

  // 根据token获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqGetUserInfo();
    if (result.code === 200) {
      commit("SET_USERINFO", result.data);
      console.log(result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },

  // 退出登录
  async userLogout({ commit }) {
    const result = await reqUserLogout();
    if (result.code === 200) {
      localStorage.removeItem("token_key");
      commit("RE_USERINFO");
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
};
const getters = {
  userInfo() {
    return state.userInfo;
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
