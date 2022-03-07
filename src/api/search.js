import request from "@/utils/request";

// 获取热门搜索数据
export const getSearchdata = () => request.get("/xhr/search/init.json");

// 搜索实时关键字列表
export const getRealTimeSearchList = (keywordPrefix) => {
    return request({
        url: `/xhr/search/searchAutoComplete.json`,
        method: "post",
        data: keywordPrefix,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
    });
};

export const getSearchPageData = (searchForm) => {
    return request({
        url: "/xhr/search/search.json",
        method: "post",
        params: searchForm,
    });
};