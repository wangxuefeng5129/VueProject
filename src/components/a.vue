<template>
    <div>
        <div @click="getMsg()" class="getMsg">请求数据</div>
        <div @click="cancelMsg()" class="cancelMsg">取消请求</div>
        <div>{{$store.state.wxf.name}}</div>
        <input type="text" placeholder="请输入，会被缓存">
    </div>
</template>


<script>
    export default {
        name:'home',
        data(){
            return{
                cancel:null ,
                interval:5000,
                name:'wxf'
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                alert('Hello ' + vm.name)
            })
        },
        created(){
          setTimeout(function f() {
              window.console.log('1');
              setTimeout(f,2000)
          },2000);

          localStorage.setItem('name',"wx")
        },
        methods:{
            getMsg(){
                let CancelToken = this.$axios.CancelToken;
                let self = this;
                this.$axios.get('api/weather/city/101030100',{
                    cancelToken: new CancelToken(function executor(c) {
                        self.cancel = c;
                        window.console.log(c)
                        // 这个参数 c 就是CancelToken构造函数里面自带的取消请求的函数，这里把该函数当参数用
                    })
                }).then((res)=>{
                    window.console.log(res)
                }).catch((err)=>{
                    window.console.log(err)
                });
                setTimeout(function () {
                    //只要我们去调用了这个cancel()方法，没有完成请求的接口便会停止请求
                    self.cancel()
                }, 100)
            },
            cancelMsg(){
                this.cancel()
            }
        }
    }
</script>

<style scoped lang="less">
    @color:red;
    .public(@radus){
        border:1px solid black;
        border-radius: @radus;
        width: 100px;
    }
    .getMsg{
        color: @color;
        .public(10px)
    }
    .cancelMsg{
        .public(20px)
    }
</style>