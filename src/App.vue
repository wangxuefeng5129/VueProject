<template>
  <div id="app">
    <div class="title-bg"></div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
  .title-bg{
    background: url("./assets/images/title.png") no-repeat center center;
    position: absolute;
    height: 1.96rem;
    width: 100%;
    background-size: cover;
  }
</style>
