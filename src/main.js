import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios/http'
import store from './store'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
