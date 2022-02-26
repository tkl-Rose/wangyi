import { reqHomeList, reqHomeTagList } from "@/api/home";
const state = {
  homeMsg: {},
  homeCategoryList: [],
  choose: 0,
};
const mutations = {
  RECEIVE_HOMEMSG(state, homeMsg) {
    state.homeMsg = homeMsg;
  },
  RECEIVE_HOMECATEGORYLIST(state, homeCategoryList) {
    state.homeCategoryList = homeCategoryList;
  },
  RECEIVE_CHOOSE(state, choose) {
    state.choose = choose;
  },
};
const actions = {
  async getHomeMsg({ commit }) {
    const result = await reqHomeList();
    if (result.code === "200") {
      commit("RECEIVE_HOMEMSG", result.data.data);
    } else {
      console.log("请求首页数据失败");
    }
  },
  async homeTagList({ commit }, name) {
    const result = await reqHomeTagList();
    let homeCategoryList = {
      bannerList: result.data.currentCategory.bannerList || [],
      categoryItemList: result.data.categoryItemList
        .map((item) => {
          return {
            id: item.category.id,
            desc: item.category.frontDesc,
            title: item.category.name,
            itemList: item.itemList.map((item1) => {
              return {
                picUrl: item1.listPicUrl || "",
                name: item1.name || "",
                price: {
                  newPrice:
                    item1.finalPriceInfoVO.priceInfo.finalPrice?.price || "",
                  oldPrice: item1.finalPriceInfoVO.priceInfo.counterPrice || "",
                },
                promDesc: item1.promDesc || "",
              };
            }),
          };
        })
        .slice(0, 3),
    };
    commit("RECEIVE_HOMECATEGORYLIST", homeCategoryList);
  },
};
const getters = {
  // header组件的scrollTab
  categoryScrollList(state) {
    return (
      state.homeMsg.categoryHotSellModule?.categoryList.map((item) => {
        return {
          categoryName: item.extra.operationResource.categoryName,
          categoryId: item.extra.operationResource.categoryId,
        };
      }) || []
    );
  },
  // home页的大轮播图数据
  homeSwiperImgList(state) {
    return (
      state.homeMsg.focusList?.map((item) => {
        return {
          imgUrl: item.picUrl,
          id: item.id,
        };
      }) || []
    );
  },
  // 轮播图下边的列
  policyDescList(state) {
    return state.homeMsg.policyDescList || [];
  },
  // 首页宫格
  kingKongList(state) {
    return state.homeMsg.kingKongModule?.kingKongList || [];
  },
  // 首页动图
  bigGif(state) {
    return state.homeMsg.bigPromotionModule?.floorList[0].cells[0].picUrl;
  },
  // 新人专享
  vipGiftList(state) {
    return state.homeMsg?.indexActivityModule || [{}, {}];
  },
  // 热销榜
  hotSaleList(state) {
    return {
      title: state.homeMsg.categoryHotSellModule?.title,
      hotSaleList:
        state.homeMsg.categoryHotSellModule?.categoryList.map((item) => {
          return {
            name: item.categoryName,
            imgUrl: item.picUrl,
            id: item.extra.operationResource.categoryId,
          };
        }) || [],
    };
  },
  // 底部盒子
  bottomBoxList(state) {
    return (
      state.homeMsg.sceneLightShoppingGuideModule || [
        { styleItem: {} },
        { styleBanner: {} },
      ]
    );
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
