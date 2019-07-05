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
                <div class="status">imei:{{item.imei}}</div>
                <div class="status">地址:{{item.address}}</div>
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
