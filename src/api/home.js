import request from "@/utils/request";
// 请求获取首页数据
// https://m.you.163.com/xhr/index.json?__timestamp=1630131808529
export const reqHomeList = () => {
    return request({
        url: "/xhr/index.json?__timestamp=1630131808529",
        method: "get",
    });
};
// 获取某个频道的数据
// https://m.you.163.com/item/list.json?__timestamp=1630136511866&categoryId=1005000
export const reqHomeTagList = () => {
    return request({
        url: "/item/list.json?__timestamp=1630136511866&categoryId=1005000",
        method: "get",
    });
};