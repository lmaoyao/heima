import Vue from 'vue'
import App from './App.vue'
import router from "./router/router"
import  "mint-ui/lib/style.css"
Vue.config.productionTip = false;
// Vue.use(MintUi)
new Vue({
    router,
  render: h => h(App),
}).$mount('#app');
