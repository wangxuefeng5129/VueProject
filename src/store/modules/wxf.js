import axios from './../../axios/http'
const state  = {
    statisticData:{},
    alarms:{},
    faultDevices:'',
    totalDevices:'',
    onlineDevices:'',
    devices:null,
    lng:121.47939,
    lat:31.23667,
    zoom:16,
    location:[],
    value: [],
};

const getters = {};

const mutations = {
    ONLINEFAULT(state){
        axios.get('monitorScreen/listMonitoredEquipmentInfoVO').then((response)=>{
            if(response.status === 200){
                let res = response.data.data;
                state.devices = res.devices;
                state.faultDevices=res.faultDevices;
                state.onlineDevices=res.totalDevices-res.faultDevices;
                state.totalDevices=res.totalDevices;
                console.log(res);

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
