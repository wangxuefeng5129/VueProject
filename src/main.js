import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios/http'
import store from './store'
import echarts from 'echarts'
import 'lib-flexible'
import './assets/styles/reset.css'
import './assets/iconFont/iconfont'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;

window.console.log(process.env.VUE_APP_URL);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
