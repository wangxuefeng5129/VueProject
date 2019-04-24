import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from './../components/a'
import About from './../components/b'
const routes = [
    {
        path:'/home',
        component:Home,
        name:'home',
        meta:{
            keepAlive:true
        }
    },
    {
        path:'/about',
        component:About,
        name:'about',
        beforeEnter:(to,from,next)=>{
            if(to.name === 'about'){
                alert('1');
            }
            next()
        },
        meta:{
            keepAlive:false
        }
    }
];

const router = new VueRouter({
    routes
});

//路由守卫设置
/*router.beforeEach((to,from,next)=>{
    const nextRoute = ['about'];
    if(nextRoute.indexOf(to.name) >= 0){
        if(localStorage.getItem('name')!=='wxf'){
            router.push({name:'home'});
            return;
        }
    }
    next();
});*/
export default router