<template>
    <div class="search">
        <input type="text" placeholder="请输入设备信息..." v-model="searchVal">
        <div v-for="(item,index) in NewItems" :key="index" style="border-bottom: 1px yellow solid">
            <div class="status">{{item.name}}</div>
            <div class="status">{{item.location}}</div>
            <div class="status">{{item.status1}}</div>
            <div class="status">{{item.status2}}</div>
            <div class="status">{{item.status3}}</div>
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
                    {
                        name: "光交箱",
                        location: "地址:上海市奉贤区浦卫路",
                        status1:'锁状态:关',
                        status2:'门状态:关',
                        status3:'网络信号强度:强/电池电量:满'
                    },
                    {
                        name: "智慧灯杆箱",
                        location: "地址:上海市奉贤区浦卫路",
                        status1:'视屏:耐克广告',
                        status:'路灯状态:开',
                        status3:'网络信号强度:弱/电池电量:满'
                    },
                ],
            }
        },
        mounted(){
          window.console.log(this.NewItems)
        },
        computed:{
            NewItems() {
                var _this = this;
                var NewItems = [];
                this.items.map(function(item) {
                    if (item.name.search(_this.searchVal) !== -1 && _this.searchVal !=='') {
                        NewItems.push(item);
                    }
                });
                return NewItems;
            }
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
        border: 1px gray solid;
        width: 4.6rem;
        height: 2.6rem;
        margin-left: 0.3rem;
        overflow-y: scroll;
    }
    .search::-webkit-scrollbar {
        display: none; // 隐藏滚动条
    }
</style>