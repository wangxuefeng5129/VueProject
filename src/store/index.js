import Vue from 'vue'
import Vuex from 'vuex'
import wxf from './modules/wxf'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        wxf
    }
});

export default store