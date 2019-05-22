<template>
    <div style="margin-top: 0.3rem">
        <div class="commonTitle title">
            <span>搜索设备</span>
            <span>Device data</span>
        </div>
        <div class="search">
            <div>
                设备地址:<input type="text" placeholder="请输入设备信息..." v-model="searchVal">
            </div>
            <div v-for="(item,index) in items" :key="index" style="border-bottom: 1px yellow solid">
                <div class="status">名称:{{item.deviceName}}</div>
                <div class="status">地址:{{item.deviceAddress}}</div>
                <div class="status">最后更新时间:{{item.uploadtime}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SearchEqip',
        data(){
            return{
                searchVal: null,
                items: [

                ],
            }
        },
        watch:{
          searchVal(newVal,oldVal){
              this.$axios.get('Statistics/ListDevice',{
                  params:{
                      deviceAddress:newVal,
                  }
              }).then((response)=>{
                  if(response.status === 200){
                      let res = response.data;
                      this.items = res.data;
                      console.log(this.items)
                  }
              })
          }
        },
        mounted(){

        },
        computed:{

        },
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
</style>