import request from "@/utils/request"; //网页接口用request
import ajax from "@/utils/ajax"; //前端项目接口用ajax

//1.获取注册的请求
export const reqRegister = (user) => {
    return ajax({
        url: '/api/user/passport/register',
        method: 'post',
        data: user
    })
}
//2.获取验证码的请求
export const reqCode = (phone) => ajax.get(`/user/passport/sendCode/${phone}`);
//3.获取登录的请求
export const reqUserLogin = (user) => {
    return ajax({
        url: '/user/passport/login',
        method: 'post',
        data: user
    })
}
//请求分类列表
export const reqCategoryListData = () => {
    return request({
        url: '/item/cateList.json?__timestamp=1630131286110&categoryId', //请求基本路径
        method: 'get'
    })
}
//根据分类ID请求分类列表
export const reqCategorymainData = () => {
    return request({
        url: '/item/cateList.json?__timestamp=1630131455012&categoryId=1005000', //请求基本路径
        method: 'get'
    })
}
//获取某个分类下的商品列表
export const reqCateList = () => {
    return request({
        url: '/item/list.json?__timestamp=1630133942864&categoryType=0&subCategoryId=1008009&categoryId=1005000', //请求基本路径
        method: 'get'
    })
}

export const reqLifeList = () => {
    return request({
        url: '/item/list.json?__timestamp=1630133942864&categoryType=0&subCategoryId=1008009&categoryId=1005000',
        method: 'get'
    })
}

//4.自动登录根据token获取用户信息
export const reqGetUserInfo = () => {
    return ajax({
        url: "/user/passport/auth/getUserInfo",
        method: "get",
    });
};

//5.退出登录
export const reqUserLogout = () => {
    return ajax({
        url: "/user/passport/logout",
        method: "get",
    });
};
//添加购物车
export const addToCart = ({
    skuId,
    skuNum
}) => {
    return ajax({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: "POST",
    });
};
//获取购物车列表
export const getCartList = () => {
    return ajax({
        url: `/cart/cartList`,
        method: "GET"
    })
}
//删除购物车商品
export const removeSku = (skuId) => {
    return ajax.delete(`/cart/deleteCart/${skuId}`)
}
//请求分类
export const reqbup = (id) => {
    return request({
        url: '/item/cateList.json?__timestamp=1630131286110&categoryId=' + id, //请求基本路径
        method: 'get'
    })
}
//请求列表
export const reqleft = ({
    categoryType,
    subCategoryId,
    categoryId
}) => {
    return request({
        url: `/item/list.json?__timestamp=1630133942864&categoryType=${categoryType}&subCategoryId=${subCategoryId}&categoryId=${categoryId}`,
        method: "get"
    })
}