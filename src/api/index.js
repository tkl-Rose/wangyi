import requestSph from './request-sph'; //商品汇
import requestWy from './request-wy'; //网易严选
//api写接口的地方
export const reqIndexData = ()=>{
    return requestWy({
        url:`/xhr/index.json?__timestamp=1630131808529`,
        method:'get'
    })
}

export const reqCardData =(categoryId)=>{
    return requestWy({
        url:`/item/list.json?__timestamp=1642484788204&categoryId=${categoryId}`,
        method:'get'
    })
}