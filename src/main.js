import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios/http'
import store from './store'
import 'lib-flexible'
import './assets/styles/reset.css'
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

window.console.log(process.env.VUE_APP_URL);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
