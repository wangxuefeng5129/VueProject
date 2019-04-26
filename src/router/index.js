import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from './../view/home'
const routes = [
    {
        path:'/',
        component:Home
    }
];

const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0}
    }
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