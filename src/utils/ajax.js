import store from "@/store";
import axios from "axios"
import nprogress from "nprogress";
import "nprogress/nprogress.css";
//请求前台项目的接口
const ajax = axios.create({
  baseURL:"/api",//请求前台项目接口
  timeout: 20000
})

// 添加请求拦截器
ajax.interceptors.request.use(function (config) {
  nprogress.start()//启用进度条
  let token = store.state.user.token
  if(token){
    config.headers.token =token
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
ajax.interceptors.response.use(
  function (response) {
    nprogress.done();
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    nprogress.done();
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default ajax;
