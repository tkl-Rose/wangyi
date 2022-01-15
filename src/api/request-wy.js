//1.引入axios
import axios from 'axios';
//进度条
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

//2.创建实例对对象 然后统一配置之后再去发送数据
const requestWy = axios.create({
  baseURL: '/wy', // 请求的基本路径
  timeout: 2000, // 设置超时时间
});

//3.请求拦截器 在请求发送之前执行里面的代码
requestWy.interceptors.request.use(
  config => {
    //一定要返回配置项 这个config包含了请求的一些配置信息
    nProgress.start();
    return config;
  },
  err => {
    alert('请求拦截失败', err);
    return Promise.reject(Error.err);
  }
);
//4.响应拦截器
requestWy.interceptors.response.use(
  response => {
    //设置进度条的结束
    nProgress.done();
    //返回的是data中的数据
    return response.data;
  },
  err => {
    nProgress.done();
    // 统一处理错误
    alert('发送requestWy请求失败' + err.message);
    return Promise.reject(err);
  }
);

// 5.导出对象
export default requestWy;
