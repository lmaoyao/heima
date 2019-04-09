import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Mint from 'mint-ui';
Vue.use(Mint);
Vue.use(VueRouter);
import router from "./router/router"
import "mint-ui/lib/style.min.css"
//导入 vue-resource
import VueResource from "vue-resource"
Vue.use(VueResource);
import "../mui-0.9.41/css/mui.min.css"
// import "../mui-0.9.41/css/"




Vue.config.productionTip = false;
// Vue.use(MintUi)
new Vue({
    router,
  render: h => h(App),
}).$mount('#app');
