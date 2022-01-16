import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import rem from './rem'
import "@/plugins/vant"

//全局注册tabbar组件
import Tabbar from "@/components/Tabbar"
Vue.component("Tabbar", Tabbar)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    //全局事件总线
    Vue.prototype.$bus = this;
  },
}).$mount('#app');
