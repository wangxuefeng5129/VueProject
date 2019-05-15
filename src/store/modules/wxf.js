import axios from './../../axios/http'
const state  = {
    statisticData:{},
    alarms:{},
};

const getters = {};

const mutations = {
    ONLINEFAULT(state){
        axios.get('Statistics/OnlineFault').then((response)=>{
            if(response.status === 200){
                let res = response.data.data;
                state.statisticData = res.statisticData;
                state.alarms = res.alarms;

            }
        })
    }
};

const actions = {
    OnlineFault({commit}){
        commit('ONLINEFAULT')
    }
};

export default {
    /*namespaced:true,*///用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}