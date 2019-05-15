<template>
    <baidu-map class="map"  :center="{lng:121.477937,lat:31.23507}" :zoom="13" :scroll-wheel-zoom="true" :max-zoom="13" :min-zoom="5">
        <bml-marker-clusterer :averageCenter="true">
            <bm-marker  v-for="(marker,index) in markers" :key="index" :position="{lng:marker.longitude,lat:marker.latitude}"></bm-marker>
        </bml-marker-clusterer>
    </baidu-map>
</template>

<script>
    export default {
        data(){
            return{
                markers:[

                ]
            }
        },
        mounted(){
          this.ListDeviceLation();
        },
        methods:{
            ListDeviceLation(){
                this.$axios.get('Statistics/ListDeviceLatLon').then((response)=>{
                    if(response.status === 200){
                        let res = response.data;
                        this.markers = res.data;
                    }
                });
            },
        }
    }
</script>
<style scoped>
    .map{
        width: 7.6rem;
        height: 5.6rem;
    }
    .anchorBL{
        display:none;
    }
</style>