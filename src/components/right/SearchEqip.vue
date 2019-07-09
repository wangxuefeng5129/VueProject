<template>
    <div style="margin-top: 0.3rem">
        <div class="commonTitle title">
            <span>搜索设备</span>
            <span>Device data</span>
        </div>
        <div class="search">

            <div class="container" v-if="$store.state.wxf.value">
                <div>地址:{{$store.state.wxf.value.address}}</div>
                <div>imei:{{$store.state.wxf.value.imei}}</div>
                <div>
                    <span>经度:{{$store.state.wxf.value.latitude}}</span>
                    <span>纬度:{{$store.state.wxf.value.longitude}}</span>
                </div>
                <div v-if="$store.state.wxf.value.traceName">设备名称:{{$store.state.wxf.value.traceName}}</div>
                <div v-if="$store.state.wxf.value.onuName">设备名称:{{$store.state.wxf.value.onuName}}</div>
                <div v-if="$store.state.wxf.value.coverName">设备名称:{{$store.state.wxf.value.coverName}}</div>
                <div v-if="$store.state.wxf.value.lampPostName">设备名称:{{$store.state.wxf.value.lampPostName}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SearchEqip',
        data(){
            return{
                /*searchVal: null,*/
                items: [

                ],
              options: [],
              value: [],
              list: [],
              loading: false,
              states: [],
            }
        },
        watch:{
          /*searchVal(newVal,oldVal){
            if(this.searchVal=== ''){
              this.items=[]
            }
              this.$axios.get('monitorScreen/getEquipmentInfoByAddress',{
                  params:{
                    address:newVal,
                  }
              }).then((response)=>{
                  if(response.status === 200){
                      let res = response.data.data;
                      for(var i in res){
                        if(res[i].length>0){
                          this.items.push(...res[i])
                        }
                      }
                  }
              })
          }*/
        },
        mounted(){

        },
        computed:{

        },
        methods:{

        }
    }
</script>

<style scoped lang="less">
    .status{
        line-height: 0.4rem;
        font-size: 0.16rem;
    }
    input{
        margin-top: 0.1rem;
        border-radius:0.04rem;
    }
    .search{
        background: url("./../../assets/images/right.png") no-repeat center center;
        background-size: cover;
        width: 4.71rem;
        height: 2.5rem;
        overflow-y: scroll;
        margin-top: 0.2rem;
    }
    .search::-webkit-scrollbar {
        display: none; // 隐藏滚动条
    }
    .container{
        margin-top: 0.7rem;
        font-size: 0.18rem;
        div{
            margin-bottom: 0.2rem;
        }
    }
</style>
