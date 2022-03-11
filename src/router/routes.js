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

const routes = [{
    name: 'home', //首页-->李庚
    path: '/home',
    component: Home,
  },
  {
    name: 'login', //登陆-->陈洪峰
    path: '/login',
    component: Login,
  },
  {
    name: 'center', //个人中心-->陈洪峰
    path: '/center',
    component: Center,
  },
  {
    name: 'register', //注册-->陈洪峰
    path: '/register',
    component: Register,
  },
  {
    name: 'worthbuy', //值的买-->何磊
    path: '/worthbuy',
    component: WorthBuy,
  },
  {
    name: 'category', //分类-->刘志坤
    path: '/category',
    component: Category,
  },
  {
    name: 'goods-list', //商品列表-->刘志坤
    path: '/goods-list',
    component: GoodsList,
  },
  {
    name: 'detail', //详情-->轩文龙
    path: '/detail',
    component: Detail,
    meta: {
      isHiddenTabbar: true,
    },
  },
  {
    name: 'search', //搜索-->段永鹏
    path: '/search',
    component: Search,
  },
  {
    name: 'cart', //购物车-->轩文龙
    path: '/cart',
    component: Cart,
  },
  {
    path: '/', //默认重定向
    redirect: '/home',
  },
];
export default routes;