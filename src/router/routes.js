const Home = () => import('@/pages/Home');
const Login = () => import('@/pages/Login');
const Register = () => import('@/pages/Register');
const Search = () => import('@/pages/Search');
const WorthBuy = () => import('@/pages/WorthBuy');
const Category = () => import('@/pages/Category');
const Center = () => import('@/pages/Center');
const Detail = () => import('@/pages/Detail');
const Cart = () => import('@/pages/Cart');
const GoodsList = () => import('@/pages/GoodsList');

const routes = [
  {
    name: 'home', //首页-->高开
    path: '/home',
    component: Home,
  },
  {
    name: 'login', //登陆-->姚聪
    path: '/login',
    component: Login,
  },
  {
    name: 'center', //个人中心-->姚聪
    path: '/center',
    component: Center,
  },
  {
    name: 'register', //注册-->姚聪
    path: '/register',
    component: Register,
  },
  {
    name: 'worth-buy', //值的买-->王飞
    path: '/worth-buy',
    component: WorthBuy,
  },
  {
    name: 'category', //分类-->郭一凡
    path: '/category',
    component: Category,
  },
  {
    name: 'goods-list', //商品列表-->郭一凡
    path: '/goods-list',
    component: GoodsList,
  },
  {
    name: 'detail', //详情-->方澳
    path: '/detail',
    component: Detail,
  },
  {
    name: 'search', //搜索-->潘增
    path: '/search',
    component: Search,
  },
  {
    name: 'cart', //购物车-->方澳
    path: '/cart',
    component: Cart,
  },
  {
    path: '/', //默认重定向
    redirect: '/home',
  },
];
export default routes;
