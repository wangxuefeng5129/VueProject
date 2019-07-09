<template>
    <div style="position: relative">
        <div id="container" :style="{width: '8.36rem',height: '5.78rem'}"></div>
        <div class="list">
            <!--<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>-->
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">
                    <span v-if="city=='lamppost'">智慧路灯</span>
                    <span v-else-if="city=='trace'">井盖</span>
                    <span v-else-if="city=='onu'">光交箱</span>
                    <span v-else-if="city=='cover'">地埋柜</span>
                </el-checkbox>
            </el-checkbox-group>
        </div>

        <div>
            <el-select class="searchs"
                       v-model="$store.state.wxf.value"
                       :multiple="false"
                       filterable
                       remote
                       @change="changes"
                       reserve-keyword
                       placeholder="请输入关键词"
                       :remote-method="remoteMethod"
                       :loading="loading">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
        <!--经度: <input id="longitude" type="text" style="width:100px; margin-right:10px;" />
        纬度: <input id="latitude" type="text" style="width:100px; margin-right:10px;" />
        <input type="button" value="查询" onclick="Loactions()" />-->
    </div>



</template>

<script>

    const cityOptions = ['lamppost', 'trace', 'onu', 'cover'];
    export default {
        data(){
            return{

                flag:true,
                checkAll: false,
                checkedCities: ['lamppost','trace'],
                cities: cityOptions,
                isIndeterminate: true,



              options: [],
              list: [],
              loading: false,
              states: []
            }
        },
        mounted(){
            this.ListDeviceLation();
          console.log(this.$store.state.wxf.location)

        },
        methods:{

            initMap(){

                /*var content=`<table border="1" class="equipMessage" style="text-align: center ;">
        <thead>
        <tr>
            <th>设备imei</th>
            <th>设备位置</th>
            <th>设备状态</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in location">
            <td>{{item.imei}}</td>
            <td>{{item.address}}</td>
            <td>{{item.status}}</td>
        </tr>
        </tbody>
    </table>`;*/
                const map = new BMap.Map("container");
                map.centerAndZoom(new BMap.Point(this.$store.state.wxf.lng,this.$store.state.wxf.lat), this.$store.state.wxf.zoom);
                map.setCurrentCity("广州");
                map.enableScrollWheelZoom();
                map.addEventListener('dragend',function (e) {
                  console.log(e)
                  localStorage.setItem('lng',e.point.lng);
                  localStorage.setItem('lat',e.point.lat);
                  localStorage.setItem('zoom',map.getZoom())
                });
                map.setMapStyle({style:'midnight'});
                map.addControl(new BMap.MapTypeControl({
                    mapTypes:[
                        BMAP_NORMAL_MAP,
                        BMAP_HYBRID_MAP,
                    ]}));
                map.setCurrentCity("北京市");  //设置当前城市
                var opts = {
                    width : 0,     // 信息窗口宽度
                    height: 0,     // 信息窗口高度
                    enableMessage:true//设置允许信息窗发送短息
                };
                var myIcon = new BMap.Icon(require('./../../assets/images/jing.png'), new BMap.Size(80,50));
                var myIcon6 = new BMap.Icon(require('./../../assets/images/jingOn.png'), new BMap.Size(80,50));
                var myIcon2 = new BMap.Icon(require('./../../assets/images/onu.png'), new BMap.Size(80,50));
                var myIcon5 = new BMap.Icon(require('./../../assets/images/onuOn.png'), new BMap.Size(80,50));
                var myIcon3 = new BMap.Icon(require('./../../assets/images/lamp.png'), new BMap.Size(80,50));
                var myIcon7 = new BMap.Icon(require('./../../assets/images/lampOn.png'), new BMap.Size(80,50));
                var myIcon4 = new BMap.Icon(require('./../../assets/images/cover.png'), new BMap.Size(80,50));
                var myIcon8 = new BMap.Icon(require('./../../assets/images/coverOn.png'), new BMap.Size(80,50));
                var point = this.$store.state.wxf.location;
                console.log(this.$store.state.wxf.location)
                var markers = [];
                var pt = null;

                point.forEach((item,i)=>{
                  console.log(item)
                  pt = this.bd_encrypt(point[i].longitude, point[i].latitude);
                  /*for(let key in item){
                    if(key.latitude=='30.936316'){
                      marker = new BMap.Marker(pt,{icon:myIcon2});
                    }else {
                      marker = new BMap.Marker(pt,{icon:myIcon});
                    }
                  }*/
                  var marker = new BMap.Marker(pt,{icon:myIcon});;
                  if(item.onuName && item.onlineStatus == 1){
                    marker = new BMap.Marker(pt,{icon:myIcon5});
                  }else if(item.traceName && item.onlineStatus == 1){
                    marker = new BMap.Marker(pt,{icon:myIcon6});
                  }else if(item.lampPostName && item.onlineStatus == 1){
                    marker = new BMap.Marker(pt,{icon:myIcon7});
                  }else if(item.coverName && item.onlineStatus == 1){
                    marker = new BMap.Marker(pt,{icon:myIcon8});
                  }else if(item.onuName ){
                    marker = new BMap.Marker(pt,{icon:myIcon2});
                  }else if(item.traceName){
                    marker = new BMap.Marker(pt,{icon:myIcon});
                  }else if(item.lampPostName){
                    marker = new BMap.Marker(pt,{icon:myIcon3});
                  }else if(item.coverName){
                    marker = new BMap.Marker(pt,{icon:myIcon4});
                  }

                  markers.push(marker);
                  var content = `地址:${point[i].address} imei:${point[i].imei}`
                  addClickHandler(content,marker);
                });
                //最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
                var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});
                markerClusterer.setMinClusterSize(10);

                function addClickHandler(content,marker){
                    marker.addEventListener("click",function(e){
                        openInfo(content,e)}
                    );
                }
                function openInfo(content,e){
                    var p = e.target;
                    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                    var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
                    map.openInfoWindow(infoWindow,point); //开启信息窗口
                }
              this.state=[]
            },

          /*handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
            this.ListDeviceLation()
          },*/
          handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            this.ListDeviceLation();
            this.$store.state.wxf.lng=localStorage.getItem('lng');
            this.$store.state.wxf.lat=localStorage.getItem('lat');
            this.$store.state.wxf.zoom=localStorage.getItem('zoom');
          },
            ListDeviceLation(){
                this.$axios.get('monitorScreen/listMonitoredEquipmentMapsVO',{
                  params:{
                    flags:this.checkedCities.join(',')
                  }
                }).then((response)=>{
                    if(response.status === 200){
                        let res = response.data.data;
                        for(var i in res){
                          this.$store.state.wxf.location.push(...res[i])
                        }
                        console.log(this.$store.state.wxf.location);
                      this.list = this.$store.state.wxf.location.map(item => {
                        return { value: item, label: item.address };
                      });
                        /*for (var i in res.data){
                          this.location = res.data[i]
                        }
                        console.log(this.location)
                        this.initMap();*/
                        this.initMap();
                        this.$store.state.wxf.location=[]
                    }
                });

            },
            bd_encrypt(x,y){
                var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
                var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
                var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
                var bd_lon = z * Math.cos(theta) + 0.0065;
                var bd_lat = z * Math.sin(theta) + 0.006;
                var pt =new BMap.Point(bd_lon, bd_lat);
                return pt;
            },
          remoteMethod(query) {
            if (query !== '') {
              this.loading = true;
              setTimeout(() => {
                this.loading = false;
                this.options = this.list.filter(item => {
                  return item.label.toLowerCase()
                    .indexOf(query.toLowerCase()) > -1;
                });
              }, 200);
            } else {
              this.options = [];
            }
          },
          changes(e){
            this.$store.state.wxf.lng=e.longitude;
            this.$store.state.wxf.lat=e.latitude;
            this.$store.state.wxf.zoom=localStorage.getItem('zoom');
            this.ListDeviceLation();
          }
        }
    }
</script>

<style>
    .anchorBL{
        display:none;
    }
    .list{
        position: absolute;
        top: 0rem;
        right:1rem;

    }
    .searchs{
        position: absolute;
        top: -2.4rem;
        left: 7rem;
    }
</style>
