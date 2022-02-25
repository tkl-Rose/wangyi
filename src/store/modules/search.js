import search from '@/api/request/search'
const state = {
    popularList:[],
    navigationList:[],
    directlyList:[],
    category1List:[]
};
const mutations = {
  SET_POPULAR_LIST(state,popularList){
    state.popularList = popularList
  },
  SET_NAVIGATION_LIST(state,navigationList){
    state.navigationList = navigationList
  },
  SET_GOODS_LIST(state,directlyList){
    
    state.directlyList = directlyList
  },
  SET_CATEGORY1_LIST(state,category1List){
    state.category1List = category1List
  }
};
const actions = {
  async getPopularList({commit}){
   
     const result = await search.getPopularList()
     if(result.code == 200){

       commit('SET_POPULAR_LIST',result.data.hotKeywordVOList)
     }
    },
    async getNavigationList({commit},keywordPrefix){
      const result = await search.getNavigationList(keywordPrefix)
 
      if(result.code == 200){
        commit('SET_NAVIGATION_LIST',result.data)
      }
    },
    async getGoodsList({commit},searchInfo){
      const result = await search.getGoodsList(searchInfo)
      if(result.code == 200){
        commit('SET_GOODS_LIST',result.data.directlyList)
        // categoryL1List
     
        commit('SET_CATEGORY1_LIST',result.data.categoryL1List)
      }
    }

};
const getters = {
      goodsList(state){
        let arr = []
        // console.log(state.directlyList)
        state.directlyList?.forEach(item => {
          arr.push({
            id:item.id,
            name:item.name,
            goodsImg:item.listPicUrl,
            price:item.retailPrice,
            counterPrice:item.counterPrice,
            logoUrl:(item.promLogo||{}).logoUrl,
            logoInfo:(item.finalPriceInfoVO||{}).banner || {},
            priceInfo:((item.finalPriceInfoVO||{}).priceInfo || {}).finalPrice
          })
        })
        return arr
       /* 
        return state.directlyList.map(item => {
          return {
            id:item.id,
            name:item.name,
            goodsImg:item.listPicUrl,
            price:item.retailPrice,
            counterPrice:item.counterPrice,
            logoUrl:(item.promLogo||{}).logoUrl,
            logoInfo:(item.finalPriceInfoVO||{}).banner || {},
            priceInfo:((item.finalPriceInfoVO||{}).priceInfo || {}).finalPrice
          }
        }) || [] 
        */
      }
};
export default {
  state,
  mutations,
  actions,
  getters,
};
