import axios from 'axios'
import qs from 'qs'
import {TIME_OUT_MAX , _apiHost} from './config'

axios.defaults.baseURL = _apiHost;  //配置接口地址
axios.defaults.timeout = TIME_OUT_MAX;  //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头

let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
let removePending = (ever) => {
    for(let p in pending){
        if(pending[p].u === ever.url + '&' + ever.method) { //当当前请求在数组中存在时执行函数体
            window.console.log(p);
            pending[p].f(); //执行取消操作
            pending.splice(p, 1); //把这条记录从数组中移除
        }
    }
};

//添加请求拦截器
axios.interceptors.request.use((config)=>{
    //在发起请求之前做某件事
    if(config.method === 'post'){
        config.data = qs.stringify(config.data); //post请求参数序列化
    }
    removePending(config); //在一个ajax发送前执行一下取消操作
    config.cancelToken = new cancelToken((c)=>{
        // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        pending.push({ u: config.url + '&' + config.method, f: c });
    });
    window.console.log(pending);
    return config
},(error)=>{
    return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.response.use((res)=>{
    //对响应数据做些事
    window.console.log(res);
    removePending(res.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    if(res.data.status === 400){
        //全局登陆过滤，当判读token失效或者没有登录时 返回登陆页面
        return false;
    }
    return Promise.resolve(res);
},(error)=>{
    return Promise.reject(error);
});

export default axios






