import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios/http'
import store from './store'
import echarts from 'echarts'
import 'echarts-gl'
import 'lib-flexible'
import './assets/styles/reset.css'
import './assets/iconFont/iconfont.css'
import BaiduMap from 'vue-baidu-map'
import {BmlMarkerClusterer} from 'vue-baidu-map'
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.component('bml-marker-clusterer',BmlMarkerClusterer);
Vue.use(BaiduMap,{
  ak:'DD279b2a90afdf0ae7a3796787a0742e'
});
window.console.log(process.env.VUE_APP_URL);
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
